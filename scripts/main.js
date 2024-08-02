console.log("contatutto per nabbi");

// Selettori degli elementi
var nomePg = document.querySelector("#nomePg");
var nomePgString = document.querySelector("#nomePgString");
var staminaPg = document.querySelector("#staminaPg");
var staminaPgAttuale = document.querySelector("#staminaPgAttuale");
var staminaPgStringMax = document.querySelector("#staminaPgStringMax");
var faticaPg = document.querySelector("#faticaPg");
var faticaPgAttuale = document.querySelector("#faticaPgAttuale");
var faticaPgStringMax = document.querySelector("#faticaPgStringMax");
var regenStaminaPg = document.querySelector("#regenStaminaPg");
var regenFaticaPg = document.querySelector("#regenFaticaPg");
var azioneDifString = document.querySelector("#azioneDif");
var regenStaString = document.querySelector("#regenSta");
var regenFatString = document.querySelector("#regenFat");
var regenStaRelaxString = document.querySelector("#regenStaRelax");
var regenFatRelaxString = document.querySelector("#regenFatRelax");
let x = "staminaPgNow"
let y = "faticaPgNow"
let z = "azioniDifensivaCompiute"
const costiStamina = {
    0: {
        staminaAttacco: 10,
        faticaAttacco: 1,
        staminaSkills: 2,
        faticaSkills: 1
    },
    1: {
        staminaAttacco: 15,
        faticaAttacco: 3,
        staminaSkills: 4,
        faticaSkills: 2
    },
    2: {
        staminaAttacco: 5,
        faticaAttacco: 1,
        staminaSkills: 1,
        faticaSkills: 1
    },
    3: {
        staminaAttacco: 8,
        faticaAttacco: 2,
        staminaSkills: 2,
        faticaSkills: 1
    }
};
takeInfo()

function removeErrorClass(...elements) {
    elements.forEach(element => {
        if (element.classList.contains("error")) {
            element.classList.remove("error");
        }
    });
}

function addError(element) {
    element.classList.add("error");
    return null;
}

function getValueOrError(element) {
    return element.value ? element.value : addError(element);
}

function hasNoErrorClass(...elements) {
    return elements.every(element => !element.classList.contains("error"));
}

function toggleHideClass() {
    var input = document.querySelector(".input");
    var game = document.querySelector(".game");
    takeInfo();
    const flipCardInner = document.querySelector('.flip-card-inner');
    flipCardInner.classList.toggle('flip');

    if (input.classList.contains("hide")) {
        input.classList.remove("hide");
        game.classList.add("hide");
    } else if (game.classList.contains("hide")) {
        game.classList.remove("hide");
        input.classList.add("hide");
    }
}

function salvaInfo() {
    // Rimuovi la classe "error" dagli elementi
    removeErrorClass(nomePg, staminaPg, faticaPg, regenStaminaPg, regenFaticaPg);

    // Ottieni i valori o aggiungi la classe "error" se il valore è vuoto
    var nomePgValue = getValueOrError(nomePg);
    var staminaPgValue = getValueOrError(staminaPg);
    var faticaPgValue = getValueOrError(faticaPg);

    // Controlla se nessuno degli elementi ha la classe "error"
    if (hasNoErrorClass(nomePg, staminaPg, faticaPg)) {
        // Procedi con la logica se nessun elemento ha la classe "error"
        console.log("Tutti i valori sono validi:");
        console.log({
            nomePgValue,
            staminaPgValue,
            faticaPgValue
        });

        // Salva i valori nel local storage
        localStorage.setItem('nomePg', nomePgValue);
        localStorage.setItem('staminaPg', staminaPgValue);
        localStorage.setItem('staminaPgNow', staminaPgAttuale.value ? staminaPgAttuale.value : staminaPgValue);
        localStorage.setItem('faticaPg', faticaPgValue);
        localStorage.setItem('faticaPgNow', faticaPgAttuale.value ? faticaPgAttuale.value : faticaPgValue);
        localStorage.setItem('regenStaminaPg', regenStaminaPg.value ? regenStaminaPg.value : 10);
        localStorage.setItem('regenFaticaPg', regenFaticaPg.value ? regenFaticaPg.value : 1);

        console.log("Valori salvati nel local storage.");
        toggleHideClass();
    } else {
        console.log("Alcuni campi contengono errori. Correggi i campi e riprova.");
    }
}


//evito le ripetizioni di codice
function updateValue(element, storageKey, property = 'value') {
    const value = localStorage.getItem(storageKey);
    element[property] = value;
}

function takeInfo() {
    updateValue(nomePg, 'nomePg');
    updateValue(nomePgString, 'nomePg', 'innerHTML');
    updateValue(staminaPg, 'staminaPg');
    updateValue(staminaPgStringMax, 'staminaPg', 'innerHTML');
    updateValue(staminaPgAttuale, 'staminaPgNow');
    updateValue(staminaPgStringNow, 'staminaPgNow', 'innerHTML');
    updateValue(faticaPg, 'faticaPg');
    updateValue(faticaPgStringMax, 'faticaPg', 'innerHTML');
    updateValue(faticaPgAttuale, 'faticaPgNow');
    updateValue(faticaPgStringNow, 'faticaPgNow', 'innerHTML');
    regenStaminaPg.value = localStorage.getItem('regenStaminaPg');
    regenFaticaPg.value = localStorage.getItem('regenFaticaPg');
    if (!takeLocal(z)) {
        saveLocal(z, 0)
    }
    azioneDifString.innerHTML = (parseInt(takeLocal(z)) + 1) * 5;
    regenStaString.innerHTML = takeLocal('regenStaminaPg');
    regenStaRelaxString.innerHTML = parseInt(takeLocal('regenStaminaPg')) + 5;
    regenFatString.innerHTML = takeLocal('regenFaticaPg');
    regenFatRelaxString.innerHTML = parseInt(takeLocal('regenFaticaPg')) + 1;
}

function takeLocal(local) {
    return localStorage.getItem(local);
}
function saveLocal(local, value) {
    localStorage.setItem(local, value);
}



function attacco(s) {

    const radioToSelect = document.querySelectorAll(`input[name="fav_language"]`);
    var valoreAttacco = null;

    radioToSelect.forEach(element => {
        if (element.checked) {
            valoreAttacco = element.value;
        }
    });
    if (valoreAttacco == null) {
        alert("Scegli l'arma");
        return;
    } else {
        console.log(costiStamina[valoreAttacco]);
        let attaccoSkillStama, attaccoSkillFatica;
        if (s === 'attacco') {
            console.log('attacco');
            attaccoSkillStama = costiStamina[valoreAttacco].staminaAttacco;
            attaccoSkillFatica = costiStamina[valoreAttacco].faticaAttacco;
        } else if (s === 'skills') {
            console.log('skills');
            attaccoSkillStama = costiStamina[valoreAttacco].staminaSkills;
            attaccoSkillFatica = costiStamina[valoreAttacco].faticaSkills;
        } else {
            return;
        }
        saveLocal(x, (takeLocal(x) - attaccoSkillStama))
        saveLocal(y, (takeLocal(y) - attaccoSkillFatica))
        takeInfo()
    }
}

function azioneDifensiva() {
    saveLocal(z, (parseInt(takeLocal(z)) + 1))
    saveLocal(x, (takeLocal(x) - (takeLocal(z) * 5)))
    takeInfo()
}

function inizioTurnoResetAzioniDifensive() {
    saveLocal(z, 0);
    takeInfo();
}

function fineTurno(relax) {
    console.log("relax: " + relax);
    saveLocal(x, (parseInt(takeLocal(x)) + parseInt(takeLocal('regenStaminaPg')) + (relax ? 5 : 0)));
    saveLocal(y, (parseInt(takeLocal(y)) + parseInt(takeLocal('regenFaticaPg')) + (relax ? 1 : 0)));
    if (parseInt(takeLocal(x))> parseInt(takeLocal('staminaPg'))) {
        saveLocal(x,takeLocal('staminaPg'))
    }
    if (parseInt(takeLocal(y))> parseInt(takeLocal('faticaPg'))) {
        saveLocal(y,takeLocal('faticaPg'))
    }
    takeInfo()
}
