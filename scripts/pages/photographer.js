//Mettre le code JavaScript lié à la page photographer.html

// Je récupére mon modèle
import { PhotographerModel } from "../models/photographerModel.js";

// Fonction de " Récupération de la liste JSON "photographers" "
async function getPhotographers() {
  
  // Insérer les données JSON dans le tableau (& affichage)
  const response = await fetch("data/photographers.json");
  const photographers = await response.json();
  
  // Vérification du nouveau contenu du tableau
  // console.log(photographers);
  
  // et bien retourner le tableau photographers seulement une fois récupéré
  return photographers;
  
}

// Fonction "Affichage sur écran des données correspondant"
async function displayData(photographers) {
  // Gestion de la balise ".photograp-header"
  const photographersSection = document.querySelector(".photograph-header");
  var firstChild = photographersSection.firstChild;
  const photographerModel = photographerFactory(photographers);
  // console.log(photographerModel);
  const photographersCardDOM = photographerModel.getPhotographersCardDOM();
  const section = photographersSection.appendChild(photographersCardDOM);
  photographersSection.insertBefore(section, firstChild);
  
  
};
async function displayDataMedias(medias) {
  const mediasSection = document.querySelector(".photograph-media");
  
  
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediasSection.appendChild(mediaCardDOM);
  });
}
// Fonction d'initialisation
async function init() {
  
  // Récupère les datas des photographes
  // const { photographers } = await getPhotographers();
  const photographerModel = new PhotographerModel();
  const photographers = await photographerModel.getListePhotographers();
  // console.log(photographers)
  
  let params = (new URL(document.location)).searchParams;
  let id = parseInt(params.get('id'));
  let name = params.get('name');
  // console.log(id);
  
  // Gestion de l'affichage du header de la page photographe
  const headerPhotographer = await photographerModel.getInfosPhotographer(id);
  // console.log(headerPhotographer);
  displayData(headerPhotographer);
  
  // Récupère les datas des media
  const mediaPhotographer = await photographerModel.getMediasPhotographer(id);
  // console.log(media);
  displayDataMedias(mediaPhotographer);
  
  
  
};

init();
