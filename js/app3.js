
/* function obtenerArea(base, altura, parrafo){
    base = document.querySelector('.base').value;
    altura = document.querySelector('.altura').value;
    let area_triangulo = (base*altura)/2;
    document.querySelector('.parrafo').textContent = area_triangulo;
}
function obtenerArea2(base, altura){
    let area_triangulo = (base*altura)/2;
    document.querySelector('.parrafo').textContent = area_triangulo;
} */

document.querySelector('.calcular').addEventListener(
        'click', function (){
            let tipo = document.querySelector('.tipo').textContent;
            switch (tipo){
                case 'Triangulo':
                    let base = document.querySelector('.base').value;
                    base = Number(base);
                    let altura = document.querySelector('.altura').value;
                    altura = Number(altura);
                    let area_triangulo = (base*altura)/2;
                    document.querySelector('.parrafo').textContent = area_triangulo;
                    document.querySelector('.figura').setAttribute('src', './img/triangulo.png');
                    break;
                case 'Circulo':
                    document.querySelector('.figura').setAttribute('src', './img/circulo.png');;
                    let radio = document.querySelector('.base').value;
                    radio = Number(radio);
                    let area_circulo = (3.1416*(radio**2));
                    document.querySelector('.parrafo').textContent = area_circulo;
                    break;
                case 'Cuadrado':
                    let lado = document.querySelector('.base').value;
                    lado = Number(lado);
                    let area_cuadrado = (lado*lado);
                    document.querySelector('.parrafo').textContent = area_cuadrado;
                    document.querySelector('.figura').setAttribute('src', './img/cuadrado.png');
                    break;
            }
    }
);
console.log(document.querySelectorAll('.nodo')[2]);
console.log(document.querySelector('.parrafo'));
console.log(document.querySelector('.parrafo').innerHTML = 'Reemplazando inner <br> Reemplazado' );
console.log(document.querySelector('.parrafo').textContent, "textContent");
console.log(document.querySelector('.figura').getAttribute('src'));

/* consoleLog.innerHTML; */
/*         function calcularArea3(base, altura){
            switch (tipo){
                case 'triangulo':
                    let area_triangulo = (base*altura)/2;
                    document.querySelector('.parrafo').textContent = area_triangulo;
                    break;
                case 'circulo':
                    let area_circulo = (3.1416*(base**2));
                    document.querySelector('.parrafo').textContent = area_circulo;
                case 'cuadrado':
                    let area_cuadrado = (base*base);
                    document.querySelector('.parrafo').textContent = area_cuadrado;
            }
            
    } */

