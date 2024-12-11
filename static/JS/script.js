/***  Define dictionary for the carousel ***/

let images = [
    {
        "url": "static/IMG/jetsky.jpeg",
        "name": "Jetsky",
        "description": "Is an acuatic sport for max of two person peer vehicle, this adventure had a limited time of 40M, you had a range where you can move freely."
    },
    {
        "url": "static/IMG/parasailingRent.jpg",
        "name": "Parasailing",
        "description": "Extreme deport for lovers of highness, you had to try this ones, recomended for 2 person maxiaum, there's a guide that give you this new adventure to enjoy."
    },
    {
        "url": "static/IMG/pontoon.jpg",
        "name": "Pontoon Tour",
        "description": "It's an autoguided tour, from no more of two person peer vehicle, they can move arround the island with no complication, it usually rent by days up to 1 Week or more ."
    },
    {
        "url": "static/IMG/carRent.jpg",
        "name": "Car rent",
        "description": "It's an autoguided tour, a very interesting experience, you can exchange for 4Hour minium to 24H 00M."
    },
]


/***  Defining variables to reemplace with js ***/

let back = document.getElementById('back');
let foward = document.getElementById('foward');
let image = document.getElementById('img');
let points = document.getElementById('points');
let text = document.getElementById('text')
let actual = 0;


/** Calling function **/
positionCarousel();


/*** Defining methods ***/

back.addEventListener('click', function(){
    
    actual -=1

    if (actual== -1){
        actual == images.length -1
    }

    image.innerHTML = ` <img class="img" src="${images[actual].url}"></img> `
    text.innerHTML = `
    <h3>${images[actual].name}</h3>
    <p>${images[actual].description}</p>
    `
    
    positionCarousel();
})

foward.addEventListener('click', function(){
    
    actual +=1

    if (actual== images.length){
        actual = 0;
    }

    image.innerHTML = ` <img class="img" src="${images[actual].url}"></img> `
    text.innerHTML = ` 
    <h3>${images[actual].name}</h3>
    <p>${images[actual].description}</p> `
    
    positionCarousel();
})

function positionCarousel(){

    points.innerHTML = "";
    
    for (let i = 0; i < images.length; i++){
        if(i == actual){
            points.innerHTML += ' <p class="bold>.</p> '
        }
        else{
            points.innerHTML += ' <p>.</p> '
        }
    }
}

/*** Function for the active navs ***/

/*async function cargar(pagina) {

    const navlinks = document.querySelectorAll('.menu-activo');
    navlinks.forEach(link => {
        link.classList.remove('menu-activo');
    })

    const equipo = await fetch(`/${pagina}`);

    if (equipo.ok) {
        document.getElementById("contenido").innerHTML = await equipo.text()
        document.getElementById(pagina).classList.add("menu-activo");
    }else{
        document.getElementById("contenido").innerHTML = "Error al cargar los datos";
    }

}*/