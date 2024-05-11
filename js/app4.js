function reproducir(sonido){
    const audio = new Audio(sonido);
    audio.play();
    console.log(audio);
}

document.addEventListener('keydown',  (event) =>{
    console.log(this);
    let tecla = event.key.toUpperCase();
    switch(tecla){
        case 'A':
            document.querySelector('button.a').style.opacity = '0.5';
            reproducir('audio/oreja3000.mp3');
            document.querySelector('button.a').style.opacity = '0.2';
            break;
        case 'B':
            reproducir('audio/b.mp3');
            break;
        case 'C':
            reproducir('audio/c.mp3');
            break;
        case 'D':
            reproducir('audio/d.mp3');
            break;
    }
})

/* let hola = [3,2];
console.log(hola);
console.log(typeof hola);
class construirObj {
    constructor() {
        this.nombre = nombres;
    }
} */

/* function reproduce(event){
    let tecla = event.key.toUpperCase();
    switch(tecla){
        case 'A':
            reproducir('audio/a.mp3');
            break;
        case 'B':
            reproducir('audio/b.mp3');
            break;
        case 'C':
            reproducir('audio/c.mp3');
            break;
        case 'D':
            reproducir('audio/d.mp3');
            break;
    }
} */