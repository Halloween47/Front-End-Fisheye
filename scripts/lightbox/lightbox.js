// #############################################################
// Gestion du comportement de la LIGHTBOX
// #############################################################

// eslint-disable-next-line no-unused-vars
class Lightbox {
  constructor(listElement) {
    
    this.currentElement = null;
    this.listElement = listElement;
    // this.currentPosition = currentPosition;
  }
  
  currentIndex(index) {
    let currentIndex = index;
    console.log(currentIndex);
    return currentIndex;
    
  }
  
  showTest(index) {
    let currentPosition = index;
    let medias = this.listElement;
    // console.log(medias[currentPosition]);
    
    // APPARITION DE LA LIGHTBOX
    // ________________________
    
    const lightbox = document.querySelector('#lightbox-test');
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    
    let tableau = medias[currentPosition];
    // console.log(tableau);
    
    let elementImage = 'image';
    let elementVideo = 'video';
    
    if (elementImage in tableau) {
      // console.log("Image est presente");
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      lightboxImgEnCours.style.display = "block";
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      lightboxVideoEnCours.style.display = "none";

      const image = medias[currentPosition].image;
      const test = 'assets/images/' + image;
      lightboxImgEnCours.src = test;
      lightboxImgEnCours.alt = image;
      
    } 
    else if (elementVideo in tableau) {
      console.log("Video est presente");
      
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      lightboxVideoEnCours.style.display = "block";
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      lightboxImgEnCours.style.display = "none";
      
      const video = medias[currentPosition].video;
      // console.log(tableau.indexof(video));
      const videoSrc = 'assets/images/' + video;
      lightboxImgEnCours.src = "";
      lightboxImgEnCours.alt = "";
      lightboxVideoEnCours.src = videoSrc;
      lightboxVideoEnCours.alt = video;
      // console.log(lightboxVideoEnCours.alt);
      
    }

    // Affichage titre image
    let elementTitre = document.querySelector('#lightboxTitre');
    // elementTitre.textContent = "test";
    elementTitre.textContent = tableau.title;
    
  }

  nextImage(currentPosition) { 
    let medias = this.listElement;
    let mediasLength = medias.length;
    
    let newPosition = currentPosition + 1;

    if (newPosition >= mediasLength) {
      this.showTest(0);
      console.log('trop long');
    } else {
      this.showTest(newPosition)
    }
    
  }

  beforeImage(currentPosition) {
    console.log('before');
    
    let medias = this.listElement;
    let mediasLength = medias.length;
    
    let newPosition = currentPosition - 1;

    if (newPosition < 0) {
      let newPosition = mediasLength - 1;
      this.showTest(newPosition);
    } else {
      this.showTest(newPosition)
    }
    

  }
  
}
