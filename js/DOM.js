showHome()

let session = 0;

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


    
    if(session === 0) {
        let kpBox = document.getElementById("kp")
        for (i=0; i<character[index].kp; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            kpBox.appendChild(input)
            
        }
        let headBox = document.getElementById("head")
        for (i=0; i<character[index].head; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            headBox.appendChild(input)
            
        }
        let chestBox = document.getElementById("chest")
        for (i=0; i<character[index].chest; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            chestBox.appendChild(input)
        }
        let stomachBox = document.getElementById("stomach")
        for (i=0; i<character[index].stomach; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            stomachBox.appendChild(input)
        }
        let rightarmBox = document.getElementById("rigth-arm")
        for (i=0; i<character[index].rightarm; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            rightarmBox.appendChild(input)
        }
        let leftarmBox = document.getElementById("left-arm")
        for (i=0; i<character[index].leftarm; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            leftarmBox.appendChild(input)
        }
        let rightlegBox = document.getElementById("rigth-leg")
        for (i=0; i<character[index].rightleg; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            rightlegBox.appendChild(input)
        }
        let leftlegBox = document.getElementById("left-leg")
        for (i=0; i<character[index].leftleg; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = "checkbox";
            leftlegBox.appendChild(input)
        }

        session = 1
    } 






    //document.getElementById("chest").value = character[index].chest





    // document.getElementById("stomach").value = character[index].stomach
    // document.getElementById("right-arm").value = character[index].rightarm
    // document.getElementById("left-arm").value = character[index].leftarm
    // document.getElementById("right-leg").value = character[index].rightleg
    // document.getElementById("left-leg").value = character[index].leftleg

    // let table = document.getElementById("basic_stats")

    // var rowHead = table.insertRow(0)
    // var rowChest = table.insertRow(1)
    // var rowStomach = table.insertRow(2)

    // var cell1_1 = rowHead.insertCell(0)
    // var cell1_2 = rowHead.insertCell(1)
    // var cell2_1 = rowChest.insertCell(0)
    // var cell2_2 = rowChest.insertCell(1)
    // var cell3_1 = rowStomach.insertCell(0)
    // var cell3_2 = rowStomach.insertCell(1)

    // cell1_1.innerHTML = "Head"
    // cell1_2.innerHTML = character[index].head
    // cell2_1.innerHTML = "Chest"
    // cell2_2.innerHTML = character[index].chest
    // cell3_1.innerHTML = "Stomach"
    // cell3_2.innerHTML = character[index].stomach



}



function addKp() {

}




