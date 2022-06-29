let val = ""
if (confirm("Click OK if you love Video Games!")) {
    val = "Game ON!";
}
else {
    val = "Game OVER..."
}

let question = prompt("What is your favorite Video Game?");
if (question != null) {
    document.getElementById("button").innerHTML =
    "Ah yes, " + question + " that is an excellent game.";
}

function confirmFunction(){
    confirm("Click OK to confirm");
}