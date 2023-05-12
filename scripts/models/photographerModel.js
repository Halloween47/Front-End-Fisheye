export class PhotographerModel {
  async getListePhotographers() {
    const listePhotographers = await fetch('data/photographers.json');
    const listePhotographersJson = await listePhotographers.json();

    return listePhotographersJson.photographers;
  }

  async getInfosPhotographer(idPhotographer) {
    const listePhotographers = await fetch('data/photographers.json');
    const listePhotographersJson = await listePhotographers.json();
    const photographers = listePhotographersJson.photographers;

    photographers
      .find(photographer => {
        return photographer.id == idPhotographer
      })
      .map(async photographer => {

        const listePhotographers = await fetch('data/photographers.json');
        const listePhotographersJson = await listePhotographers.json();
        const mediaPhotographer = listePhotographersJson.media;
    
        let mediaAAjouter = mediaPhotographer
          .forEach(media => {
            return media.photographerId == photographer.id
          });
    
        return JSON.stringify(
          {
            "photographer": photographer,
            "media": mediaAAjouter
          }
        );
      });
  }
}