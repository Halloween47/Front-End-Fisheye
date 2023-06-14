// Factory dédié à la LIGHTBOX
function lightboxFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price } = data;
    
    // const idPhotographer = `${photographerId}`;
    // console.log(idPhotographer)
    
    function getLightboxDOM(srcImg, images) {
        
        // Section LIGHTBOX
        const sectionLightbox = document.querySelector('#lightbox');
        sectionLightbox.style.display = 'flex';
        
        // Section Container LIGHTBOX
        const lightboxContainer = document.createElement("div");
        lightboxContainer.setAttribute("class", "lightbox-container");
        
        const lightboxImg = document.createElement("img");
        const picture = srcImg;
        lightboxImg.setAttribute("src", picture);
        
        const lightboxArrowBefore = document.createElement("div");
        lightboxArrowBefore.setAttribute('class', 'zoneArrowBefore');
        const iconBefore = document.createElement('i');
        iconBefore.setAttribute('class', 'fa-solid fa-chevron-left fa-2xl');
        lightboxArrowBefore.appendChild(iconBefore);
        
        const lightboxClose = document.createElement("div");
        lightboxClose.setAttribute('class', 'zoneClose');
        const iconClose = document.createElement('i');
        iconClose.setAttribute('class', 'fa-solid fa-xmark fa-2xl');
        lightboxClose.appendChild(iconClose);
        
        const lightboxArrowNext = document.createElement("div");
        lightboxArrowNext.setAttribute('class', 'zoneArrowNext');
        const iconNext = document.createElement('i');
        iconNext.setAttribute('class', 'fa-solid fa-chevron-right fa-2xl');
        lightboxArrowNext.appendChild(iconNext);
        
        lightboxContainer.appendChild(lightboxArrowBefore);
        lightboxContainer.appendChild(lightboxImg);
        lightboxArrowNext.appendChild(lightboxClose);
        lightboxContainer.appendChild(lightboxArrowNext);
        
        lightboxArrowNext.addEventListener("click", () => {
            const lightboxArrowRight = new Lightbox(lightboxContainer, images);
            lightboxArrowRight.nextImage();
            console.log('coucou');
            
        });
        
        return (lightboxContainer) ;
    }
    
    return { getLightboxDOM }
}

// class Lightbox {
//         constructor() {
//             this.currentIndex = 0;
//         }

//         getLightboxDOM(srcImg) {

//             const sectionLightbox = document.querySelector('#lightbox');
//             sectionLightbox.style.display = 'flex';

//             const lightboxContainer = document.createElement("div");
//             lightboxContainer.setAttribute("class", "lightbox-container");

//             const lightboxImg = document.createElement("img");
//             const picture = srcImg;
//             lightboxImg.setAttribute("src", picture);

//             const lightboxArrowBefore = document.createElement("div");
//             lightboxArrowBefore.setAttribute('class', 'zoneArrowBefore');
//             const iconBefore = document.createElement('i');
//             iconBefore.setAttribute('class', 'fa-solid fa-chevron-left fa-2xl');
//             lightboxArrowBefore.appendChild(iconBefore);

//             const lightboxClose = document.createElement("div");
//             lightboxClose.setAttribute('class', 'zoneClose');
//             const iconClose = document.createElement('i');
//             iconClose.setAttribute('class', 'fa-solid fa-xmark fa-2xl');
//             lightboxClose.appendChild(iconClose);

//             const lightboxArrowNext = document.createElement("div");
//             lightboxArrowNext.setAttribute('class', 'zoneArrowNext');
//             const iconNext = document.createElement('i');
//             iconNext.setAttribute('class', 'fa-solid fa-chevron-right fa-2xl');
//             lightboxArrowNext.appendChild(iconNext);

//             lightboxContainer.appendChild(lightboxArrowBefore);
//             lightboxContainer.appendChild(lightboxImg);
//             lightboxArrowNext.appendChild(lightboxClose);
//             lightboxContainer.appendChild(lightboxArrowNext);

//             return (lightboxContainer) ;
//         }

//         nextImage() {
//             if (currentIndex < this.images.length - 1) {
//               this.currentIndex++;
//             } else {
//               this.currentIndex = 0;
//             }
//             this.showImage(this.currentIndex);

//             console.log('clique à droite !');
//           }

//     }