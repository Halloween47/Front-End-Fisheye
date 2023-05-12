// export async function fetchData() {
//   const response = await fetch("data/photographers.json");
//   const photographers = await response.json();
//   return photographers;
// }
import { PhotographerModel } from "../models/photographerModel";

async function getPhotographers() {

  // Insérer les données JSON dans le tableau (& affichage)
  const response = await fetch("data/photographers.json");
  const photographers = await response.json();

  // Vérification du nouveau contenu du tableau
  console.log(photographers);

  // et bien retourner le tableau photographers seulement une fois récupéré
  return photographers;

}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};


let photographerModel = new PhotographerModel()
let toto = photographerModel.getListePhotographers();

console.log(JSON.stringify(toto));


async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
};

init();

