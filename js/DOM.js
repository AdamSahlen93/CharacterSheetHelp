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

    document.getElementById("specName1").innerText = xmlDoc.evaluate("//additional[contains(@id,'a1')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue1").innerText = xmlDoc.evaluate("//additional[contains(@id,'a1')]/score", xmlDoc).iterateNext().textContent;

    document.getElementById("specName2").innerText = xmlDoc.evaluate("//additional[contains(@id,'a2')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue2").innerText = xmlDoc.evaluate("//additional[contains(@id,'a2')]/score", xmlDoc).iterateNext().textContent;

    document.getElementById("specName3").innerText = xmlDoc.evaluate("//additional[contains(@id,'a3')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue3").innerText = xmlDoc.evaluate("//additional[contains(@id,'a3')]/score", xmlDoc).iterateNext().textContent;

    document.getElementById("specName4").innerText = xmlDoc.evaluate("//additional[contains(@id,'a4')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue4").innerText = xmlDoc.evaluate("//additional[contains(@id,'a4')]/score", xmlDoc).iterateNext().textContent;

    document.getElementById("specName5").innerText = xmlDoc.evaluate("//additional[contains(@id,'a5')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue5").innerText = xmlDoc.evaluate("//additional[contains(@id,'a5')]/score", xmlDoc).iterateNext().textContent;

    document.getElementById("specName6").innerText = xmlDoc.evaluate("//additional[contains(@id,'a6')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue6").innerText = xmlDoc.evaluate("//additional[contains(@id,'a6')]/score", xmlDoc).iterateNext().textContent;

    document.getElementById("specName7").innerText = xmlDoc.evaluate("//additional[contains(@id,'a7')]/name", xmlDoc).iterateNext().textContent;
    document.getElementById("specValue7").innerText = xmlDoc.evaluate("//additional[contains(@id,'a7')]/score", xmlDoc).iterateNext().textContent;

   
    let weponContainer = `<h5>Vapen</h5>`;
    const types = document.evaluate("//weapons/weapon/type", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisType = types.iterateNext();
    const descriptions = document.evaluate("//weapons/weapon/description", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisDescription = descriptions.iterateNext();
    const dices = document.evaluate("//weapons/weapon/dice", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisDice = dices.iterateNext();
    const amounts = document.evaluate("//weapons/weapon/amount", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisAmount = amounts.iterateNext();

    while (thisType) {
    let result = `
                    <div class="d-flex flex-column my-3">
                        <div class="d-flex flex-column mx-3 mb-2 ">
                            <div class="d-flex flex-column bg-white justify-content-center">
                                <div class="d-flex justify-content-between align-items-center pt-2 text-white w-100 bg-dark rounded-top">
                                    <h6 class="ml-3">${thisType.textContent}</h6>
                                    <div class="mr-3 border border-light rounded mb-2">
                                        <p class="px-2 quick-damage">${thisAmount.textContent}${thisDice.textContent}</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-column bg-white justify-content-center px-2 rounded-bottom border border-dark w-100">
                                        <div class="d-flex flex-row justify-content-end pt-2 card-container">
                                        </div>
                                        <div>
                                            <div class="d-flex flex-row justify-content-between">
                                                <p>${thisDescription.textContent}</p>
                                            </div>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </div>
    `
        
        weponContainer += result;
        thisType = types.iterateNext();
        thisDescription = descriptions.iterateNext();
        thisAmount = amounts.iterateNext();
        thisDice = dices.iterateNext();
    }

    let spellContainer = `<h5>Trolldom</h5>`;
    const spelltypes = document.evaluate("//spells/spell/name", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisspellType = spelltypes.iterateNext();
    const spelldescriptions = document.evaluate("//spells/spell/description", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisspellDescription = spelldescriptions.iterateNext();
    const spelldices = document.evaluate("//spells/spell/dice", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisspellDice = spelldices.iterateNext();
    const spellamounts = document.evaluate("//spells/spell/amount", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisspellAmount = spellamounts.iterateNext();

    while (thisspellType) {
        let result = `
                        <div class="d-flex flex-column my-3">
                            <div class="d-flex flex-column mx-3 mb-2 ">
                                <div class="d-flex flex-column bg-white justify-content-center">
                                    <div class="d-flex justify-content-between align-items-center pt-2 text-white w-100 bg-info rounded-top">
                                        <h6 class="ml-3">${thisspellType.textContent}</h6>
                                        <div class="mr-3 border border-light rounded mb-2">
                                            <p class="px-2 quick-damage">${thisspellAmount.textContent}${thisspellDice.textContent}</p>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column bg-white justify-content-center px-2 rounded-bottom border border-dark w-100">
                                            <div class="d-flex flex-row justify-content-end pt-2 card-container">
                                            </div>
                                            <div>
                                                <div class="d-flex flex-row justify-content-between">
                                                    <p>${thisspellDescription.textContent}</p>
                                                </div>
                                            </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
        `
            
            spellContainer += result;
            thisspellType = spelltypes.iterateNext();
            thisspellDescription = spelldescriptions.iterateNext();
            thisspellAmount = spellamounts.iterateNext();
            thisspellDice = spelldices.iterateNext();
        }
    
    document.getElementById("progress").innerHTML = weponContainer + spellContainer 

    let armorContainer = `<h5>Kläder</h5>`;
    const armortypes = document.evaluate("//armors/armor/name", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisarmorType = armortypes.iterateNext();
    const armordescriptions = document.evaluate("//armors/armor/protects", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisarmorDescription = armordescriptions.iterateNext();
    const armoramounts = document.evaluate("//armors/armor/absorbtion", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisarmorAmount = armoramounts.iterateNext();

    while (thisarmorType) {
    let result = `
                    <div class="d-flex flex-column my-3">
                        <div class="d-flex flex-column mx-3 mb-2 ">
                            <div class="d-flex flex-column bg-white justify-content-center">
                                <div class="d-flex justify-content-between align-items-center pt-2 text-white w-100 bg-dark rounded-top">
                                    <h6 class="ml-3">${thisarmorType.textContent}</h6>
                                    <div class="mr-3 border border-light rounded mb-2">
                                        <p class="px-2 quick-damage">${thisarmorAmount.textContent} absorbtion</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-column bg-white justify-content-center px-2 rounded-bottom border border-dark w-100">
                                        <div class="d-flex flex-row justify-content-end pt-2 card-container">
                                        </div>
                                        <div>
                                            <div class="d-flex flex-row justify-content-between">
                                                <p>${thisarmorDescription.textContent}</p>
                                            </div>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </div>
    `
        
        armorContainer += result;
        thisarmorType = armortypes.iterateNext();
        thisarmorDescription = armordescriptions.iterateNext();
        thisarmorAmount = armoramounts.iterateNext();
    }

    let itemContainer = `<h5>Packning</h5>`;
    const itemtypes = document.evaluate("//items/item/name", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisitemType = itemtypes.iterateNext();
    const itemdescriptions = document.evaluate("//items/item/description", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisitemDescription = itemdescriptions.iterateNext();
    const itemamounts = document.evaluate("//items/item/quantity", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thisitemAmount = itemamounts.iterateNext();

    while (thisitemType) {
    let result = `
                    <div class="d-flex flex-column my-3">
                        <div class="d-flex flex-column mx-3 mb-2 ">
                            <div class="d-flex flex-column bg-white justify-content-center">
                                <div class="d-flex justify-content-between align-items-center pt-2 text-white w-100 bg-success rounded-top">
                                    <h6 class="ml-3">${thisitemType.textContent}</h6>
                                    <div class="mr-3 border border-light rounded mb-2">
                                        <p class="px-2 quick-damage">${thisitemAmount.textContent}st</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-column bg-white justify-content-center px-2 rounded-bottom border border-dark w-100">
                                        <div class="d-flex flex-row justify-content-end pt-2 card-container">
                                        </div>
                                        <div>
                                            <div class="d-flex flex-row justify-content-between">
                                                <p>${thisitemDescription.textContent}</p>
                                            </div>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </div>
    `
        
        itemContainer += result;
        thisitemType = itemtypes.iterateNext();
        thisitemDescription = itemdescriptions.iterateNext();
        thisitemAmount = itemamounts.iterateNext();
    }

    let moneyContainer = `<h5>Pengar</h5>`;
    const moneytypes = document.evaluate("//moneys/money/name", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thismoneyType = moneytypes.iterateNext();
    const moneyamounts = document.evaluate("//moneys/money/quantity", xmlDoc, null, XPathResult.ANY_TYPE, null);
    let thismoneyAmount = moneyamounts.iterateNext();

    while (thismoneyType) {
    let result = `
                    <div class="d-flex flex-row">
                        <h6 class="mx-3">${thismoneyAmount.textContent}st</h6>
                        <p>${thismoneyType.textContent}</p>
                    </div>
    `
        
        moneyContainer += result;
        thismoneyType = moneytypes.iterateNext();
        thismoneyAmount = moneyamounts.iterateNext();
    }

    document.getElementById("bag").innerHTML = armorContainer + itemContainer + moneyContainer

}

function showHome() {
    document.getElementById("home").style.display = "block"
    document.getElementById("character_sheet").style.display = "none"
}


function showCharacter() {
   
    document.getElementById("home").style.display = "none"
    document.getElementById("character_sheet").style.display = "block"


}






