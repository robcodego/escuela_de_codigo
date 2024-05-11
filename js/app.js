let numero = 23;
let nombre_numero = '23';
let numero2 = 12;
//numero = '23';
let nombre = 'Mi nombre';
let boleano = true;
let booleang;
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

//WHILE CON CONTINUE
console.log('------------------------');
console.log('WHILE CON CONTINUE');
const controlador = true;
let k = 0;
while(k < 20){
    if(k==10){
        k++;
        continue;
    }
    
    console.log(k);
    k++;
    
};
// WHILE CON BREAK
console.log('------------------------');
console.log('WHILE CON BREAK');
var l = 0;
while(l < 20){
    if(l==10){
        l++;
        break;
    }
    console.log(l);
    l++;
};

// DO WHILE
console.log('------------------------');
console.log('do while');
var l = 0;
do{
    console.log(l);
    l++;
    
}while(l < 20);

//FUNCIONES
//Declaracion de una función
// PALABRA 
//RESERV. ID  (PARAMTETROS)  { INSTRUCCIONES};
function suma(numero1, numero2){
    if(numero1 == 0 && numero2 ==0){
        console.log('Ingresa números mayores a 0');
    }else{
        return numero1+numero2; // RETURN PARA DEVOLVER UN VALOR ESPECÍFICO A LA INSTANCIA (O LLAMADA) DE UNA FUNCIÓN Y SALIR DE LA FUNCIÓN
    }
};

//FUNCIONES ANÓNIMAS O FUNCIONES FLECHA
let variable_funcion = (num1, num2) => num1 + num2;
console.log(variable_funcion(3,5));

//MÉTODOS DE LOS OBJETOS
//Number, String, Boolean, Array, Objetos
let Numero = 1;
console.log(typeof Numero);
console.log(Numero.toString());

let Texto = '1.99999'; //[1,2,3,4,5]
//           0123456      0 1 2 3 4 
let Texto2 = 'Este es un texto concatenado';      
console.log(parseInt(Texto));
console.log(parseFloat(Texto));
console.log(Texto.charAt(8));
console.log(Texto.concat(Numero.toString()));
console.log(Texto.replace('1.9', '3.0'));
console.log(Texto.length);

let Arreglo = [9,5,2,12,3,9];
console.log(Arreglo.pop());
console.log(Arreglo.push(1,2,3));
console.log(Arreglo);
console.log(Arreglo.sort());
console.log(Arreglo.join(' '));

/* Vamos a guardar un registro de pacientes por nombre según su
edad. El nombre del paciente y la edad deberán ser guardado en un arreglo
 */

let pacientes = [];
let nombres =['Sebastian', 'Miguel', 'Carlos', 'Margarita', 'Roberto'];
let edad = [20,21,22,23,24];
for(let i =0;i<edad.length;i++){
    pacientes.push([edad[i],nombres[i]]);    
}
/* let pacientes2 = pacientes.concat(nombres, edad); */
console.log(pacientes);
console.log(pacientes[1][1]);

//Obtener el area del triángulo
// A = (b*h)/2
const base = 10;
const altura = 20;
const area_triangulo = (base*altura)/2;
console.log(area_triangulo);

// Función
function obtenerArea(base, altura){
    const area_triangulo = (base*altura)/2;
    return area_triangulo;
}

console.log(obtenerArea(10, 20));