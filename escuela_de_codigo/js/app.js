let numero = 23;
let nombre_numero = '23';
let numero2 = 12;
//numero = '23';
let nombre = 'Mi nombre';
let boleano = true;
let boleano2 = false;
let nulo = null;
let indefinido = undefined;

//Aritméticos
/*
Explicando operadores aritméticos
+,-,*,/,**,++,--
*/
console.log("Aritméticos");
console.log(numero + numero2);
console.log("Concatenación string");
console.log(numero + nombre_numero);
console.log(numero - nombre_numero);
console.log(numero - numero2);
console.log(numero * numero2);
console.log(numero / numero2);
console.log(numero ** numero2);
console.log("Residuo");
console.log(numero % numero2);
console.log(numero++);
console.log(numero);
console.log(--numero);
console.log("------------------ \n")
//Lógicos
// and, or, not
console.log("Lógicos");
console.log(boleano && boleano2);
console.log(boleano || boleano2);
console.log(!boleano);

//Relaciones o de comparación
// mayor que, menor que, igual que, diferente que, mayor o igual que, menor o igual que
console.log("Relacionales");
console.log(numero > numero2);
console.log(numero < numero2);
console.log(numero != numero2);
console.log(numero <= numero2);
console.log(numero >= numero2);
numero = 23;
nombre_numero = '23';
console.log(numero == nombre_numero);
console.log(numero === numero2);

console.log("Cortocircuito");
//00000010 = 2
//00000111 = 7    ----> 7
// ----> 00000010 ---> 2
console.log('demostrando cortocircuito', 2&7);
console.log(''&23);

//1. Asignación 
//2. Paréntesis
//3. Atirméticos y cortocircuito
//4. Relacionales
//5. Lógicos

let condicion = false;
let falso_verdad = condicion == false ? 'Es falso' : 'Es verdadero';
console.log(falso_verdad);

let arreglo = [1,2,3,4,5,6,7,8,9,10];
//             0 1 2 3 4 5 6 7 8 9
arreglo[10] = 11;
console.log(arreglo[10]);
let arreglo1 =[1,2];
console.log(arreglo1[1]);

console.log(typeof arreglo);

let celular ={
    tamanio : 6,
    color : 'azul',
    camara : false
}
console.log(celular.camara);
console.log(celular['camara']);

let variable1;
variable = 23;
let variable2 = 23;
var variable3 = 34;
console.log(variable3);

/* Diferencia entre let y var */

var variable_var = 5; //declaración
{
    var variable_var = 7; //declaración
    console.log(variable_var);
}
console.log(variable_var);

let variable_let = 5; //declaración
{
    let variable_let = 7; //declaración
    console.log(variable_let);
}
console.log(variable_let);

const pi = 3.1416;
console.log(pi);

/* Estructuras de control */
// Condicionales (if, if-else, else-if, if anidados, switch)
let num = 7;
if(num>0){ //Las condiciones abordan relacionales, lógicos, funciones que retornan boolean
    console.log(`Tu numero ${num} es positivo`);
}else{
    if(num==0){
        console.log(`Tu numero ${num} es neutro`);
    } else{
        console.log(`Tu numero ${num} es negativo`);
    }
}

if(num ==7){
    num++;
    if(num ==8){
        num++;
        console.log(num);
    }
}

//selección múltiple
let calificacion = 2;
switch(calificacion){
    case 7:
        console.log('Aprobaste');
        break;
    case 5:
        console.log('Reprobaste');
        break;
    case 4:
        console.log('Reprobaste');
        break;
    case 3:
            console.log('Reprobaste');
            break;
    default:
        console.log('Agrega una calificación válida');
}

//Repetitivas
//(do-while, while, for, for of, for in)

// FOR Y SU ESTRUCTURA
// 1. valor inicial mediante una variable de control
// 2. condición
// 3. incremento o decremento
for(let i = 10; i>0 ;i--){ //Las condiciones abordan relacionales, lógicos, funciones que retornan boolean
    console.log(i);
}
let arreglo_iterar =[32,43,32,12,3,1,4,56];
//                    0 1   2  3 4 5 6  7
//console.log(arreglo_iterar.length);
console.log('------------------------');
console.log('for normal');
for(let j = 0; j<arreglo_iterar.length;j++){
    console.log(arreglo_iterar[j]);
}
//FOR OF Y SU ESTRUCTURA
// 1.variable de control para representar cada elemento dentro de un iterable
// 2. Iterable (array, objeto)
console.log('------------------------');
console.log('for of');
for(let elemen of arreglo_iterar){
    console.log(elemen);
}
//FOR IN Y SU ESTRUCTURA
//1. Variable de control para representar sus índices o claves
//2. Iterable (array, objeto)
console.log('------------------------');
console.log('FOR IN');
for(let indice in arreglo_iterar){
    console.log(arreglo_iterar[indice]);
}

let Persona ={
    edad: 20,
    nombre: 'Ricardo',
    nacionalidad: 'mexicano',
    sexo: 'M'
};

let Persona1 ={
    edad: 20,
    nombre: 'Ricardo',
    nacionalidad: 'mexicano',
    sexo: 'M'
};

for(let clave in Persona){
    console.log(Persona[clave]);
}

//WHILE
console.log('------------------------');
console.log('WHILE');
const controlador = true;
let k = 0;
while(k < 20){
    if(k==10){
        k++;
        continue;
    }
    console.log(k);
    k++;
}
let matrizMultidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrizMultidimensional[1][1]);



