//Mettre le code JavaScript lié à la page photographer.html
async function fetchData() {
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    return data;
}

async function photographerData() {
    const data = await fetchData();
    const photographers = data.photographers;
    
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id'); 
    
    photographers.forEach(photographer => {
        // console.log(photographer.id)
        if (photographer.id == id) {
            console.log(photographer)
        }
    });
    
}



photographerData();