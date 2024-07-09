function checkKeyword() {
    var keyword = $('#keywordInput').val().toUpperCase(); // 入力を大文字に統一
    switch(keyword) {
        case 'NUTFES':
            $('#result').html('<img src="congrats.jpg" alt="Congratulations!"/>');
            break;
        case 'GIDAI':
            $('#result').text('これは最初のヒントです。');
            break;
        case 'SOLUTION':
            $('#result').text('次のヒント：解決策に近づいています！');
            break;
        case 'FINAL':
            $('#result').text('最後のヒント：これがキーポイントです！');
            break;
        default:
            $('#result').text('無効なキーワードです。再試行してください。');
            break;
    }
}
