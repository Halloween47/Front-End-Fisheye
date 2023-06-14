//Mettre le code JavaScript lié à la page photographer.html

// Je récupére mon modèle
import { PhotographerModel } from "../models/photographerModel.js";

// Gestion de l'affichage des données du photographe à l'écran
async function displayData(photographers, medias) {
  
  // SECTION HEADER //
  const photographerSection = document.querySelector(".photograph-header");
  var photographerSectionFirstChild = photographerSection.firstChild;
  const photographerModel = photographerFactory(photographers);
  const photographersCardDOM = photographerModel.getPhotographersCardDOM();
  const section = photographerSection.appendChild(photographersCardDOM);
  photographerSection.insertBefore(section, photographerSectionFirstChild);
  
  // SECTION PRIX
  const photographerPrice = document.querySelector(".photograph-price");
  photographerPrice.textContent = photographers.price + ' / jour';
  
  // SECTION MEDIA
  const mediasSection = document.querySelector(".photograph-media");
  
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediasSection.appendChild(mediaCardDOM);
  });
  
};

// Gestion de l'affichage de la LIGHTBOX
async function displayLightbox(medias) {
  
  const sectionMedia = document.querySelectorAll('.photograph-media');
  const sectionLightbox = document.querySelector('#lightbox');
  
  sectionMedia.forEach(article => {
    article.addEventListener('click', (e) => {
      
      const photoClique = e.target;
      const srcImg = photoClique.src;
      
      // Construction de l'element
      const lightboxFactoryConst = lightboxFactory(medias);
      const lightboxDOM = lightboxFactoryConst.getLightboxDOM(srcImg, medias);
      sectionLightbox.appendChild(lightboxDOM);
    
    });
  });
};

// Fonction d'initialisation
async function init() {
  // Récupère les datas des photographes
  const photographerModel = new PhotographerModel();
  
  let params = (new URL(document.location)).searchParams;
  let id = parseInt(params.get('id'));  
  
  const headerPhotographer = await photographerModel.getInfosPhotographer(id);
  const mediaPhotographer = await photographerModel.getMediasPhotographer(id);  
  
  displayData(headerPhotographer, mediaPhotographer);
  displayLightbox(mediaPhotographer, id);
};

init();
