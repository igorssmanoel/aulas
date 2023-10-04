let cartaVirada1 = null;
let cartaVirada2 = null;

let imagens = ["bull.jpg","dog.jpg","jaguar.jpg"];

//<div data-par="carta-1"  id="carta-1" class="carta flex-center" onclick="virarCarta('carta-1')">1</div>
// <div data-par="carta-1"  id="carta-2" class="carta flex-center" onclick="virarCarta('carta-2')">1</div>


function virarCarta(cartaId){
    console.log(cartaId);
    let elemento = document.getElementById(cartaId);

    if (elemento == null || elemento.classList.contains('carta-virada')  || elemento.classList.contains('carta-par')){
        return;
    }
    console.log(elemento.getAttribute('data-par'));
    elemento.classList.remove("carta-virada");
   
    if (cartaVirada1 != null){
        cartaVirada2 = elemento;
        if (cartaVirada2.getAttribute('data-par') == cartaVirada1.getAttribute('data-par')){
            console.log("AS CARTAS SÃO IGUAIS");
            cartaVirada1.classList.add('carta-par');
            cartaVirada2.classList.add('carta-par');
            let dataPar = cartaVirada1.getAttribute('data-par');
            cartaVirada1.style.backgroundImage = `url('./img/${dataPar}')`;
            cartaVirada2.style.backgroundImage = `url('./img/${dataPar}')`;
            
        }else{
            console.log("AS CARTAS NÃO SÃO IGUAIS");
            cartaVirada1.classList.remove('carta-virada');
            cartaVirada2.classList.remove('carta-virada');
            //TODO:: Adicionar o background yellow;
        }
       
        cartaVirada1 = null;
        cartaVirada2 = null;
    } else{
        cartaVirada1 = elemento;
        let dataPar = cartaVirada1.getAttribute('data-par');
        cartaVirada1.style.backgroundImage = `url('./img/${dataPar}')`;
        cartaVirada1.style.backgroundSize = 'cover';

    }
}

function criarCarta(id, dataPar){
    let elementoCarta = document.createElement("div");
    elementoCarta.setAttribute("data-par", dataPar);
    elementoCarta.id = id;
    elementoCarta.className = "carta flex-center";
    elementoCarta.addEventListener('click', function(){
        virarCarta(id);
    });
    return elementoCarta;
}

function criaParametrosCarta(i, dataPar){
    let id = 'carta-'+i;
    
    let elementoCarta = criarCarta(id, dataPar);
    return elementoCarta;
    
}


function init(){
    let tabuleiro = document.getElementById("tabuleiro");
    for (let i = 0; i< imagens.length*2; i=i+2){
        let dataPar = imagens[i/2];

        let elementoCarta = criaParametrosCarta(i,dataPar)
        tabuleiro.appendChild(elementoCarta);

        let elementoCartaPar = criaParametrosCarta(i+1,dataPar)
        tabuleiro.appendChild(elementoCartaPar);
    } 
 
}






init();