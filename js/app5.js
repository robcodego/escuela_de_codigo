function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    function saltar(){
        console.log('Persona saltando');
    }
}

let Persona1 = new Persona('Roberto', 'Figueroa', 23);
let Persona2 = new Persona('Juan', 'Pérez', 35);
console.log(Persona1);
console.log(Persona2);

let Persona3 ={
    nombre : 'Jesús',
    apellido : 'Cruz',
    edad: 25
}
console.log(Persona3);
document.querySelector('.clase_1').innerHTML = '<p> Esto fue modificado con innerHTML<p>';
$(".clase_1").html('<p> Esto fue modificado con html<p>');
$(".numero").css("font-size", "40px");
console.log($(".a").attr('type'));
$('.a').before('<button> Botón agregado con JQuery </button>');
console.log($('p').text());