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
    var regenStaminaPgValue = getValueOrError(regenStaminaPg);
    var regenFaticaPgValue = getValueOrError(regenFaticaPg);

    // Controlla se nessuno degli elementi ha la classe "error"
    if (hasNoErrorClass(nomePg, staminaPg, faticaPg, regenStaminaPg, regenFaticaPg)) {
        // Procedi con la logica se nessun elemento ha la classe "error"
        console.log("Tutti i valori sono validi:");
        console.log({
            nomePgValue,
            staminaPgValue,
            faticaPgValue,
            regenStaminaPgValue,
            regenFaticaPgValue
        });

        // Salva i valori nel local storage
        localStorage.setItem('nomePg', nomePgValue);
        localStorage.setItem('staminaPg', staminaPgValue);
        localStorage.setItem('staminaPgNow', staminaPgAttuale.value ? staminaPgAttuale.value : staminaPgValue);
        localStorage.setItem('faticaPg', faticaPgValue);
        localStorage.setItem('faticaPgNow', faticaPgAttuale.value ? faticaPgAttuale.value : faticaPgValue);
        localStorage.setItem('regenStaminaPg', regenStaminaPgValue);
        localStorage.setItem('regenFaticaPg', regenFaticaPgValue);

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
}

function attacco() {
    const radioToSelect = document.querySelectorAll(`input[name="fav_language"]`);
    var valoreAttacco = null;
    const costiStamina = {
        0: {
            stamina: 10,
            fatica: 1
        },
        1: {
            stamina: 15,
            fatica: 3
        },
        2: {
            stamina: 5,
            fatica: 1
        },
        0: {
            stamina: 8,
            fatica: 2
        }
    }
    radioToSelect.forEach(element => {
        if (element.checked) {
            valoreAttacco = element.value;
        }
    });
    if (valoreAttacco == null) {
        alert("Scegli l'arma");
        return;
    } else {

    }
}
