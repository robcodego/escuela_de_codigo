function reproducir(sonido){
    const audio = new Audio(sonido);
    audio.play();
    console.log(audio);
}

document.addEventListener('keydown',  (event) =>{
    console.log(event);
    let tecla = event.key.toUpperCase();
    switch(tecla){
        case 'A':
            reproducir('audio/a.mp3');
            console.log(tecla);
            break;
        case 'B':
            reproducir('audio/b.mp3');
            console.log(tecla);
            break;
        case 'C':
            reproducir('audio/c.mp3');
            console.log(tecla);
            break;
        case 'D':
            reproducir('audio/d.mp3');
            console.log(tecla);
            break;
    }
});
for(let i = 0; i < document.querySelectorAll('button').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function (){
        switch(this.textContent){
            case 'A':
                reproducir('audio/a.mp3');
                console.log(this.textContent);
                break;
            case 'B':
                reproducir('audio/b.mp3');
                console.log(this.textContent);
                break;
            case 'C':
                reproducir('audio/c.mp3');
                console.log(this.textContent);
                break;
            case 'D':
                reproducir('audio/d.mp3');
                console.log(this.textContent);
                break;
        }
    })
}

