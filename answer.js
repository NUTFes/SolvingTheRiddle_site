function checkAnswerKeyword() {
    var keyword = $("#keywordInput").val().toUpperCase(); // 入力を大文字に統一
    switch (keyword) {
        case "ラストスパート":
            $("#answerResult").html(
                '<img src="./images/43rd Mystery Solve.png" alt="Congratulations!" style="width: 600px; height: auto;"/>');
            break;
        default:
            $("#answerResult").text("無効なキーワードです。再試行してください。");
            break;
    }
}