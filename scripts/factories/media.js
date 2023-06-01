
// Factory dédié pour les "MEDIA"
function mediaFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price } = data;
    
    
    
    const idPhotographerMedia = `${photographerId}`;
    const photos = `assets/images/${image}`;
    const videos = `assets/images/${video}`;
    const titleMedia = `${title}`;
    
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
            img.setAttribute("alt", titleMedia);
        img.setAttribute("aria-label", titleMedia);
            containerImg.appendChild(img);
        }

        
        
        return (article);
    }
    
    return { idPhotographerMedia, getMediaCardDOM }
}

//*************************************************** */
// async function getName() {
//     const response = await fetch("data/photographers.json");
//     const photographersJSON = await response.json();
//     const photographers = photographersJSON.photographers;
//     console.log(photographers);

//     let params = (new URL(document.location)).searchParams;
//     let id = parseInt(params.get('id'));
//     console.log(id);

//         let idPhotographer = photographers.filter(
//         photographer => photographer.id === id
//     )
//     console.log(idPhotographer[0].name);
// const name = idPhotographer[0].name;
// const linkMedia = `assets/photographers/FishEye_Photos/Sample Photos/${name}`;
// console.log(linkMedia)
//     }
//     getName();
//*************************************************** */
// async function getName() {
//     const response = await fetch("data/photographers.json");
//     const photographersJSON = await response.json();
//     const photographers = photographersJSON.photographers;
//     // console.log(photographers);

//     let params = (new URL(document.location)).searchParams;
//     let id = parseInt(params.get('id'));

//     let idPhotographer = photographers.filter(
//         photographer => photographer.id === id
//     )
//     // console.log(idPhotographer);
//     const name = idPhotographer[0].name;
//     console.log(name);
//     const imageMedia = `assets/photographers/FishEye_Photos/Sample Photos/${name}`;
//     console.log(imageMedia);
//     return imageMedia
// }
// getName();
