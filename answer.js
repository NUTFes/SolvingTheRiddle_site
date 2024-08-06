function checkKeyword() {
    var keyword = $('#keywordInput').val().toUpperCase(); // 入力を大文字に統一
    switch (keyword) {
        case 'ラストスパート':
            $('#result').html('<img src="congrats.jpg" alt="Congratulations!"/>');
            break;
        default:
            $('#result').text('無効なキーワードです。再試行してください。');
            break;
    }
}
