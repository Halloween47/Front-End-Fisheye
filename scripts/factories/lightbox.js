// Factory dédié à la LIGHTBOX
function lightboxFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price } = data;
    
    const alternate = `${title}`;
    const ariaLabel = `${image}`;
    
    function getLightboxDOM(srcImg, altImg, images) {
        
        // Section LIGHTBOX
        const sectionLightbox = document.querySelector('#lightbox');
        sectionLightbox.style.display = 'flex';
        
        // Section Container LIGHTBOX
        const lightboxContainer = document.createElement("div");
        lightboxContainer.setAttribute("class", "lightbox-container");
        
        // IMAGE en cours d'affichage
        const lightboxImg = document.createElement("img");
        const picture = srcImg;
        lightboxImg.setAttribute("src", picture);
        // console.log(ariaLabel)
        lightboxImg.setAttribute("alt", alternate);
        lightboxImg.setAttribute("aria-label", ariaLabel);
        
        // ICONE Fleche AVANT
        const lightboxArrowBefore = document.createElement("div");
        lightboxArrowBefore.setAttribute('class', 'zoneArrowBefore');
        const iconBefore = document.createElement('i');
        iconBefore.setAttribute('class', 'fa-solid fa-chevron-left fa-2xl');
        lightboxArrowBefore.appendChild(iconBefore);
        
        // ICONE fermeture
        const lightboxClose = document.createElement("div");
        lightboxClose.setAttribute('class', 'zoneClose');
        const iconClose = document.createElement('i');
        iconClose.setAttribute('class', 'fa-solid fa-xmark fa-2xl');
        lightboxClose.appendChild(iconClose);
        
        // ICONE Fleche SUIVANTE
        const lightboxArrowNext = document.createElement("div");
        lightboxArrowNext.setAttribute('class', 'zoneArrowNext');
        const iconNext = document.createElement('i');
        iconNext.setAttribute('class', 'fa-solid fa-chevron-right fa-2xl');
        lightboxArrowNext.appendChild(iconNext);
        
        // Ajout dans le DOM
        lightboxContainer.appendChild(lightboxArrowBefore);
        lightboxContainer.appendChild(lightboxImg);
        lightboxArrowNext.appendChild(lightboxClose);
        lightboxContainer.appendChild(lightboxArrowNext);
        
        // EVENT Next
        function lightboxNext() {
            // console.log('testttttt');
            currentIndex = (currentIndex + 1) % mediaElements.length;
        }
        
        // lightboxArrowNext.addEventListener("click", () => {
        //     const lightboxArrowRight = new Lightbox(images);
        //     lightboxArrowRight.nextImage(altImg, images);             
        // });
        lightboxArrowNext.addEventListener("click", lightboxNext)
        
        return (lightboxContainer) ;
    }
    
    return { getLightboxDOM }
}
