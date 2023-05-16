function photographerFactory(data) {
    const { name, portrait, city, tagline, price, id } = data;
    
    const picture = `assets/photographers/${portrait}`;
    const alternate = `${name}`;
    const ariaLabel = `${tagline}`;
    const photographer = `photographer.html?id=${id}name=${name}`;
    // const photographer = `photographer.html`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        const link = document.createElement( 'a' );
        link.setAttribute("href", photographer);
        link.setAttribute("class", "focus");
        // Création d'un lien entre index.html et la page "photographes"
        link.addEventListener("click", () => {
            console.log(data);
        })
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", alternate);
        img.setAttribute("aria-label", ariaLabel);
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const pcity = document.createElement( 'p' );
        pcity.textContent = city;
        
        const ptagline = document.createElement( 'p' );
        ptagline.textContent = tagline;
        
        const pprice = document.createElement( 'p' );
        pprice.textContent = price;
        
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pcity);
        article.appendChild(ptagline);
        article.appendChild(pprice);
        
        return (article);
    }
    function getPhotographersCardDOM() {
        const article = document.createElement( 'article' );
        
        const link = document.createElement( 'a' );
        link.setAttribute("href", photographer);
        link.setAttribute("class", "focus");
        // Création d'un lien entre index.html et la page "photographes"
        link.addEventListener("click", () => {
            console.log(data);
        })
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", alternate);
        img.setAttribute("aria-label", ariaLabel);
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        
        const pcity = document.createElement( 'p' );
        pcity.textContent = city;
        
        const ptagline = document.createElement( 'p' );
        ptagline.textContent = tagline;
                
        article.appendChild(link);
        // link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(pcity);
        article.appendChild(ptagline);
        
        return (article);
    }

    return { name, picture, city, tagline, price, getUserCardDOM, getPhotographersCardDOM }

}

