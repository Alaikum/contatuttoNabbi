console.log("contatutto per nabbi");

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

    if (input.classList.contains("hide")) {
        input.classList.remove("hide");
        game.classList.add("hide");
    } else if (game.classList.contains("hide")) {
        game.classList.remove("hide");
        input.classList.add("hide");
    }
}

function salvaInfo() {
    // Selettori degli elementi
    var nomePg = document.querySelector("#nomePg");
    var staminaPg = document.querySelector("#staminaPg");
    var faticaPg = document.querySelector("#faticaPg");
    var regenStaminaPg = document.querySelector("#regenStaminaPg");
    var regenFaticaPg = document.querySelector("#regenFaticaPg");

    // Rimuovi la classe "error" dagli elementi
    removeErrorClass( nomePg, staminaPg, faticaPg, regenStaminaPg, regenFaticaPg);

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
        localStorage.setItem('faticaPg', faticaPgValue);
        localStorage.setItem('regenStaminaPg', regenStaminaPgValue);
        localStorage.setItem('regenFaticaPg', regenFaticaPgValue);

        console.log("Valori salvati nel local storage.");
        toggleHideClass();
    } else {
        console.log("Alcuni campi contengono errori. Correggi i campi e riprova.");
    }
}
