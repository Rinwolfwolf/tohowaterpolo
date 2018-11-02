var ready = document.getElementById('ready');
ready.onclick = function () {
    var clear = document.getElementById('clear').value;
    var clearnumber = parseInt(clear, 10);
    if (clearnumber = 777675) {
        location.href = "home.html";
    } else {
        alert('パスワードが違います！');
    }

}