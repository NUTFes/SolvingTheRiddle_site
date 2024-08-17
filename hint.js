function checkHintKeyword() {
    var keyword = $("#hintInput").val().toUpperCase(); // 入力を大文字に統一
    switch (keyword) {
        case "2":
            $("#hintResult").text(
                "エレベーター、コンタクトレンズ、マカロニ、サックスのようです。");
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
                "占という字の1・2画目を抜き出すとカタカナのトになります。");
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