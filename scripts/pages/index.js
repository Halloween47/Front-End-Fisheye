// #############################################################
// Gestion de l'affichage des données à l'écran pour "index.html"
// #############################################################

// Je récupére mon modèle de manipulation des données JSON
// ________________________

import { PhotographerModel } from "../models/photographerModel.js";

// Fonction "Affichage sur écran des données correspondant"
// ________________________

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Fonction d'initialisation
// ________________________

async function init() {
  
  // Récupère les datas des photographes
  // ________________________

  // const { photographers } = await getPhotographers();
  let photographerModel = new PhotographerModel();
  let photographers = await photographerModel.getListePhotographers();
  
  // Affiche les données
  // ________________________
  
  displayData(photographers);
  
}

init();

