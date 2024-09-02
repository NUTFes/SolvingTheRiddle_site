// function checkAnswerKeyword() {
//     var keyword = $("#keywordInput").val().toUpperCase(); // 入力を大文字に統一
//     switch (keyword) {
//         case "ラストスパート":
//             $("#answerResult").html(
//                 '<img src="./images/43rd Mystery Solve.png" alt="Congratulations!" style="width: 100%; height: auto;"/>'
//             );
//             break;
//         default:
//             $("#answerResult").text("無効なキーワードです。再試行してください。");
//             break;
//     }
// }

function checkHintKeyword() {
    var keyword = $("#hintInput").val().toUpperCase(); // 入力を大文字に統一
    switch (keyword) {
        case "1":
            $("#hintResult").text(
                "ARカメラでロゴをかざすと,,,");
            break;
        case "2":
            $("#hintResult").text(
                "エ〇ベーター、北〇〇星、〇カロ〇、サ〇〇スのようです。");
            break;
        case "3":
            $("#hintResult").text(
                "素？・？木、染？・？亭から考えると分かりやすいかもしれません。");
            break;
        case "4":
            $("#hintResult").text(
                "11という数字がアに対応してそうです。下に五十音表にあてはめると...");
            break;
        case "5":
            $("#hintResult").text(
                "泡という字の1～3画目を抜き出すとカタカナのシに見えます。");
            break;
        case "6":
            $("#hintResult").text(
                "Aが正直者だとするとDも正直者になりますが、正直者は1人という部分と矛盾します。同様に考えてみましょう。");
            break;
        case "7":
            $("#hintResult").html("まずはそれぞれの漢字の読み方を書いてみましょう。");
            break;
        case "8":
            $("#hintResult").text("縦読みの単語が4つ並んでいる様です。");
            break;
        case "ラストスパート":
            $("#hintResult").text("ラストスパートが答え＝まだラストではない。");
            break;
        case "コウコク":
            $("#hintResult").text("パンフレットの広告になにかがある...？");
            break;
        default:
            $("#hintResult").text("無効なキーワードです。再試行してください。");
            break;
    }
}

function transitionArPage() {
    window.location.href = "./false_advertisement.html";
}

// // フラグを使って新しいボタンの生成を1回だけに制限
// let buttonCreated = false;

// document.getElementById('actionButton').addEventListener('click', function () {
//     // テキストボックスの内容を取得
//     const keyword = document.getElementById('keywordInput').value.trim().toUpperCase();
    
//     // 結果エリアに表示
//     const answerResult = document.getElementById('answerResult');
    
//     if (keyword === '') {
//         answerResult.textContent = '無効なキーワードです。再試行してください。';
//         return; // 入力が空の場合は何もせずに戻る
//     }
    
//     switch (keyword) {
//         case 'ラストスパート':
//             answerResult.innerHTML = '<img src="./images/43rd_image_clear.png" alt="Congratulations!" style="width: 100%; height: auto;"/>';
//             break;
//         default:
//             answerResult.textContent = '無効なキーワードです。再試行してください。';
//             break;
//     }
    
//     // すでにボタンが作成されている場合は何もせずに戻る
//     if (buttonCreated) {
//         return;
//     }

//     // 新しいボタンを作成
//     const newButton = document.createElement('button');
//     newButton.textContent = 'ARカメラを起動';
    
//     // クリックイベントを追加
//     newButton.addEventListener('click', function () {
//         window.location.href = "./false_advertisement.html";
//     });
    
//     // 新しいボタンをボタンコンテナに追加
//     document.getElementById('buttonContainer').appendChild(newButton);
    
//     // ボタンが作成されたことを記録
//     buttonCreated = true;
// });

let buttonCreated = false; // ボタンの作成状況を管理するフラグ

document.getElementById('actionButton').addEventListener('click', function () {
    // テキストボックスの内容を取得
    const keyword = document.getElementById('keywordInput').value.trim().toUpperCase();
    
    // 結果エリアに表示
    const answerResult = document.getElementById('answerResult');
    
    // 入力が空の場合、または「ラストスパート」以外の入力の場合の処理
    if (keyword === '') {
        answerResult.textContent = '無効なキーワードです。再試行してください。';
        // ボタンを削除
        if (buttonCreated) {
            document.getElementById('buttonContainer').innerHTML = '';
            buttonCreated = false;
        }
        return;
    }

    switch (keyword) {
        case 'ラストスパート':
            answerResult.innerHTML = '<img src="./images/43rd_image_clear.png" alt="Congratulations!" style="width: 100%; height: auto;"/>';
            break;
        default:
            answerResult.textContent = '無効なキーワードです。再試行してください。';
            break;
    }
    
    // すでにボタンが作成されている場合は何もせずに戻る
    if (buttonCreated) {
        return;
    }

    // 新しいボタンを作成
    const newButton = document.createElement('button');
    newButton.textContent = 'ARカメラを起動';
    
    // クリックイベントを追加
    newButton.addEventListener('click', function () {
        window.location.href = "./false_advertisement.html";
    });
    
    // 新しいボタンをボタンコンテナに追加
    document.getElementById('buttonContainer').appendChild(newButton);
    
    // ボタンが作成されたことを記録
    buttonCreated = true;
});
