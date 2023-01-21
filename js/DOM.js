showHome()

let session = 0;

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
      
    };
    reader.readAsText(file);
    showCharacter()
    
  }
  
  function displayContents(contents) {
    parse(contents);
  }
  
  document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);
   
    
  var xmlDoc;

  function parse(content){
    //Create a parser
    var parser = new DOMParser();
    xmlDoc = parser.parseFromString(content,"text/xml");
    //Parse!
    document.getElementById("firstname").value = xmlDoc.evaluate("//firstname",xmlDoc).iterateNext().textContent;
    document.getElementById("lastname").value = xmlDoc.evaluate("//lastname",xmlDoc).iterateNext().textContent;
    document.getElementById("picture").src = xmlDoc.evaluate("//picture",xmlDoc).iterateNext().textContent;
    document.getElementById("bottom-line").style.background = xmlDoc.evaluate("//color",xmlDoc).iterateNext().textContent;
    document.getElementById("intelligenceValue").innerText = xmlDoc.evaluate("//intelligence", xmlDoc).iterateNext().textContent;
    document.getElementById("agilityValue").innerText = xmlDoc.evaluate("//agility", xmlDoc).iterateNext().textContent;
    document.getElementById("psycheValue").innerText = xmlDoc.evaluate("//psyche", xmlDoc).iterateNext().textContent;
    document.getElementById("strenghtValue").innerText = xmlDoc.evaluate("//strength", xmlDoc).iterateNext().textContent;
    document.getElementById("charismaValue").innerText = xmlDoc.evaluate("//charisma", xmlDoc).iterateNext().textContent;
    document.getElementById("physiqueValue").innerText = xmlDoc.evaluate("//physique", xmlDoc).iterateNext().textContent;
    document.getElementById("sizeValue").innerText = xmlDoc.evaluate("//size", xmlDoc).iterateNext().textContent;
    document.getElementById("perceiptionValue").innerText = xmlDoc.evaluate("//perceiption", xmlDoc).iterateNext().textContent;
    let checkbox = xmlDoc.evaluate("//checkboxClass", xmlDoc).iterateNext().textContent;

    let totalKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'total')]/max" ,xmlDoc).iterateNext().textContent
    let kpBox = document.getElementById("kp")
    for (i=0; i<totalKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.id="checkbox"
        input.defaultChecked = true
        input.className = "checkbox-kp"
        kpBox.appendChild(input)
    }

    let headKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'head')]/max" ,xmlDoc).iterateNext().textContent
    let headBox = document.getElementById("head")
    for (i=0; i<headKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        headBox.appendChild(input)
        
    }

    let chestKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'chest')]/max" ,xmlDoc).iterateNext().textContent
    let chestBox = document.getElementById("chest")
    for (i=0; i<chestKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        chestBox.appendChild(input)
    }

    let stomachKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'stomach')]/max" ,xmlDoc).iterateNext().textContent
    let stomachBox = document.getElementById("stomach")
    for (i=0; i<stomachKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        stomachBox.appendChild(input)
    }

    let rightArmKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'right-arm')]/max" ,xmlDoc).iterateNext().textContent
    let rightarmBox = document.getElementById("rigth-arm")
    for (i=0; i<rightArmKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        rightarmBox.appendChild(input)
    }

    let leftArmKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'left-arm')]/max" ,xmlDoc).iterateNext().textContent
    let leftarmBox = document.getElementById("left-arm")
    for (i=0; i<leftArmKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        leftarmBox.appendChild(input)
    }

    let rightLegKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'right-leg')]/max" ,xmlDoc).iterateNext().textContent
    let rightlegBox = document.getElementById("rigth-leg")
    for (i=0; i<rightLegKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        rightlegBox.appendChild(input)
    }

    let leftLegKpValue = xmlDoc.evaluate("//bodypart[contains(@id,'left-leg')]/max" ,xmlDoc).iterateNext().textContent
    let leftlegBox = document.getElementById("left-leg")
    for (i=0; i<leftLegKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.defaultChecked = true
        input.className = checkbox
        leftlegBox.appendChild(input)
    }

    let psycheKpValue = xmlDoc.evaluate("//psyche" ,xmlDoc).iterateNext().textContent
    let powerBox = document.getElementById("kraftpoäng")
    for (i=0; i<psycheKpValue; i++) {
        var input = document.createElement("input")
        input.type = "checkbox"
        input.id="checkbox"
        input.defaultChecked = true
        input.className = "checkbox-kraftpoäng"
        powerBox.appendChild(input)
    }

}


function showHome() {
    document.getElementById("home").style.display = "block"
    document.getElementById("character_sheet").style.display = "none"
}


function showCharacter() {
   
    document.getElementById("home").style.display = "none"
    document.getElementById("character_sheet").style.display = "block"


}






