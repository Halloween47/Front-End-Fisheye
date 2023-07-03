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
  const sectionMedia = document.querySelectorAll('.photograph-media');
  
  // LIGHTBOX
  // function showLightbox(event) {
  //   // let params = (new URL(document.location)).searchParams;
  //   // let id = parseInt(params.get('id'));  
  //   // console.log(id);
  
  //   const imageClique = event.target;
  //   // console.log(imageClique);
  //   const imageAlt = imageClique.alt;
  //   const titleImg = imageClique.alt;
  //   // console.log(imageAlt);
  
  //   // CONNAISSANCE DE LA POSITION EN COURS
  //   // console.log(medias);
  //   let filter = medias.filter(media => media.image === imageAlt)
  //   let positionCible = filter[0];
  //   // console.log(positionCible);
  //   let currentPosition = medias.indexOf(positionCible);
  //   // console.log(currentPosition);
  
  //   // Gestion "aria-hidden"
  //   const header = document.querySelector('header');
  //   const main = document.querySelector('main');
  //   const lightboxId = document.querySelector('#lightbox');
  //   header.setAttribute('aria-hidden', 'true')
  //   main.setAttribute('aria-hidden', 'true')
  //   lightboxId.setAttribute('aria-hidden', 'false')
  
  
  //   let lightbox = new Lightbox(medias, currentPosition);
  //   // lightbox.show(id, imageAlt, titleImg, currentPosition);
  //   lightbox.show(currentPosition);
  
  // }
  
  // sectionMedia.forEach(image => {
  //   image.addEventListener('click', showLightbox);
  // });
  
  
};

// Gestion de l'affichage de la LIGHTBOX
async function displayLightbox(medias) {
  
  const sectionMedia = document.querySelectorAll('.photograph-media');
  const sectionLightbox = document.querySelector('#lightbox-test');
  
  sectionMedia.forEach(article => {
    
    // Apparition de l'image cliqué
    article.addEventListener('click', (e) => {
      const photoClique = e.target;
      const srcImg = photoClique.src;
      const imageAlt = photoClique.alt;
      // console.log(srcImg);
      
      // CONNAISSANCE DE LA POSITION EN COURS
      let filter = medias.filter(media => media.image === imageAlt)
      let positionCible = filter[0];
      let currentPosition = medias.indexOf(positionCible);
      
      // Apparition de l'element cliqué
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.showTest(currentPosition, srcImg);
      
    });
    
    // Event sur fleche de droite
    const lightboxArrowRight = document.querySelector('.fa-chevron-right');    
    // const lightboxArrowRight = document.querySelector('#lightbox-test-arrowRight');
    lightboxArrowRight.addEventListener("click", () => {
      
      // Recuperation de la position de l'image en cours
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      const imageAlt = lightboxImgEnCours.alt;
      // let filter = medias.filter(media => media.image === imageAlt)
      // let positionCible = filter[0];
      // let currentPosition = medias.indexOf(positionCible);
      // console.log(currentPosition);
      
      // Recuperation de la position de la image en cours
      if (imageAlt) {
        // console.log('Recuperation position image OK');
        
        const lightboxImgEnCours = document.querySelector('#lightboxImg');
        const imageAlt = lightboxImgEnCours.alt;
        let filter = medias.filter(media => media.image === imageAlt)
        let positionCible = filter[0];
        let currentPosition = medias.indexOf(positionCible);
        console.log(currentPosition);
        
        let lightbox = new Lightbox(medias, currentPosition);
        lightbox.nextImageTest(currentPosition);
      }
      // Recuperation de la position de la video en cours
      else if (imageAlt === "") {
        console.log('Recuperation position video OK');
        
        const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
        // console.log(lightboxVideoEnCours);
        const videoAlt = lightboxVideoEnCours.alt;
        // console.log(videoAlt);
        let filterVideo = medias.filter(media => media.video === videoAlt);
        // console.log(filterVideo);
        let positionCible = filterVideo[0];
        // console.log(positionCible);
        let currentPosition = medias.indexOf(positionCible);
        console.log(currentPosition);
        
        // Construction de l'element suivant
        let lightbox = new Lightbox(medias, currentPosition);
        lightbox.nextImageTest(currentPosition);
      }
      
      // Construction de l'element suivant
      // let lightbox = new Lightbox(medias, currentPosition);
      // lightbox.nextImageTest(currentPosition);
      
    })
    
    // Event sur fleche de gauche
    const lightboxArrowLeft = document.querySelector('.fa-chevron-left')
    // const lightboxArrowLeft = document.querySelector('#lightbox-test-arrowLeft')
    lightboxArrowLeft.addEventListener("click", () => {
      
      // Recuperation de la position de l'image en cours
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      const imageAlt = lightboxImgEnCours.alt;
      // let filter = medias.filter(media => media.image === imageAlt)
      // let positionCible = filter[0];
      // let currentPosition = medias.indexOf(positionCible);
      // console.log(currentPosition);
      
      // Recuperation de la position de la image en cours
      if (imageAlt) {
        console.log('Recuperation position image OK');
        
        const lightboxImgEnCours = document.querySelector('#lightboxImg');
        const imageAlt = lightboxImgEnCours.alt;
        let filter = medias.filter(media => media.image === imageAlt)
        let positionCible = filter[0];
        let currentPosition = medias.indexOf(positionCible);
        console.log(currentPosition);
        
        let lightbox = new Lightbox(medias, currentPosition);
        lightbox.beforeImageTest(currentPosition);
      }
      // Recuperation de la position de la video en cours
      else if (imageAlt === "") {
        console.log('Recuperation position video OK');
        
        const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
        // console.log(lightboxVideoEnCours);
        const videoAlt = lightboxVideoEnCours.alt;
        // console.log(videoAlt);
        let filterVideo = medias.filter(media => media.video === videoAlt);
        // console.log(filterVideo);
        let positionCible = filterVideo[0];
        // console.log(positionCible);
        let currentPosition = medias.indexOf(positionCible);
        console.log(currentPosition);
        
        // Construction de l'element suivant
        let lightbox = new Lightbox(medias, currentPosition);
        lightbox.beforeImageTest(currentPosition);
      }
      
      // Construction de l'element suivant
      // let lightbox = new Lightbox(medias, currentPosition);
      // lightbox.nextImageTest(currentPosition);
      
    })
    
    // Event fermeture
    const lightboxClose = document.querySelector('#zoneClose');
    lightboxClose.addEventListener('click', () => {
      const lightboxTest = document.querySelector('#lightbox-test');
      lightboxTest.style.display = 'none';
      lightboxTest.setAttribute('aria-hidden', 'true');
      
    })
    
    // Event touche clavier
    document.addEventListener("keydown", function(event) {

      const lightboxAriaHidden = sectionLightbox.getAttribute('aria-hidden');
      console.log(lightboxAriaHidden);
      
      if (lightboxAriaHidden != "true") {
        console.log('toutéfalseee');
        // Touche Droite
        if (event.keyCode === 39) {
          // La flèche de droite a été pressée
          // console.log("Flèche de droite pressée !");
          
          
          // Recuperation de la position de l'image en cours
          const lightboxImgEnCours = document.querySelector('#lightboxImg');
          const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
          const imageAlt = lightboxImgEnCours.alt;
          // let filter = medias.filter(media => media.image === imageAlt)
          // let positionCible = filter[0];
          // let currentPosition = medias.indexOf(positionCible);
          // console.log(currentPosition);
          
          // Recuperation de la position de la image en cours
          if (imageAlt) {
            // console.log('Recuperation position image OK');
            
            const lightboxImgEnCours = document.querySelector('#lightboxImg');
            const imageAlt = lightboxImgEnCours.alt;
            let filter = medias.filter(media => media.image === imageAlt)
            let positionCible = filter[0];
            let currentPosition = medias.indexOf(positionCible);
            // console.log(currentPosition);
            
            let lightbox = new Lightbox(medias, currentPosition);
            lightbox.nextImageTest(currentPosition);
          }
          // Recuperation de la position de la video en cours
          else if (imageAlt === "") {
            console.log('Recuperation position video OK');
            
            const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
            // console.log(lightboxVideoEnCours);
            const videoAlt = lightboxVideoEnCours.alt;
            // console.log(videoAlt);
            let filterVideo = medias.filter(media => media.video === videoAlt);
            // console.log(filterVideo);
            let positionCible = filterVideo[0];
            // console.log(positionCible);
            let currentPosition = medias.indexOf(positionCible);
            console.log(currentPosition);
            
            // Construction de l'element suivant
            let lightbox = new Lightbox(medias, currentPosition);
            lightbox.nextImageTest(currentPosition);
          }
          
          // Construction de l'element suivant
          // let lightbox = new Lightbox(medias, currentPosition);
          // lightbox.nextImageTest(currentPosition);
          
          
        }
        // Touche Gauche
        if (event.keyCode === 37) {
          // La flèche de gauche a été pressée
          console.log("Flèche de gauche pressée !");
          
          
          // Recuperation de la position de l'image en cours
          const lightboxImgEnCours = document.querySelector('#lightboxImg');
          const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
          const imageAlt = lightboxImgEnCours.alt;
          // let filter = medias.filter(media => media.image === imageAlt)
          // let positionCible = filter[0];
          // let currentPosition = medias.indexOf(positionCible);
          // console.log(currentPosition);
          
          // Recuperation de la position de la image en cours
          if (imageAlt) {
            console.log('Recuperation position image OK');
            
            const lightboxImgEnCours = document.querySelector('#lightboxImg');
            const imageAlt = lightboxImgEnCours.alt;
            let filter = medias.filter(media => media.image === imageAlt)
            let positionCible = filter[0];
            let currentPosition = medias.indexOf(positionCible);
            console.log(currentPosition);
            
            let lightbox = new Lightbox(medias, currentPosition);
            lightbox.beforeImageTest(currentPosition);
          }
          // Recuperation de la position de la video en cours
          else if (imageAlt === "") {
            console.log('Recuperation position video OK');
            
            const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
            // console.log(lightboxVideoEnCours);
            const videoAlt = lightboxVideoEnCours.alt;
            // console.log(videoAlt);
            let filterVideo = medias.filter(media => media.video === videoAlt);
            // console.log(filterVideo);
            let positionCible = filterVideo[0];
            // console.log(positionCible);
            let currentPosition = medias.indexOf(positionCible);
            console.log(currentPosition);
            
            // Construction de l'element suivant
            let lightbox = new Lightbox(medias, currentPosition);
            lightbox.beforeImageTest(currentPosition);
          }
          
          // Construction de l'element suivant
          // let lightbox = new Lightbox(medias, currentPosition);
          // lightbox.nextImageTest(currentPosition);
          
          
        }
        // Touche Echap
        if (event.keyCode === 27 || event.keyCode === 32) {
          // La touche "Échap" a été pressée
          console.log("Touche Échap pressée !");
          const lightboxTest = document.querySelector('#lightbox-test');
          lightboxTest.style.display = 'none';
        }
      } 
    });
    
  })
  
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
  
  displayLightbox(mediaPhotographer);
};

init();
