startDice()

function startDice() {
    document.getElementById("dice").style.transform = "rotate(-45deg)"
    document.getElementById("dice-h").innerHTML = "";
    document.getElementById("dice").className = "d-flex dice bg-dark justify-content-center align-items-center rounded"
}


function rollT4() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 4);
    document.getElementById("dice").className = "d-flex dice bg-brown justify-content-center align-items-center rounded" 
}

function rollT6() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 6);
    document.getElementById("dice").className = "d-flex dice bg-warning justify-content-center align-items-center rounded" 
}

function rollT8() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 8);
    document.getElementById("dice").className = "d-flex dice bg-info justify-content-center align-items-center rounded" 
}

function rollT10() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 10);
    document.getElementById("dice").className = "d-flex dice bg-success justify-content-center align-items-center rounded" 
}

function rollT12() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 12);
    document.getElementById("dice").className = "d-flex dice bg-orange justify-content-center align-items-center rounded" 
}

function rollT20() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 20);
    document.getElementById("dice").className = "d-flex dice bg-danger justify-content-center align-items-center rounded" 
}

function rollT100() {
    document.getElementById("dice").style.transform = "rotate(0deg)";   
    document.getElementById("dice-h").innerHTML = Math.floor(1 + Math.random() * 100);
    document.getElementById("dice").className = "d-flex dice bg-dark justify-content-center align-items-center rounded" 
}