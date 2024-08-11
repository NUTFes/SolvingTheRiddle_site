function checkHintKeyword() {
    var keyword = $("#hintInput").val().toUpperCase(); // 入力を大文字に統一
    switch (keyword) {
        case "スライド2":
            $("#hintResult").html("まずはそれぞれの漢字の読み方を書いてみましょう。");
            break;
        case "スライド4":
            $("#hintResult").text(
                "素？・？木、染？・？亭から考えると分かりやすいかもしれません。"
            );
            break;
        case "スライド6":
            $("#hintResult").text("縦読みの単語が4つ並んでいる様です。");
            break;
        case "スライド8":
            $("#hintResult").text(
                "占という字の1・2画目を抜き出すとカタカナのトになります。"
            );
            break;
        case "スライド10":
            $("#hintResult").text(
                "Aが正直者だとするとDも正直者になりますが、正直者は1人という部分と矛盾します。同様に考えてみましょう。"
            );
            break;
        case "スライド12":
            $("#hintResult").text(
                "エレベーター、コンタクトレンズ、マカロニ、サックスのようです。"
            );
            break;
        case "スライド14":
            $("#hintResult").text(
                "11という数字がアに対応してそうです。下に五十音表にあてはめると..."
            );
            break;
        case "スライド16":
            $("#hintResult").text("ラストスパートが答え＝まだラストではない。");
            break;
        default:
            $("#hintResult").text("無効なキーワードです。再試行してください。");
            break;
    }
}