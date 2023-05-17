
// Factory dédié pour les "MEDIA"
function mediaFactory(data) {
    const { photographerId, image } = data;
    
    
    const idPhotographerMedia = `${photographerId}`;
    
    async function getName(idPhotographerMedia) {
        const response = await fetch("data/photographers.json");
        const photographersJSON = await response.json();
        const photographers = photographersJSON.photographers;
        console.log(photographers);
        
        let name = photographers.find(function(photographer) {
            return photographer.id === idPhotographerMedia;
        })
        return name;
        console.log(name);
    }
    getName(idPhotographerMedia);
    
    // console.log(idPhotographerMedia);
    
    
    
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    let name = params.get('name');
    console.log(id);
    
    const imageMedia = `assets/photographers/FishEye_Photos/Sample Photos/${name}`;
    // console.log(imageMedia);
    
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



