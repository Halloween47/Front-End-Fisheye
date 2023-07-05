// Factory pour les données " MEDIAS "
function mediaFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price } = data;
    
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
        
        const containerImg = document.createElement('div');
        containerImg.setAttribute('class', 'container-img');
        article.appendChild(containerImg);
        
        const img = document.createElement( 'img' );
        
        if (checkVideo()) {
            const video = document.createElement('video');
            video.setAttribute('controls', "");
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
            
        } else {
            img.setAttribute("src",photos);
            img.setAttribute("alt", images);
            img.setAttribute("aria-label", titleMedia);
            img.setAttribute("class", "img-lightbox");
            // img.setAttribute("class", "async-element");
            containerImg.appendChild(img);
        }
        
        // Gestion des LIKES
        const zoneIconLikes = document.createElement('div');
        const iconLike = document.createElement('i');
        let nombreLikes = document.createElement('p');
        
        zoneIconLikes.setAttribute('class', 'zoneIconLikes');
        iconLike.setAttribute('class', 'fa-solid fa-heart fa-xl');
        nombreLikes.setAttribute('class', 'nombreLikes');
        // nombreLikes.textContent = '12';
        nombreLikes.textContent = likePhoto;

        // console.log(likePhoto);
          
        article.appendChild(zoneIconLikes);
        zoneIconLikes.appendChild(nombreLikes);
        zoneIconLikes.appendChild(iconLike);
        
        return (article);
    }
    
    return { idPhotographerMedia, getMediaCardDOM, id }
}
