    // {
    // console.log(data.photographers);
    // Code pour ajouter les données au tableau
    
    // let tableau = Object.values(data);
    // tableau.forEach(objet => {
    //   console.log(objet[0]);
    // photographers.push(objet);
    
    // }
    // )
    // console.log(photographers);
    // photographers.concat(tableau.photographers)
    
    
    // })
    
    
    async function getPhotographers() {
      // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
      // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
      let photographers = [
        
        {
          "name": "Ma data test",
          "id": 1,
          "city": "Paris",
          "country": "France",
          "tagline": "Ceci est ma data test",
          "price": 400,
          "portrait": "account.png"
        },
        {
          "name": "Autre data test",
          "id": 2,
          "city": "Londres",
          "country": "UK",
          "tagline": "Ceci est ma data test 2",
          "price": 500,
          "portrait": "account.png"
        },
        
      ]
      
      
      fetch('./data/photographers.json')
      .then(response => response.json())
      .then(data => 
        // photographers.push(data.photographers[2])

        {
          for(let i =0; i < data.photographers.length; i++) {
            // console.log(data.photographers[2]);
            photographers.push(data.photographers[i])
          }
        }

        )
        console.log(photographers)
        
        
        // et bien retourner le tableau photographers seulement une fois récupéré
        // return ({ photographers: [...photographers, ...photographers, ...photographers]})
        return ({photographers: [...photographers]})
        }
        
        async function displayData(photographers) {
          const photographersSection = document.querySelector(".photographer_section");
          
          photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
          });
        };
        
        async function init() {
          // Récupère les datas des photographes
          const { photographers } = await getPhotographers();
          displayData(photographers);
        };
        
        init();
        
        