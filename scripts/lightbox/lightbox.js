
class Lightbox {
  constructor(listElement, currentPosition) {
    
    this.currentElement = null;
    this.listElement = listElement;
    // this.currentPosition = currentPosition;
  }
  
  currentIndex(index) {
    let currentIndex = index;
    console.log(currentIndex);
    return currentIndex;
    
  }
  
  showTest(index, srcImg) {
    let currentPosition = index;
    let medias = this.listElement;
    // console.log(medias[currentPosition]);
    
    // APPARITION DE LA LIGHTBOX
    const lightboxTest = document.querySelector('#lightbox-test');
    lightboxTest.style.display = 'flex';
    lightboxTest.setAttribute('aria-hidden', 'false');
    
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
      const lightboxVideoEnCoursSource  = document.querySelector("#lightboxVideoSource")
      
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
    
  }
  
  show(index) {
    let currentPosition = index;
    // console.log(currentPosition);
    let medias = this.listElement;
    
    let tailleTabMedias = medias.length;
    // console.log(tailleTabMedias);
    
    
    let infosMediaTarget = medias[currentPosition];
    
    if (medias[currentPosition].image) {
      let imageJPG = infosMediaTarget.image;
      let src = 'assets/images/' + imageJPG;
      // console.log(src);
      // CIBLE
      const sectionLightbox = document.querySelector('#lightbox');
      
      // CONSTRUCTION DE LA LIGHTBOX
      const lightboxFactoryConst = lightboxFactory(this.listElement);
      const lightboxDOM = lightboxFactoryConst.getLightboxDOM(src, this.listElement, currentPosition);
      sectionLightbox.appendChild(lightboxDOM); 
    } 
    // else {
    //   let videoMP4 = infosMediaTarget.video;
    //   let src = 'assets/images/' + videoMP4;
    //   console.log(src);
    
    //   const sectionLightbox = document.querySelector('#lightbox');
    //   // CONSTRUCTION DE LA LIGHTBOX
    //   const lightboxFactoryConst = lightboxFactory(this.listElement);
    //   const lightboxDOM = lightboxFactoryConst.getLightboxVideo(src, this.listElement, currentPosition);
    //   sectionLightbox.appendChild(lightboxDOM); 
    // }
    
  }
  
  nextImage(currentPosition) { 
    let medias = this.listElement;
    let mediasLength = medias.length;
    console.log(mediasLength);
    let newPosition = currentPosition + 1;
    
    if (newPosition >= mediasLength) {
      this.show(0);
    } else {
      this.show(newPosition)
    }
    
  }
  
  nextImageTest(currentPosition) { 
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
    let medias = this.listElement;
    let mediasLength = medias.length;
    console.log(mediasLength);
    let newPosition = currentPosition - 1;
    
    if (newPosition < 0) {
      let newPosition = mediasLength - 1;
      this.show(newPosition);
    } else {
      this.show(newPosition)
    }
    
  }
  
  beforeImageTest(currentPosition) {
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
