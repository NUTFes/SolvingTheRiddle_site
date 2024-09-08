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
        case "43":
            $("#hintResult").text("たかそうが出した挑戦状の広告が66ページにあるから読み取ってみよう");
            break;
        default:
            $("#hintResult").text("無効なキーワードです。再試行してください。");
            break;
    }
}

function transitionArPage() {
    window.location.href = "./false_advertisement.html";
}

document.getElementById('actionButton').addEventListener('click', function () {
    // テキストボックスの内容を取得
    const keyword = document.getElementById('keywordInput').value.trim().toUpperCase();

    // 結果エリアに表示
    const answerResult = document.getElementById('answerResult');
    const buttonContainer = document.getElementById('buttonContainer');

    // 「送信」ボタンを非表示にするために「送信」ボタンを取得
    const actionButton = document.getElementById('actionButton');

    // 入力が空の場合、または「ラストスパート」以外の入力の場合の処理
    if (keyword === '') {
        answerResult.textContent = '無効なキーワードです。再試行してください。';
        // ボタンを削除
        buttonContainer.innerHTML = '';
        return;
    }

    switch (keyword) {
        case 'ラストスパート':
            answerResult.innerHTML = '<img src="./images/43rd_clear.png" alt="Congratulations!" style="width: 100%; height: auto;"/>';
            // 新しいボタンを作成
            const newButton = document.createElement('button');
            newButton.textContent = 'ARカメラを起動';

            // クリックイベントを追加
            newButton.addEventListener('click', function () {
                window.location.href = "./false_advertisement.html";
            });

            // 新しいボタンをボタンコンテナに追加
            buttonContainer.appendChild(newButton);

            // 送信ボタンを非表示にする
            actionButton.style.display = 'none';
            break;
        default:
            answerResult.textContent = '無効なキーワードです。再試行してください。';
            // ボタンを削除
            buttonContainer.innerHTML = '';
            break;
    }
});
