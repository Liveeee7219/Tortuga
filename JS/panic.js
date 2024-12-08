window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "27") {
        window.location.replace("google.com");
    }
}