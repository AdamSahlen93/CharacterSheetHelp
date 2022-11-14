startDice()

function startDice() {
    document.getElementById("dice").style.transform = "rotate(-45deg)"
    document.getElementById("dice-h").innerHTML = "";
    document.getElementById("dice").className = "d-flex dice bg-dark justify-content-center align-items-center rounded"
}


function rollT4() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 5);
    document.getElementById("dice").className = "d-flex dice bg-brown justify-content-center align-items-center rounded" 
}

function rollT6() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 7);
    document.getElementById("dice").className = "d-flex dice bg-warning justify-content-center align-items-center rounded" 
}

function rollT8() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 9);
    document.getElementById("dice").className = "d-flex dice bg-info justify-content-center align-items-center rounded" 
}

function rollT10() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 11);
    document.getElementById("dice").className = "d-flex dice bg-success justify-content-center align-items-center rounded" 
}

function rollT12() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 13);
    document.getElementById("dice").className = "d-flex dice bg-orange justify-content-center align-items-center rounded" 
}

function rollT20() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 21);
    document.getElementById("dice").className = "d-flex dice bg-danger justify-content-center align-items-center rounded" 
}

function rollT100() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(Math.random() * 101);
    document.getElementById("dice").className = "d-flex dice bg-dark justify-content-center align-items-center rounded" 
}