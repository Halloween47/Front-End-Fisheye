//Mettre le code JavaScript lié à la page photographer.html
// async function fetchData() {
//     
// }





// photographerData();

import { fetchData } from "index.js";

async function test() {
    const data = await fetchData();
    console.log(data);
  }

  test();