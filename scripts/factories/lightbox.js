// Factory dédié à la LIGHTBOX
function lightboxFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price } = data;
    
    const alternate = `${title}`;
    const ariaLabel = `${image}`;
    const mp4 = `${video}`
    
    function getLightboxDOM(srcImg, images, currentPosition) {
        
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
        iconBefore.addEventListener("click", () => {
            lightboxContainer.remove();
            let lightbox = new Lightbox(images);
            lightbox.beforeImage(currentPosition);
        })
        
        // ICONE fermeture
        const lightboxClose = document.createElement("div");
        lightboxClose.setAttribute('class', 'zoneClose');
        const iconClose = document.createElement('i');
        iconClose.setAttribute('class', 'fa-solid fa-xmark fa-2xl');
        lightboxClose.appendChild(iconClose);
        lightboxClose.addEventListener("click", () => {
            lightboxContainer.remove();
            sectionLightbox.style.display = 'none';
            
            // Gestion "aria-hidden"
            const header = document.querySelector('header');
            const main = document.querySelector('main');
            header.setAttribute('aria-hidden', 'false');
            main.setAttribute('aria-hidden', 'false');
            sectionLightbox.setAttribute('aria-hidden', 'true');
        })
        
        // ICONE Fleche SUIVANTE
        const lightboxArrowNext = document.createElement("div");
        lightboxArrowNext.setAttribute('class', 'zoneArrowNext');
        const iconNext = document.createElement('i');
        iconNext.setAttribute('class', 'fa-solid fa-chevron-right fa-2xl');
        lightboxArrowNext.appendChild(iconNext);
        iconNext.addEventListener("click", () => {
            lightboxContainer.remove();
            let lightbox = new Lightbox(images);
            lightbox.nextImage(currentPosition);
        })
        // Cas pour selection au clavier
        function handleArrow(e) {
            // let removeLightbox = sectionLightbox.firstChild;
            // sectionLightbox.removeChild(removeLightbox);

            if (e.key === 'ArrowRight') {
                console.log('Flèche droite pressée !');
                lightboxContainer.remove();
                let lightbox = new Lightbox(images);
                lightbox.nextImage(currentPosition);
            }
            if (e.key === 'ArrowLeft') {
                console.log('Flèche gauche pressée !');
                lightboxContainer.remove();
                let lightbox = new Lightbox(images);
                lightbox.beforeImage(currentPosition);
            }
        }
        
        document.addEventListener('keydown', handleArrow);
        
        // Ajout dans le DOM
        lightboxContainer.appendChild(lightboxArrowBefore);
        lightboxContainer.appendChild(lightboxImg);
        lightboxArrowNext.appendChild(lightboxClose);
        lightboxContainer.appendChild(lightboxArrowNext);
        
        return (lightboxContainer) ;
    }
    
    function getLightboxVideo(srcVideo, images, currentPosition) {
        // Section LIGHTBOX
        const sectionLightbox = document.querySelector('#lightbox');
        sectionLightbox.style.display = 'flex';
        
        // Section Container LIGHTBOX
        const lightboxContainer = document.createElement("div");
        lightboxContainer.setAttribute("class", "lightbox-container");
        
        // VIDEO en cours d'affichage
        const lightboxVideo = document.createElement("video");
        lightboxVideo.setAttribute('controls', "");
        
        const source = document.createElement('source');
        source.setAttribute('src', srcVideo)
        source.setAttribute('type', "video/mp4");
        lightboxVideo.appendChild(source);
        
        // ICONE Fleche AVANT
        const lightboxArrowBefore = document.createElement("div");
        lightboxArrowBefore.setAttribute('class', 'zoneArrowBefore');
        const iconBefore = document.createElement('i');
        iconBefore.setAttribute('class', 'fa-solid fa-chevron-left fa-2xl');
        lightboxArrowBefore.appendChild(iconBefore);
        lightboxArrowBefore.addEventListener("click", () => {
            lightboxContainer.remove();
            let lightbox = new Lightbox(images);
            lightbox.beforeImage(currentPosition);
        })
        
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
        lightboxArrowNext.addEventListener("click", () => {
            lightboxContainer.remove();
            let lightbox = new Lightbox(images);
            lightbox.nextImage(currentPosition);
        })
        
        // Ajout dans le DOM
        lightboxContainer.appendChild(lightboxArrowBefore);
        lightboxContainer.appendChild(lightboxVideo);        
        lightboxArrowNext.appendChild(lightboxClose);
        lightboxContainer.appendChild(lightboxArrowNext);
        
        
        return (lightboxContainer) ;
    }
    
    return { getLightboxDOM, getLightboxVideo }
}
