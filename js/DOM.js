showHome()

let character = [
    {
        "name": "Tanana",
        "color": "#9F2B68",
        "scr": "./resources/tanana.jpg",
        "kp" : 8,
    },
]



function showHome() {
    document.getElementById("home").style.display = "block"
    document.getElementById("character_sheet").style.display = "none"
}


function showCharacter(index) {
   
    document.getElementById("home").style.display = "none"
    document.getElementById("character_sheet").style.display = "block"

    document.getElementById("name").value = character[index].name 
    document.getElementById("picture").src = character[index].scr
    document.getElementById("bottom-line").style.background = character[index].color
    document.getElementById("kp").value = character[index].kp

   
}



function addKp() {

}




