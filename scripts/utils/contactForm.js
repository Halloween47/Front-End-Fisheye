// Je récupére mon modèle
import { PhotographerModel } from "../models/photographerModel.js";

const header = document.querySelector('header');
const main = document.querySelector('main');
const buttonContactMe = document.getElementById('contactMe');

const formulaireIntegral = document.getElementById("contact_modal");
const titleForm = document.getElementById('titleForm');
const closeModal = document.getElementById('closeModal');


// function displayModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }

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
    const titleFormTxt = titleForm.textContent;
    const photographerModel = new PhotographerModel();
    
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    const idPhotographer = await photographerModel.getInfosPhotographer(id);
    titleForm.innerText = titleFormTxt + " \n" + idPhotographer.name;
}
formulaire();

// Ouverture du formulaire
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
closeModal.addEventListener('click', function() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    
    header.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'false')
    formulaireIntegral.setAttribute('aria-hidden', 'true');

    
    buttonContactMe.focus();
});

// Fermeture de la modal avec "echap"
document.addEventListener('keydown', fermerModal);

// Écoutez l'événement de soumission du formulaire
formulaireIntegral.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    // Récupérez les valeurs des champs de saisie
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var messageForm = document.getElementById('messageForm').value;
    // Ajoutez d'autres champs si nécessaire
    
    // Affichez les valeurs dans la console
    console.log(nom);
    console.log(prenom);
    console.log(email);
    console.log(messageForm);
    // Ajoutez d'autres champs si nécessaire
});

