let jugador1 = Math.floor(Math.random()*3+1);
let jugador2 = Math.floor(Math.random()*3+1);
const piedra = 'https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_rock_icon_194408.png';
const papel = 'https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_paper_icon_194460.png';
const tijeras = 'https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_scissors_icon_194407.png';
switch(jugador1){
    case 1:
        document.querySelector('.jugador1 img').setAttribute('src', piedra);
        document.querySelector('.jugador1 img').style.transform = 'rotate(90deg)';
        break;
    case 2:
        document.querySelector('.jugador1 img').setAttribute('src',papel);
        document.querySelector('.jugador1 img').style.transform = 'rotate(90deg)';
        break;
    case 3:
        document.querySelector('.jugador1 img').setAttribute('src',tijeras);
        document.querySelector('.jugador1 img').style.transform = 'rotate(180deg)';
        document.querySelector('.contenedor div').style.backgroundColor= 'red';
        break;
}
switch(jugador2){
    case 1:
        document.querySelector('.jugador2 img').setAttribute('src', piedra);
        document.querySelector('.jugador2 img').style.transform = 'rotate(270deg)';
        break;
    case 2:
        document.querySelector('.jugador2 img').setAttribute('src',papel);
        document.querySelector('.jugador2 img').style.transform = 'rotate(270deg)';
        break;
    case 3:
        document.querySelector('.jugador2 img').setAttribute('src',tijeras);
        break;
}
let resultado = jugador1&jugador2;
if(resultado == 1  && jugador1 != jugador2){
    if(jugador1<jugador2){
        document.querySelector('p.ganaste').textContent = 'Jugador 1 Gana';
    }else{
        document.querySelector('p.ganaste').textContent = 'Jugador 2 Gana';
    }
}else if(resultado == 2 && jugador1 != jugador2){
    if(jugador1<jugador2){
        document.querySelector('p.ganaste').textContent = 'Jugador 2 Gana';
    }else{
        document.querySelector('p.ganaste').textContent = 'Jugador 1 Gana';
    }   
} else if(resultado == 0  && jugador1 != jugador2){
    if(jugador1<jugador2){
        document.querySelector('p.ganaste').textContent = 'Jugador 2 Gana';
    }else{
        document.querySelector('p.ganaste').textContent = 'Jugador 1 Gana';
    }
}else{
    document.querySelector('p.ganaste').textContent = 'Empataron';
}