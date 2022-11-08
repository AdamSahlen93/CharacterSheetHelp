showHome()

let character = [
    {
        "firstname": "Tanana",
        "lastname": "den äldre",
        "color": "#9F2B68",
        "scr": "./resources/tanana.jpg",
        "kp" : 8,
        "head": 4,
        "chest": 5,
        "stomach": 4,
        "rightarm": 3,
        "leftarm": 3,
        "rightleg": 4,
        "leftleg": 4,
    },
    {
        "firstname": "Jens",
        "lastname": "Nord",
        "color": "#50C878",
        "scr": "./resources/jens.jpg",
        "kp" : 15,
        "head": 5,
        "chest": 6,
        "stomach": 5,
        "rightarm": 4,
        "leftarm": 4,
        "rightleg": 5,
        "leftleg": 5,
    },
    {
        "firstname": "Svarte",
        "lastname": "My",
        "color": "#8B0000",
        "scr": "./resources/my.jpg",
        "kp" : 8,
        "head": 4,
        "chest": 5,
        "stomach": 4,
        "rightarm": 3,
        "leftarm": 3,
        "rightleg": 4,
        "leftleg": 4,
    },
    {
        "firstname": "Skritz",
        "lastname": "Cragnas",
        "color": "#C04000",
        "scr": "./resources/crag.jpg",
        "kp" : 11,
        "head": 4,
        "chest": 5,
        "stomach": 4,
        "rightarm": 3,
        "leftarm": 3,
        "rightleg": 4,
        "leftleg": 4,
    },
    {
        "firstname": "Torbjörn",
        "lastname": "Haraldsson",
        "color": "#6F4E37",
        "scr": "./resources/torbjörn.jpg",
        "kp" : 10,
        "head": 4,
        "chest": 5,
        "stomach": 4,
        "rightarm": 3,
        "leftarm": 3,
        "rightleg": 4,
        "leftleg": 4,
    },
]





function showHome() {
    document.getElementById("home").style.display = "block"
    document.getElementById("character_sheet").style.display = "none"
}


function showCharacter(index) {
   
    document.getElementById("home").style.display = "none"
    document.getElementById("character_sheet").style.display = "block"
    document.getElementById("firstname").value = character[index].firstname 
    document.getElementById("lastname").value = character[index].lastname 
    document.getElementById("picture").src = character[index].scr
    document.getElementById("bottom-line").style.background = character[index].color
    document.getElementById("kp").value = character[index].kp
    document.getElementById("head").value = character[index].head
    document.getElementById("chest").value = character[index].chest
    document.getElementById("stomach").value = character[index].stomach
    document.getElementById("right-arm").value = character[index].rightarm
    document.getElementById("left-arm").value = character[index].leftarm
    document.getElementById("right-leg").value = character[index].rightleg
    document.getElementById("left-leg").value = character[index].leftleg
}



function addKp() {

}




