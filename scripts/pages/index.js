// export async function fetchData() {
//   const response = await fetch("data/photographers.json");
//   const photographers = await response.json();
//   return photographers;
// }

// Je récupére mon modèle
import { PhotographerModel } from "../models/photographerModel.js";

// Fonction de " Récupération de la liste JSON "photographers" "
async function getPhotographers() {
  
  // Insérer les données JSON dans le tableau (& affichage)
  const response = await fetch("data/photographers.json");
  const photographers = await response.json();
  
  // Vérification du nouveau contenu du tableau
  // console.log(photographers);
  
  // et bien retourner le tableau photographers seulement une fois récupéré
  return photographers;
  
}

// Fonction "Affichage sur écran des données correspondant"
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  
  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Exemple pour une application de "JSON.stringify()"
// const obj = { name: "John", age: 30, city: "New York" };
// const jsonString = JSON.stringify(obj);
// console.log(obj);
// console.log(jsonString);

// TEST* pour le fonctionnement de "Models"
async function test() {
  let photographerModel = new PhotographerModel();
  let testGetList = await photographerModel.getListePhotographers();

  // Renvoie une chaine de caractères du fichier JSON
  // console.log(JSON.stringify(testGetList));

  // Renvoie le contenu du fichier JSON
  console.log(testGetList);
}

// Fonction d'initialisation
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  // Affiche les données
  displayData(photographers);
  test();
}

init();

