// #############################################################
// Modele pour la manipulation des données " Photographes "
// #############################################################

export class PhotographerModel {
  async getListePhotographers() {
    const listePhotographers = await fetch("data/photographers.json");
    const listePhotographersJson = await listePhotographers.json();
    return listePhotographersJson.photographers;
  }
  
  async getListeMedias() {
    const listeMedias = await fetch("data/photographers.json");
    const listeMediasJson = await listeMedias.json();
    
    return listeMediasJson.media;
  }
  
  async getInfosPhotographer(idPhotographer) {
    const listePhotographers = await fetch('data/photographers.json');
    const listePhotographersJson = await listePhotographers.json();
    const photographers = listePhotographersJson.photographers;
    
    
    // Ici le find sert essentiellement à recuperer les infos du photographer en fonction de l ID passé en parametre
    let photographerID = photographers.find(function(photographer) {
      return photographer.id === idPhotographer;
    })
    return photographerID;   
  }
  
  async getMediasPhotographer(idPhotographer) {
    const listePhotographers = await fetch('data/photographers.json');
    const listePhotographersJson = await listePhotographers.json();
    const medias = listePhotographersJson.media;
    
    let listeMediaPhotographer = medias.filter( 
      media => media.photographerId === idPhotographer
    )
    return listeMediaPhotographer;
  }

  async getMediasImageId(idPhotographer) {
    const listePhotographers = await fetch('data/photographers.json');
    const listePhotographersJson = await listePhotographers.json();
    const medias = listePhotographersJson.media;

    let listeMediaPhotographer = medias.filter( 
      media => media.photographerId === idPhotographer
    )
    return listeMediaPhotographer;

  }

  async getInfosMediaTarget(donneeCible) {
    const listePhotographers = await fetch('data/photographers.json');
    const listePhotographersJson = await listePhotographers.json();
    const medias = listePhotographersJson.media;
    
    let listeMediaPhotographer = medias.find(function(media) {
      return media.title === donneeCible;
    })
    return listeMediaPhotographer

  }
  
}