showHome()

let session = 0;

let character = [
    {
        "firstname": "Tanana",
        "lastname": "den äldre",
        "color": "#9F2B68",
        "checkboxClass": "checkbox-1",
        "scr": "./resources/tanana.jpg",
        "kp" : 8,
        "head": 4,
        "chest": 5,
        "stomach": 4,
        "rightarm": 3,
        "leftarm": 3,
        "rightleg": 4,
        "leftleg": 4,
        "wepons":[
            {
                "weponName": "Vandringsstav",
                "dice": 6,
                "amount": 1,
                "weilding": "Du slår till din fiende med din vandringsstav",
                "description": "En lång och knotig vandringsstav med lykta"
            },
        ],
        "items": [
            {
                "itemName": "Hälsodryck",
                "use": "Du återfår 1t6 av total KP",
                "description": "En flaska innehållande en röd och bubblande vätska",
                "quantity":"1"

            },
        ],
        "clothes": [
            {
                "clothesName": "Tygtunika",
                "absorbiton": "1KP i hela kroppen förutom huvud",
                "description": "En gammal tunika som har sett sina bästa dagar, vilken färg den en gång varit är omöjligt att säga",
            },
        ],
        "cloth": [
            {
                "clothName": "Tygtunika",
                "absorbiton": "1KP i hela kroppen förutom huvud",
                "description": "En gammal tunika som har sett sina bästa dagar, vilken färg den en gång varit är omöjligt att säga",
            },
        ],
        "spells": [
            {
                "spellName": "Blixtar",
                "cost": "Psyke",
                "dice": 6,
                "amount": 1,
                "description": "Du framkallar blixtar som träffar en motståndare upp till 25 meter bort",
                "additional": "Skadetärningarnas antal ökar per spenderat psyke"
            },
        ]
    },
    {
        "firstname": "Jens",
        "lastname": "Nord",
        "color": "#50C878",
        "checkboxClass": "checkbox-2",
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
        "checkboxClass": "checkbox-3",
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
        "checkboxClass": "checkbox-4",
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
        "checkboxClass": "checkbox-5",
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
            input.id="checkbox"
            input.defaultChecked = true
            input.className = "checkbox-kp"
            kpBox.appendChild(input)
            
        }
        let headBox = document.getElementById("head")
        for (i=0; i<character[index].head; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            headBox.appendChild(input)
            
        }
        let chestBox = document.getElementById("chest")
        for (i=0; i<character[index].chest; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            chestBox.appendChild(input)
        }
        let stomachBox = document.getElementById("stomach")
        for (i=0; i<character[index].stomach; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            stomachBox.appendChild(input)
        }
        let rightarmBox = document.getElementById("rigth-arm")
        for (i=0; i<character[index].rightarm; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            rightarmBox.appendChild(input)
        }
        let leftarmBox = document.getElementById("left-arm")
        for (i=0; i<character[index].leftarm; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            leftarmBox.appendChild(input)
        }
        let rightlegBox = document.getElementById("rigth-leg")
        for (i=0; i<character[index].rightleg; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            rightlegBox.appendChild(input)
        }
        let leftlegBox = document.getElementById("left-leg")
        for (i=0; i<character[index].leftleg; i++) {
            var input = document.createElement("input")
            input.type = "checkbox"
            input.defaultChecked = true
            input.className = character[index].checkboxClass;
            leftlegBox.appendChild(input)
        }

        session = 1
    } 

}



function addKp() {

}




