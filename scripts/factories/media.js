// Factory dédié pour les "MEDIA"
function mediaFactory(data) {
    const { photographerId, image } = data;
    

    const idPhotographerMedia = `${photographerId}`;
    const imageMedia = `assets/photographers/FishEye_Photos/Sample Photos/${nom}`;
    
    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", imageMedia);
        // img.setAttribute("alt", titleMedia);
        // img.setAttribute("aria-label", titleMedia);
        
        article.appendChild(img);
        
        return (article);
    }
    
    return { idPhotographerMedia, imageMedia, getMediaCardDOM }
}



