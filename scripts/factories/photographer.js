// #############################################################
// Factory dédié à la mise en forme des données PHOTOGRAPHES
// #############################################################

// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
    const { name, portrait, city, tagline, price, id, country } = data;
    
    const picture = `assets/photographers/${portrait}`;
    const alternate = `${name}`;
    const ariaLabel = `${tagline}`;
    const photographer = `photographer.html?id=${id}name=${alternate}`;
    const cityName = `${city}` + ',' ;
    const pricePerMonth = `${price}`;
    
    // Gestion de la page " index "
    // ________________________
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        const link = document.createElement( 'a' );
        link.setAttribute("href", photographer);
        link.setAttribute("class", "focus");
        // Création d'un lien entre index.html et la page "photographes"
        link.addEventListener("click", () => {
            console.log(data);
        })

        // Container image

        const containerImg = document.createElement('div');
        containerImg.setAttribute("class", "container-img");


        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", alternate);
        img.setAttribute("aria-label", ariaLabel);
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const pcity = document.createElement( 'p' );
        pcity.textContent = city + ', ' + country;
        
        const ptagline = document.createElement( 'p' );
        ptagline.textContent = tagline;
        
        const pprice = document.createElement( 'p' );
        pprice.textContent = pricePerMonth + '€/jour';
        
        article.appendChild(link);
        
        link.appendChild(containerImg);
        containerImg.appendChild(img);
        // link.appendChild(img);
        
        link.appendChild(h2);
        article.appendChild(pcity);
        article.appendChild(ptagline);
        article.appendChild(pprice);
        
        return (article);
    }
    
    // Gestion de la page " Photographes "
    // ________________________
    
    function getPhotographersCardDOM() {
        const article = document.createElement( 'article' );
        const headerPhoto = document.querySelector('.photograph-header');
        
        const roundedImg = document.createElement('div');
        roundedImg.setAttribute('class', 'rounded-img');
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", alternate);
        img.setAttribute("aria-label", ariaLabel);
        
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        
        const pcity = document.createElement( 'p' );
        pcity.textContent = cityName + ' ' + country;
        
        const ptagline = document.createElement( 'p' );
        ptagline.textContent = tagline;
        
        article.appendChild(h1);
        article.appendChild(pcity);
        article.appendChild(ptagline);
        headerPhoto.appendChild(roundedImg);
        roundedImg.appendChild(img);
        
        return (article);
    }
    
    function getTotalLikesCardDOM() {
        // const photographerPrice = document.querySelector(".photograph-price");
        const zoneEncart = document.createElement('div');
        zoneEncart.setAttribute('id','encartTJM');
        
        const photographerPriceZone = document.createElement('div')
        photographerPriceZone.setAttribute('class', 'priceZone');
        photographerPriceZone.textContent = pricePerMonth + '€ / jour';
        
        const totalLikesZone = document.createElement('div')
        totalLikesZone.setAttribute('class', 'likesZone');
        
        const totalLikes =document.createElement('div');
        totalLikes.setAttribute('class', 'totalLikes');
        totalLikes.textContent = pricePerMonth;       
        
        const totalLikesIcon = document.createElement('i');
        totalLikesIcon.setAttribute('class', 'fa-solid fa-heart fa-sm')
        
        zoneEncart.appendChild(totalLikesZone);
        zoneEncart.appendChild(photographerPriceZone);
        totalLikesZone.appendChild(totalLikes);
        totalLikesZone.appendChild(totalLikesIcon);
        
        return (zoneEncart);
    }
    
    return { name, picture, city, tagline, price, getUserCardDOM, getPhotographersCardDOM, getTotalLikesCardDOM }
    
}

