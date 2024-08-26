import * as THREE from 'three';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// canvas要素を取得
const canvas = document.querySelector('#myCanvas');
// レンダラーを作る
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
const width = 960;
const height = 540;
// レンダラーのサイズを設定
renderer.setSize(width, height);
// デバイスピクセル比を設定
renderer.setPixelRatio(window.devicePixelRatio);
// シーンを作成
const scene = new THREE.Scene();
// カメラを作成(画角、アスペクト比、描画開始距離, 描画終了距離)
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, 1000);

// https://note.com/npaka/n/n1ff411975ae0
var box = null;
const manager = new THREE.LoadingManager();
manager.addHandler(/\.dds$/i, new DDSLoader());
// MTLファイルの読み込み
new MTLLoader(manager).load(
	'models/robot.mtl',
	// ロード完了時の処理
	function (materials) {
		materials.preload();

		// OBJファイルの読み込み
		new OBJLoader(manager)
			.setMaterials(materials) // マテリアルの指定
			.load(
				'models/robot.obj',
				// ロード完了時の処理
				function (object) {
					// シーンへのモデルの追加
					box = object;
					scene.add(box);
					//   box.position.y = -95;
					box.position.set(0, 0, 0);
					box.rotation.set((Math.PI / 2), 0, 0);
					box.scale.set(100, 100, 100);
				});
	},
);

// ライトを作成
const light = new THREE.DirectionalLight(0xffffff);
light.intensity = 2;
light.position.set(1, 1, 1);
// ライトをシーンに追加
scene.add(light);

// マウスの座標管理用のベクトルを作成
const mouse = new THREE.Vector2();
// スワイプ移動時の座標管理用のベクトルを作成
const swipeMove = new THREE.Vector2(0, 0);
// 最後のスワイプ位置の座標管理用のベクトルを作成
const swipeMoveLast = new THREE.Vector2(0, 0);

// イベントハンドラを設定
if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
	// canvas要素にイベントハンドラを紐付け
	canvas.addEventListener('touchstart', handleTouchStart);
	canvas.addEventListener('touchmove', handleTouchMove);
} else {
	// canvas要素にイベントハンドラを紐付け
	canvas.addEventListener('mousemove', handleMouseMove);
}

// アニメーション
tick();
function tick() {
	requestAnimationFrame(tick);
	// レンダリングする
	renderer.render(scene, camera);
}

// 初期化用に実行
onResize();
// リサイズ時のイベントハンドラとして登録
window.addEventListener('resize', onResize);

// canvasのリサイズを行う関数
function onResize() {
	// 画面のサイズを取得
	const width = window.innerWidth;
	const height = window.innerHeight;
	// レンダラーのサイズを再設定
	renderer.setSize(width, height);
	// レンダラーのデバイスピクセル比を再設定
	renderer.setPixelRatio(window.devicePixelRatio);
	// カメラのアスペクト比を再設定
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	
	// イベントハンドラを再設定
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
		// canvas要素にイベントハンドラを紐付け
		canvas.addEventListener('touchstart', handleTouchStart);
		canvas.addEventListener('touchmove', handleTouchMove);
		// canvas要素のイベントハンドラを解除
		canvas.removeEventListener('mousemove', handleMouseMove);
	} else {
		// canvas要素にイベントハンドラを紐付け
		canvas.addEventListener('mousemove', handleMouseMove);
		// canvas要素のイベントハンドラを解除
		canvas.removeEventListener('touchstart', handleTouchStart);
		canvas.removeEventListener('touchmove', handleTouchMove);
	}
}

// マウス移動時のイベントハンドラ
function handleMouseMove(event) {
	const element = event.currentTarget; // イベントを登録した要素(canvas)を取得する
	// canvas要素上のXY座標を取得
	const x = event.clientX - element.offsetLeft;
	const y = event.clientY - element.offsetTop;
	// canvas要素の幅・高さを取得
	const w = element.offsetWidth;
	const h = element.offsetHeight;
	// -1~1の範囲で現在のマウスの座標(位置ベクトル)を登録する
	mouse.x = (x / w) * 2 - 1;
	mouse.y = (y / h) * 2 - 1;
	if (!box) {
		return;
	}
	// メッシュをマウスの方向に回転させる
	box.rotation.x = mouse.y * (Math.PI) + (Math.PI / 2);
	box.rotation.y = mouse.x * (Math.PI);
}

// スワイプ開始時のイベントハンドラ
function handleTouchStart(event) {
	// スワイプ位置の最終座標を更新する
	swipeMoveLast.x = event.touches[0].clientX;
	swipeMoveLast.y = event.touches[0].clientY;
}
// スワイプ移動時のイベントハンドラ
function handleTouchMove(event) {
	const element = event.currentTarget; // イベントを登録した要素(canvas)を取得する
	// canvas要素上のXY座標を取得
	const x = event.touches[0].clientX;
	const y = event.touches[0].clientY;
	// canvas要素の幅・高さを取得
	const w = element.offsetWidth;
	const h = element.offsetHeight;
	// -1~1の範囲で現在のマウスの座標(位置ベクトル)を登録する
	swipeMove.x = ((x - swipeMoveLast.x) / w);
	swipeMove.y = ((y - swipeMoveLast.y) / h);
	if (!box) {
		return;
	}
	// メッシュをスワイプの方向に回転させる
	box.rotation.x += swipeMove.y * (Math.PI * 2);
	box.rotation.y += swipeMove.x * (Math.PI * 2);
	// スワイプ位置の最終座標を更新する
	swipeMoveLast.x = x;
	swipeMoveLast.y = y;
}