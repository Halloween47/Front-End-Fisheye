
class Lightbox {
  constructor(listElement) {
    
    this.currentElement = null;
    this.listElement = listElement;
  }
  
  // show(id, imageSrc, imageAlt) {
  
  //   const sectionLightbox = document.querySelector('#lightbox');
  
  //   const lightboxFactoryConst = lightboxFactory(this.listElement);
  //   const lightboxDOM = lightboxFactoryConst.getLightboxDOM(imageSrc, imageAlt, this.listElement);
  //   sectionLightbox.appendChild(lightboxDOM);
  
  //   this.listElement.forEach((media, index) => {
  //     console.log(media);
  //     console.log(index);
  //   })
  
  // }
  
  show(id , jpg, titleImg) {
    
    const sectionLightbox = document.querySelector('#lightbox');
    
    // element jpg
    let imageSrc = 'assets/images/' + jpg;
    let imageAlt = titleImg;
    // element titre
    console.log(imageSrc);
    
    const lightboxFactoryConst = lightboxFactory(this.listElement);
    const lightboxDOM = lightboxFactoryConst.getLightboxDOM(imageSrc, imageAlt, this.listElement);
    sectionLightbox.appendChild(lightboxDOM);
    
    let medias = this.listElement;
    // console.log(medias);
    
      let test = medias.filter( media => media.image === imageAlt);
      medias.forEach((media, index) => {
        
      })
    
    
  }
  
  nextImage(titreImageEnCours, images) {
    
    //___EN-ORDRE___//
    var lightboxContainer = document.querySelector('.lightbox-container');
    
    if (lightboxContainer) {
      lightboxContainer.remove();
      
      // POSITION DE L'ELEMENT SUIVANT DANS LE TABLEAU
      var positionImageNext = this.getNextPosition(titreImageEnCours);
      // console.log(positionImageNext);
      
      // INFOS 
      var infosimgNext = this.getInfosNext();
      // console.log(infosimgNext);
      var imgJPGNext = infosimgNext.image;
      // console.log(imgJPGNext);
      var imageSrc = 'assets/images/' + imgJPGNext;
      // console.log(imageSrc);
      var imageAlt = infosimgNext.title;
      // // console.log(imageAlt);
      
      // DOM NOUVELLE CREATION
      const sectionLightbox = document.querySelector('#lightbox');
      
      const lightboxFactoryConst = lightboxFactory(this.listElement);
      const lightboxDOM = lightboxFactoryConst.getLightboxDOM(imageSrc, imageAlt, this.listElement);
      sectionLightbox.appendChild(lightboxDOM);
      
    }  
    
  }
  
  getElementById(id) {
    return this.listElement.find(element => element.id ==id);
  }
  
  getElementByTitle(title) {
    let testRetourInfosAvecTitle = this.listElement.filter(  media => media.image === title  )
    return testRetourInfosAvecTitle;
  }
  
  getNextPosition(titreImageEnCours) {
    
    // POSITION DE L'IMAGE EN COURS
    let recupInfosMediaEnCours = this.listElement.filter(media => media.image === titreImageEnCours);
    var infosMediaEnCours = recupInfosMediaEnCours[0];
    // console.log(infosMediaEnCours);
    var positionImageEnCours = this.listElement.indexOf(infosMediaEnCours);
    console.log(positionImageEnCours);
    
    // POSITION DE L'IMAGE SUIVANTE
    var positionImgNext = positionImageEnCours+1;
    console.log(positionImgNext);
    this.positionImgNext = positionImgNext;
    
    // INFOS SUR ELEMENT NEXT 
    var infosNextElement =  this.listElement[this.positionImgNext].image;
    console.log(infosNextElement);
    
    // RETOUR POSITION DE L'IMAGE SUIVANTE
    return this.positionImgNext;
  }
  
  getInfosNext() {
    // INFOS SUR ELEMENT NEXT 
    var infosNextElement =  this.listElement[this.positionImgNext];
    //  console.log(infosNextElement);
    
    return infosNextElement;
  }
  
}
