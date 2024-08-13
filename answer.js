function checkAnswerKeyword() {
    var keyword = $("#keywordInput").val().toUpperCase(); // 入力を大文字に統一
    switch (keyword) {
        case "ラストスパート":
            $("#answerResult").html(
                '<img src="images/Clear-3.png" alt="Congratulations!"/>'
            );
            break;
        default:
            $("#answerResult").text("無効なキーワードです。再試行してください。");
            break;
    }
}