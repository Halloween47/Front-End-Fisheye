// #############################################################
// Gestion de l'affichage des données à l'écran pour "photographer.html"
// #############################################################

/* eslint-disable no-undef */

// Je récupére mon modèle
// ________________________

import { PhotographerModel } from "../models/photographerModel.js";

// Gestion de l'affichage des données du photographe à l'écran
async function displayData(photographers, medias) {
  
  // SECTION HEADER //
  // ________________________
  
  const photographerSection = document.querySelector(".photograph-header");
  let photographerSectionFirstChild = photographerSection.firstChild;
  // eslint-disable-next-line no-undef
  const photographerModel = photographerFactory(photographers);
  const photographersCardDOM = photographerModel.getPhotographersCardDOM();
  const section = photographerSection.appendChild(photographersCardDOM);
  photographerSection.insertBefore(section, photographerSectionFirstChild);
  
  // SECTION PRIX
  // ________________________
  
  const photographerPrice = document.querySelector(".photograph-price");
  // photographerPrice.textContent =  photographers.price + ' / jour';
  const likesCardDOM = photographerModel.getTotalLikesCardDOM();
  // const sectionLikes = photographerPrice.appendChild(likesCardDOM);
  photographerPrice.appendChild(likesCardDOM);
  
  // SECTION MEDIA
  // ________________________
  
  const mediasSection = document.querySelector(".photograph-media");
  
  medias.forEach((media, index) => {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    mediasSection.appendChild(mediaCardDOM);
  });
  
  
  
  
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  
  // Écoute de l'événement keydown sur le document
  
  function apparitionElementClique(e) {
      const photoClique = e.target;
      const srcImg = photoClique.src;
      const imageAlt = photoClique.alt;
      
      let filter = medias.filter(media => media.image === imageAlt)
      let positionCible = filter[0];
      let currentPosition = medias.indexOf(positionCible);
      
      //  Apparition de l'element cliqué
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.showTest(currentPosition, srcImg)
    }
function handleEnterKeyPress(e) {
  if (e.keyCode === 13) {
    apparitionElementClique(e);
  }
}
  // document.addEventListener('keydown', function (e) {
  //   // Parcourir le site avec TAB
  //   if (e.keyCode === 9) {
  //     e.preventDefault(); 
  //     const focusableElements = document.querySelectorAll('.logo, .contact_button, select, .container-img, .zoneNbLikes');
  //     let currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
  //     let nextIndex = currentIndex === -1 || currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1;


  //     focusableElements[nextIndex].focus();  
      
  //     ///////////////////////////////
  //     ///////////////////////////////
      
  //     ///////////////////////////////
  //     ///////////////////////////////

  //     let focusContainerImg = document.activeElement;
  
  //     if (focusContainerImg.classList.contains('container-img')) {
  //       console.log('CONTAINERIMG');
  //     } else {
  //       console.log('NON');
  //     }
  //   }
  // });

  //////////////////////////
  // Définir currentIndex en tant que variable globale
let currentIndex = 0;

// Fonction pour gérer la navigation circulaire
function handleTabNavigation(e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    const focusableElements = document.querySelectorAll('.logo, .contact_button, select, .container-img, .zoneNbLikes');
    let nextIndex = currentIndex + 1;

    // Vérifier si l'utilisateur atteint le dernier élément et revenir au début du tableau
    if (nextIndex >= focusableElements.length) {
      nextIndex = 0;
    }

    focusableElements[nextIndex].focus();
    currentIndex = nextIndex;

    // Vérifier si l'élément est de classe 'container-img'
    let focusContainerImg = document.activeElement;
    if (focusContainerImg.classList.contains('container-img')) {
      console.log('CONTAINERIMG');
    } else {
      console.log('NON');
    }
  }
}

// Ajouter l'écouteur d'événement pour la navigation au clavier
document.addEventListener('keydown', handleTabNavigation);


  //////////////////////////
  
let toutLesMedias = document.querySelectorAll('.articleMedia');
    toutLesMedias.forEach(container => {
      let containerImg = container.firstChild;
      containerImg.addEventListener('keydown',handleEnterKeyPress)
    });

    


//////////////

//////////////

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  // SECTION LIKES
  // ________________________
  
  // Fonctionnement de like
  function handleClick() {
    let zoneNbLike = this;
    let zoneNombre = zoneNbLike.firstChild;
    let nombreLikesContent = zoneNombre.textContent;
    let nombreLikesConvert = parseInt(nombreLikesContent);
    let isLiked = nombreLikesConvert + 1;
    let newNumberToString = isLiked.toString();
    nombreLikesContent = newNumberToString;
    zoneNombre.textContent = newNumberToString;
    
    // Supprimez l'écouteur d'événements après une seule utilisation
    zoneNbLike.removeEventListener("click", handleClick);
    
    // Total LIKES
    const totalLikes = [];
    let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");
    
    zoneNbLikes.forEach(like => {
      const nombreLike = like.firstChild;
      const nombreLikeImage = nombreLike.textContent;
      const nombreLikeImageConvert = parseInt(nombreLikeImage);
      totalLikes.push(nombreLikeImageConvert)
    })
    let nbTotlaLikes = 0;
    for (let index = 0; index < totalLikes.length; index++) {
      // const element = totalLikes[index];
      nbTotlaLikes += totalLikes[index]
    }
    let zoneTotalLikes = document.querySelector('.totalLikes');
    zoneTotalLikes.textContent = nbTotlaLikes;
  }
  function handleEnterKeyPressLike(e) {
    if (e.keyCode === 13) {
      
    let zoneNbLike = this;
    let zoneNombre = zoneNbLike.firstChild;
    let nombreLikesContent = zoneNombre.textContent;
    let nombreLikesConvert = parseInt(nombreLikesContent);
    let isLiked = nombreLikesConvert + 1;
    let newNumberToString = isLiked.toString();
    nombreLikesContent = newNumberToString;
    zoneNombre.textContent = newNumberToString;
    
    // Supprimez l'écouteur d'événements après une seule utilisation
    zoneNbLike.removeEventListener("keydown", handleEnterKeyPressLike);
    
    // Total LIKES
    const totalLikes = [];
    let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");
    
    zoneNbLikes.forEach(like => {
      const nombreLike = like.firstChild;
      const nombreLikeImage = nombreLike.textContent;
      const nombreLikeImageConvert = parseInt(nombreLikeImage);
      totalLikes.push(nombreLikeImageConvert)
    })
    let nbTotlaLikes = 0;
    for (let index = 0; index < totalLikes.length; index++) {
      // const element = totalLikes[index];
      nbTotlaLikes += totalLikes[index]
    }
    let zoneTotalLikes = document.querySelector('.totalLikes');
    zoneTotalLikes.textContent = nbTotlaLikes;
    }
  }
  // let zoneIconLikes = document.querySelectorAll(".zoneIconLikes");
  let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");
  
  zoneNbLikes.forEach(function(zoneLike) {
    zoneLike.addEventListener("click", handleClick);
    zoneLike.addEventListener("keydown", handleEnterKeyPressLike);
  });
  
  
  // -- Total LIKES
  // ________________________
  
  const totalLikes = [];
  zoneNbLikes.forEach(like => {
    const nombreLike = like.firstChild;
    const nombreLikeImage = nombreLike.textContent;
    const nombreLikeImageConvert = parseInt(nombreLikeImage);
    totalLikes.push(nombreLikeImageConvert)
  })
  let nbTotlaLikes = 0;
  for (let index = 0; index < totalLikes.length; index++) {
    // const element = totalLikes[index];
    nbTotlaLikes += totalLikes[index]
  }
  let zoneTotalLikes = document.querySelector('.totalLikes');
  zoneTotalLikes.textContent = nbTotlaLikes;
  
  
  // SECTION filter
  // ________________________
  
  function filterData() {
    const filterPopularite = document.getElementById('photograph-filter');
    const filterValue = filterPopularite.value;
    if (filterValue === 'date') {
      const mediasSection = document.querySelector(".photograph-media");
      mediasSection.innerHTML = '';
      
      
      
      medias.sort((a, b) =>
      new Date(a.date) - new Date(b.date)
      );
      
      
      
      medias.forEach((media,index) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(index);
        mediasSection.appendChild(mediaCardDOM);
      });

      // Rétablir l'événement de clic sur chaque zoneNbLike
      let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");

    zoneNbLikes.forEach(zoneLike => {
      zoneLike.addEventListener("keydown", handleEnterKeyPressLike);
    });
      ////////////////////////////////////////////////////////
      // Ouverture LIGHTBOX
      let toutLesMedias = document.querySelectorAll('.articleMedia');
    toutLesMedias.forEach(container => {
      let containerImg = container.firstChild;
      containerImg.addEventListener('keydown',handleEnterKeyPress)
    })
      ////////////////////////////////////////////////////////
      ///////
    } else if (filterValue === "titre") {
      
      const mediasSection = document.querySelector(".photograph-media");
      mediasSection.innerHTML = '';
      
      
      
      medias.sort((a, b) =>
      a.title.localeCompare(b.title)
      );
      
      
      
      medias.forEach((media, index) => {
        // eslint-disable-next-line no-undef
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(index);
        mediasSection.appendChild(mediaCardDOM);
      });
      // Rétablir l'événement de clic sur chaque zoneNbLike
      let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");

    zoneNbLikes.forEach(zoneLike => {
      zoneLike.addEventListener("keydown", handleEnterKeyPressLike);
    });
      // Ouverture LIGHTBOX
      let toutLesMedias = document.querySelectorAll('.articleMedia');
    toutLesMedias.forEach(container => {
      let containerImg = container.firstChild;
      containerImg.addEventListener('keydown',handleEnterKeyPress)
    })
    }
    else if (filterValue === 'popularite') {
      
      
      const mediasSection = document.querySelector(".photograph-media");
      mediasSection.innerHTML = '';
      
      
      
      medias.sort((a, b) => {
        const likesA = a.likes;
        const likesB = b.likes;
        return likesB - likesA; // Tri décroissant
      });
      
      
      
      medias.forEach((media, index) => {
        // eslint-disable-next-line no-undef
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(index);
        mediasSection.appendChild(mediaCardDOM);
      });

      // Rétablir l'événement de clic sur chaque zoneNbLike
      let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");

    zoneNbLikes.forEach(zoneLike => {
      zoneLike.addEventListener("keydown", handleEnterKeyPressLike);
    });
      ///////////////////////////////////////////////////////
      // Ouverture LIGHTBOX
      let toutLesMedias = document.querySelectorAll('.articleMedia');
    toutLesMedias.forEach(container => {
      let containerImg = container.firstChild;
      containerImg.addEventListener('keydown',handleEnterKeyPress)
    })
      
    }
    function apparitionElementClique(e) {
      const photoClique = e.target;
      const srcImg = photoClique.src;
      const imageAlt = photoClique.alt;
      
      let filter = medias.filter(media => media.image === imageAlt)
      let positionCible = filter[0];
      let currentPosition = medias.indexOf(positionCible);
      
      //  Apparition de l'element cliqué
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.showTest(currentPosition, srcImg)
    }
    
    let toutLesMedias = document.querySelectorAll('.articleMedia');
    toutLesMedias.forEach(container => {
      let containerImg = container.firstChild;
      containerImg.addEventListener('click',apparitionElementClique)
    })
    
    
    ////////////////////////////
    let zoneNbLikes = document.querySelectorAll(".zoneNbLikes");
    
    zoneNbLikes.forEach(function(zoneLike) {
      zoneLike.addEventListener("click", handleClick);
    });
    ////////////////////////////
    
  }
  
  const filterPopularite = document.getElementById('photograph-filter');
  filterPopularite.addEventListener('change', filterData);
  
  //////////////////////
  //////////////////////
  
}

// Gestion de l'affichage de la LIGHTBOX
// ________________________

async function displayLightbox(medias) {
  
  // ###### FONCTIONS ASSOCIE A LA LIGHTBOX ###### //
  function apparitionElementClique(e) {
    const photoClique = e.target;
    const srcImg = photoClique.src;
    const imageAlt = photoClique.alt;
    
    let filter = medias.filter(media => media.image === imageAlt)
    let positionCible = filter[0];
    let currentPosition = medias.indexOf(positionCible);
    
    //  Apparition de l'element cliqué
    let lightbox = new Lightbox(medias, currentPosition);
    lightbox.showTest(currentPosition, srcImg)
  }
  
  // ###### APPARITION DE LA LIGHTBOX ###### //
  let toutLesMedias = document.querySelectorAll('.articleMedia');
  toutLesMedias.forEach(container => {
    let containerImg = container.firstChild;
    containerImg.addEventListener('click',apparitionElementClique)
  })
  
  // ###### FERMETURE DE LA LIGHTBOX ###### //
  const lightboxClose = document.querySelector('#zoneClose');
  lightboxClose.addEventListener('click', () => {
    const lightboxTest = document.querySelector('#lightbox-test');
    lightboxTest.style.display = 'none';
    lightboxTest.setAttribute('aria-hidden', 'true');
    
  })
  
  // ###### FLECHE DE DROITE DE LA LIGHTBOX ###### //
  const lightboxArrowRight = document.querySelector('.fa-chevron-right');    
  // const lightboxArrowRight = document.querySelector('#lightbox-test-arrowRight');
  lightboxArrowRight.addEventListener("click", () => {
    
    // Recuperation de la position de l'image en cours
    const lightboxImgEnCours = document.querySelector('#lightboxImg');
    const imageAlt = lightboxImgEnCours.alt;
    // let filter = medias.filter(media => media.image === imageAlt)
    // let positionCible = filter[0];
    // let currentPosition = medias.indexOf(positionCible);
    
    // Recuperation de la position de la image en cours
    if (imageAlt) {
      
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      const imageAlt = lightboxImgEnCours.alt;
      let filter = medias.filter(media => media.image === imageAlt)
      let positionCible = filter[0];
      let currentPosition = medias.indexOf(positionCible);
      
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.nextImage(currentPosition);
    }
    // Recuperation de la position de la video en cours
    else if (imageAlt === "") {
      
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      // .log(lightboxVideoEnCours);
      const videoAlt = lightboxVideoEnCours.alt;
      let filterVideo = medias.filter(media => media.video === videoAlt);
      let positionCible = filterVideo[0];
      let currentPosition = medias.indexOf(positionCible);
      
      // Construction de l'element suivant
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.nextImage(currentPosition);
    }
    
    // Construction de l'element suivant
    // let lightbox = new Lightbox(medias, currentPosition);
    // lightbox.nextImageTest(currentPosition);
    
  })
  
  // ###### FLECHE DE GAUCHE DE LA LIGHTBOX ###### //
  const lightboxArrowLeft = document.querySelector('.fa-chevron-left')
  // const lightboxArrowLeft = document.querySelector('#lightbox-test-arrowLeft')
  lightboxArrowLeft.addEventListener("click", () => {
    
    // Recuperation de la position de l'image en cours
    const lightboxImgEnCours = document.querySelector('#lightboxImg');
    const imageAlt = lightboxImgEnCours.alt;
    
    // Recuperation de la position de la image en cours
    if (imageAlt) {
      
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      const imageAlt = lightboxImgEnCours.alt;
      let filter = medias.filter(media => media.image === imageAlt)
      let positionCible = filter[0];
      let currentPosition = medias.indexOf(positionCible);
      
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.beforeImage(currentPosition);
    }
    // Recuperation de la position de la video en cours
    else if (imageAlt === "") {
      
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      const videoAlt = lightboxVideoEnCours.alt;
      let filterVideo = medias.filter(media => media.video === videoAlt);
      let positionCible = filterVideo[0];
      let currentPosition = medias.indexOf(positionCible);
      
      // Construction de l'element suivant
      let lightbox = new Lightbox(medias, currentPosition);
      lightbox.beforeImage(currentPosition);
    }
    
    // Construction de l'element suivant
    // let lightbox = new Lightbox(medias, currentPosition);
    // lightbox.nextImageTest(currentPosition);
    
  })
  
  // ###### NAVIGATION AU CLAVIER DE LA LIGHTBOX ###### //
  document.addEventListener("keydown", function(event) {
    const sectionLightbox = document.querySelector('#lightbox-test');
    
    const lightboxAriaHidden = sectionLightbox.getAttribute('aria-hidden');
    
    if (lightboxAriaHidden != "true") {
      // ###### TOUCHE DE DROITE DE LA LIGHTBOX ###### //
      if (event.keyCode === 39) {
        // La flèche de droite a été pressée
        
        
        // Recuperation de la position de l'image en cours
        const lightboxImgEnCours = document.querySelector('#lightboxImg');
        const imageAlt = lightboxImgEnCours.alt;
        // let filter = medias.filter(media => media.image === imageAlt)
        // let positionCible = filter[0];
        // let currentPosition = medias.indexOf(positionCible);
        
        // Recuperation de la position de la image en cours
        if (imageAlt) {
          
          const lightboxImgEnCours = document.querySelector('#lightboxImg');
          const imageAlt = lightboxImgEnCours.alt;
          let filter = medias.filter(media => media.image === imageAlt)
          let positionCible = filter[0];
          let currentPosition = medias.indexOf(positionCible);
          
          let lightbox = new Lightbox(medias, currentPosition);
          lightbox.nextImage(currentPosition);
        }
        // Recuperation de la position de la video en cours
        else if (imageAlt === "") {
          
          const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
          const videoAlt = lightboxVideoEnCours.alt;
          let filterVideo = medias.filter(media => media.video === videoAlt);
          let positionCible = filterVideo[0];
          let currentPosition = medias.indexOf(positionCible);
          
          // Construction de l'element suivant
          let lightbox = new Lightbox(medias, currentPosition);
          lightbox.nextImage(currentPosition);
        }
        
        // Construction de l'element suivant
        // let lightbox = new Lightbox(medias, currentPosition);
        // lightbox.nextImageTest(currentPosition);
        
        
      }
      // ###### TOUCHE DE GAUCHE DE LA LIGHTBOX ###### //
      if (event.keyCode === 37) {
        // La flèche de gauche a été pressée
        
        
        // Recuperation de la position de l'image en cours
        const lightboxImgEnCours = document.querySelector('#lightboxImg');
        const imageAlt = lightboxImgEnCours.alt;
        // let filter = medias.filter(media => media.image === imageAlt)
        // let positionCible = filter[0];
        // let currentPosition = medias.indexOf(positionCible);
        
        // Recuperation de la position de la image en cours
        if (imageAlt) {
          
          const lightboxImgEnCours = document.querySelector('#lightboxImg');
          const imageAlt = lightboxImgEnCours.alt;
          let filter = medias.filter(media => media.image === imageAlt)
          let positionCible = filter[0];
          let currentPosition = medias.indexOf(positionCible);
          
          let lightbox = new Lightbox(medias, currentPosition);
          lightbox.beforeImage(currentPosition);
        }
        // Recuperation de la position de la video en cours
        else if (imageAlt === "") {
          
          const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
          const videoAlt = lightboxVideoEnCours.alt;
          let filterVideo = medias.filter(media => media.video === videoAlt);
          let positionCible = filterVideo[0];
          let currentPosition = medias.indexOf(positionCible);
          
          // Construction de l'element suivant
          let lightbox = new Lightbox(medias, currentPosition);
          lightbox.beforeImage(currentPosition);
        }
        
        // Construction de l'element suivant
        // let lightbox = new Lightbox(medias, currentPosition);
        // lightbox.nextImageTest(currentPosition);
        
        
      }
      // ###### TOUCHE ECHAP DE LA LIGHTBOX ###### //
      if (event.keyCode === 27 || event.keyCode === 32) {
        // La touche "Échap" a été pressée
        const lightboxTest = document.querySelector('#lightbox-test');
        lightboxTest.style.display = 'none';
      }
    } 
  });
  /////////////////////////////////
  
}

// Fonction d'initialisation
// ________________________

async function init() {
  // Récupère les datas des photographes
  const photographerModel = new PhotographerModel();
  
  let params = (new URL(document.location)).searchParams;
  let id = parseInt(params.get('id'));  
  
  const headerPhotographer = await photographerModel.getInfosPhotographer(id);
  const mediaPhotographer = await photographerModel.getMediasPhotographer(id);  
  
  displayData(headerPhotographer, mediaPhotographer);
  
  displayLightbox(mediaPhotographer);
}

init();
