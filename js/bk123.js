function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i< 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    setInterval(function() {
    var elements = document.getElementsByTagName("a");
    for (var i = 0; i< elements.length; i++) {
    elements[i].style.color = randomColor();
    document.body.style.backgroundColor = randomColor();
    }
    }, 350);