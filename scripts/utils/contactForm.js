// #############################################################
// Fichier dédié à la gestion du formulaire
// #############################################################

// Je récupére mon modèle
// ________________________

import { PhotographerModel } from "../models/photographerModel.js";

const header = document.querySelector('header');
const main = document.querySelector('main');
const buttonContactMe = document.getElementById('contactMe');

const formulaireIntegral = document.getElementById("contact_modal");
const titleForm = document.getElementById('titleForm');
const closeModal = document.getElementById('closeModal');

function fermerModal(e) { 
    const modal = document.getElementById("contact_modal");
    if (e.key === 'Escape') {
        modal.style.display = 'none';
        
        header.setAttribute('aria-hidden', 'false')
        main.setAttribute('aria-hidden', 'false')
        formulaireIntegral.setAttribute('aria-hidden', 'true');
    }
}

async function formulaire() {
    
    // Récupère les datas des photographes
    // ________________________
    
    const titleFormTxt = titleForm.textContent;
    const photographerModel = new PhotographerModel();
    
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    const idPhotographer = await photographerModel.getInfosPhotographer(id);
    titleForm.innerText = titleFormTxt + " \n" + idPhotographer.name;
}
formulaire();

// Ouverture du formulaire
// ________________________

buttonContactMe.addEventListener('click', function() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
    
    
    // const formulaireIntegral = document.getElementById("contact_modal");
    header.setAttribute('aria-hidden', 'true')
    main.setAttribute('aria-hidden', 'true')
    formulaireIntegral.setAttribute('aria-hidden', 'false');
    closeModal.focus();
});

// Fermeture du formulaire
// ________________________

closeModal.addEventListener('click', function() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    
    header.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'false')
    formulaireIntegral.setAttribute('aria-hidden', 'true');
    
    
    buttonContactMe.focus();
});

// Fermeture de la modal avec "echap"
// ________________________

document.addEventListener('keydown', fermerModal);

// Écoutez l'événement de soumission du formulaire
// ________________________

formulaireIntegral.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    // Récupérez les valeurs des champs de saisie
    // ________________________
    
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var messageForm = document.getElementById('messageForm').value;
    
    // Affichez les valeurs dans la console
    // ________________________
    
    console.log(nom);
    console.log(prenom);
    console.log(email);
    console.log(messageForm);
});

