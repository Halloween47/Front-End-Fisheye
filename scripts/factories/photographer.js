function photographerFactory(data) {
    const { name, portrait, city, tagline, price } = data;
    
    const picture = `assets/photographers/${portrait}`;
    const alternate = `${name}`;
    const ariaLabel = `${tagline}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
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

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pcity);
        article.appendChild(ptagline);
        article.appendChild(pprice);
        
        return (article);
    }
    return { name, picture, city, tagline, price, getUserCardDOM }
}