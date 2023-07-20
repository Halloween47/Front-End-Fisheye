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
    return currentIndex;
    
  }
  
  showTest(index) {
    let currentPosition = index;
    let medias = this.listElement;
    
    // APPARITION DE LA LIGHTBOX
    // ________________________
    
    const lightbox = document.querySelector('#lightbox-test');
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
    
    let tableau = medias[currentPosition];
    
    let elementImage = 'image';
    let elementVideo = 'video';
    
    if (elementImage in tableau) {
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
      
      const lightboxVideoEnCours = document.querySelector('#lightboxVideo');
      lightboxVideoEnCours.style.display = "block";
      const lightboxImgEnCours = document.querySelector('#lightboxImg');
      lightboxImgEnCours.style.display = "none";
      
      const video = medias[currentPosition].video;
      const videoSrc = 'assets/images/' + video;
      lightboxImgEnCours.src = "";
      lightboxImgEnCours.alt = "";
      lightboxVideoEnCours.src = videoSrc;
      lightboxVideoEnCours.alt = video;
      
    }

    // Affichage titre image
    let elementTitre = document.querySelector('#lightboxTitre');
    elementTitre.textContent = tableau.title;
    
  }

  nextImage(currentPosition) { 
    let medias = this.listElement;
    let mediasLength = medias.length;
    
    let newPosition = currentPosition + 1;

    if (newPosition >= mediasLength) {
      this.showTest(0);
    } else {
      this.showTest(newPosition)
    }
    
  }

  beforeImage(currentPosition) {
    
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
