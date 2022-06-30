function askUser(){
    let userGame = ""
    if (confirm("Click OK if you love Video Games!")) {
        userGame = "Game ON!";
    }
    else {
        userGame = "Game OVER..."
    }
    return userGame;
}

function userFavGame(){
    let question = prompt("What is your favorite Video Game?");
    let print = '';

    if (question != null) {
        print = "Ah yes, that is an excellent game.";
    }
    else {
        print = "Try again";
    }

    return print;
}

function numberOfGames() {
    let gameTotal = prompt("How many video games do you own?");
    let output = '';

    for(let i = 0; i < gameTotal; i++) {
        output += "<img class='shwing' src='https://www.1addicts.com/forums/attachment.php?attachmentid=2048195&stc=1&d=1557196382'/>";
    }

    return document.write(output);
}


function confirmFunction(){
    confirm("Click OK to confirm");
}

askUser();
// userFavGame();
confirmFunction();