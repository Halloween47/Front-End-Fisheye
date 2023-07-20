// #############################################################
// Factory dédié à la mise en forme des données MEDIAS
// #############################################################

// eslint-disable-next-line no-unused-vars
function mediaFactory(data) {
    const {id, photographerId, title, image, video, likes } = data;
    
    const idPhotographerMedia = `${photographerId}`;
    const images = `${image}`;
    const photos = `assets/images/${image}`;
    const videos = `assets/images/${video}`;
    const titleMedia = `${title}`;
    const likePhoto = `${likes}`;
    
    function checkVideo() {
        if (video) {
            return videos;
        }
    }    
    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute('class', 'articleMedia');
        
        const containerImg = document.createElement('div');
        containerImg.setAttribute('class', 'container-img');
        article.appendChild(containerImg);
        
        const img = document.createElement( 'img' );
        
        // Cas pour les VIDEOS
        // ________________________

        if (checkVideo()) {
            const video = document.createElement('video');
            containerImg.appendChild(video);
            
            const videoError = document.createElement('p');
            videoError.textContent = "Votre navigateur ne prend pas en charge la vidéo. mais vous pouvez toujours ";
            const videoLink = document.createElement('a');
            videoLink.textContent = "la télécharger";
            videoLink.setAttribute('href', videos);
            videoError.appendChild(videoLink);
            video.appendChild(videoError);
            
            const source = document.createElement('source');
            source.setAttribute('src', videos)
            source.setAttribute('type', "video/mp4");
            video.appendChild(source);
            
        } 
        
        // Cas pour les IMAGES
        // ________________________

        else {
            img.setAttribute("src",photos);
            img.setAttribute("alt", images);
            img.setAttribute("aria-label", titleMedia);
            img.setAttribute("class", "img-lightbox");
            // img.setAttribute("class", "async-element");
            containerImg.appendChild(img);
        }
        
        // TITRE de l'image
        // ________________________

        let titreImage = document.createElement('p');
        titreImage.setAttribute('class', 'titre-image');
        titreImage.textContent = titleMedia;
        
        // Gestion des LIKES
        // ________________________

        const zoneIconLikes = document.createElement('div');
        const zoneNbLikes = document.createElement('div');
        const iconLike = document.createElement('i');
        let nombreLikes = document.createElement('p');
        
        zoneIconLikes.setAttribute('class', 'zoneIconLikes');
        iconLike.setAttribute('class', 'fa-solid fa-heart fa-xl');
        iconLike.setAttribute('aria-label', 'likes');
        nombreLikes.setAttribute('class', 'nombreLikes');
        zoneNbLikes.setAttribute('class', 'zoneNbLikes');
        nombreLikes.textContent = likePhoto;
        
        
        article.appendChild(zoneIconLikes);
        zoneIconLikes.appendChild(titreImage);
        zoneIconLikes.appendChild(zoneNbLikes);
        zoneNbLikes.appendChild(nombreLikes);
        zoneNbLikes.appendChild(iconLike);
        
        return (article);
    }
    
    return { idPhotographerMedia, getMediaCardDOM, id }
}
