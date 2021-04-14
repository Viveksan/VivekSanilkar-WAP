window.onload = function() {
    "use strict";
    var buttonClicked = document.getElementById("biggerDecoration");
    buttonClicked.onclick = setTimer;
    var checkboxChecked = document.getElementById("blingCheckbox");
    checkboxChecked.onchange = bling;
    wordCheck();
};

function setTimer() {
    setInterval(biggerDecoration, 1000);
}

function biggerDecoration() {
    var fontSize = document.getElementById('txt').style.fontSize;
    if (!fontSize) {
        fontSize = "10pt";
    }
    document.getElementById('txt').style.fontSize = (parseInt(fontSize) + 2) + "pt";
}

function bling() {
    if (document.getElementById('blingCheckbox').checked) {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://store-images.s-microsoft.com/image/apps.31187.14379347388692964.ac2b4c82-32ab-4843-86d2-fac1f139a81d.8cde0a07-90de-4b2e-83b8-ceb09a03a7cf?mode=scale&q=90&h=1080&w=1920)";
        document.getElementById('txt').style.fontWeight = "bold";
        document.getElementById('txt').style.color = "green";
        document.getElementById('txt').style.textDecoration = "underline";
    } else {
        document.getElementsByTagName('body')[0].style.backgroundImage = "";
        document.getElementById('txt').style.fontWeight = "normal";
        document.getElementById('txt').style.color = "black";
        document.getElementById('txt').style.textDecoration = "none";

    }

}

function wordCheck() {
    var text = document.getElementById("txter").innerHTML;
    for (let i in text) {
        if (tex[i].length >= 5)

            var newText = text[i].replace("klejdi");
    }
    document.getElementById("txter").innerHTML = newText;
}