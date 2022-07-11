//1.  Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.
let edad = prompt( "digite la edad de la persona", "" );
if ( edad <= 18 ) {
    document.write( "Menor de edad, no puede" );
} 
else {
    document.write( "Mayor de edad, puede conducir" );
}
//2.Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
//  «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let resultado = 0;
do {
    let numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        resultado = resultado + Number(numero);
    }   
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while ( confirm("¿Quiere introducir otro numero?") );

document.write("La suma es: "+ resultado);
//3. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
let nombreUno = prompt("Introduzca el nombre de la primera persona");
let edadUno = prompt("Introduzca la edad de la primera persona");
let nombreDos = prompt("Introduzca el nombre de la segunda persona");
let edadDos = prompt("Introduzca la edad de la segunda persona");
let nombreTres = prompt("Introduzca el nombre de la tercera persona");
let edadTres = prompt("Introduzca la edad de la tercera persona");
let nombreMayor;
if ( edadUno > edadDos ) {
    if ( edadUno > edadTres ) {
        nombreMayor = nombreUno;
    } 
    else {
        nombreMayor = nombreTres;
    }
} 
else {
    if ( edadDos > edadTres ) {
        nombreMayor = nombreDos;
    } 
    else {
        nombreMayor = nombreTres;
    }
}

document.write( "El mayor es: " + nombreMayor);
//4. Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.
let num1 = 0, num2 = 0, num3 = 0, contador = 3;
while ( contador != 0 ) {
    let aleatorio = Math.floor ( (Math.random() * 99) + 1 );
    if ( aleatorio != num1 & aleatorio != num2 & aleatorio != num3 ) {
        if ( contador == 3 ) {
            num1 = aleatorio;
        } else if ( contador == 2) {
            num2 = aleatorio;
        } else {
            num3 = aleatorio;
        }
        contador --;
    }
}
document.write("Numeros Aleatorios Generados: " + num1 + " " + num2 +" "+ num3);
//5. Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Intruduzca el texto");
document.write("La cantidad de vocales es: " + texto.match(/[aeiou]/gi).length);
//6. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la
//   cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará
//   “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará
//   desde el primer paréntesis hasta el final.
let texto = prompt("Ingrese el texto con parentesis. Ejemplo: Hola (que) tal");
let textoParentesis = "";
let inicioParentesis = texto.search(/[(]/);
let finalParentesis = texto.search(/[)]/);;
if ( inicioParentesis != -1 ) {
    if ( finalParentesis != -1 ) {
        for ( let i = inicioParentesis + 1; i < finalParentesis; i++ ) {
            textoParentesis = textoParentesis + texto.charAt(i);
        }
    }
    else {
        for ( let i = inicioParentesis + 1; i < texto.length; i++ ) {
            textoParentesis = textoParentesis + texto.charAt(i);
        }
    }
}
document.write("El texto es de los parentesis es : " + textoParentesis);
//7. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá
//   mostrar “lat euq aloh”.
let texto = prompt("Introduza un texto");
let textoAlRevez = "";
for ( let i = texto.length - 1; i >= 0; i-- ) {
    textoAlRevez = textoAlRevez + texto.charAt(i);    
}
document.write("El texto invertido es : " + textoAlRevez)
//8. Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.
let limite = prompt("introduzca el limite del 1 al 100");
let a = 1, b = 1, c = 0;
document.write("Los numeros fibonacci generados son:")
for (let i = 0; i < limite; i++) {
    document.write(b+" ");
    c = a + b;
    a = b;
    b = c;
}
//9. Realiza un juego de Piedra Papel Tijera contra el Pc.
let ppt = [ "piedra", "papel", "tijera"];
let eleccionUsuario, eleccionMaquina;
eleccionUsuario = prompt("Realice su seleccion entre piedra papel o tijera (escriba su seleccion en minusculas)");
eleccionMaquina = Math.floor( (Math.random() * 3) + 1 );
console.log(ppt.indexOf(eleccionUsuario));
if ( ppt.indexOf(eleccionUsuario) != -1 ) {
    document.write("Su seleccion fue " + eleccionUsuario + " y la PC escogio " + ppt[eleccionMaquina - 1])
    if ( eleccionUsuario === ppt[eleccionMaquina - 1]) {
      document.write(" Es un empate");
    } else if ( (eleccionUsuario === "tijera" && ppt[eleccionMaquina - 1] === "papel") || (eleccionUsuario === "piedra" && ppt[eleccionMaquina - 1] === "tijera") || (eleccionUsuario === "papel" && ppt[eleccionMaquina - 1] === "piedra")) {
      document.write(" Ganaste el juego");
    } else {
      document.write(" Perdiste el juego");
    }
} else {
    alert("Seleccion invalida");
}
//10. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva,
//    aplicará el 21 por ciento por defecto.
function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
  }
  var precio = Number(prompt("Introduce un precio"));
  var iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    var resultado = masIva(precio, iva);
  }
  else{
    var resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);
//11. Crea una función validar() para validar la entrada de datos de un formulario
//      a. Para evitar que se envíe un formulario varias veces conviene deshabilitar el botón de envío tras enviarlo
//         una vez. Escribe un script para gestionar el envío del formulario:
//      b. Deshabilita el botón "Enviar"
//      c. Cambia el mensaje que muestra el botón de "Enviar" a "Enviando…"
//      d. Cuando se haya enviado genera una página nueva indicando que se ha enviado correctamente y
//         muestra la información que se ha enviado.
function validar() {
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = "ENVIANDO";
  const win = window.open("", '_blank');
  win.focus();
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  win.document.write("La informacion que se envio fue " + "nombre: " +nombre + " apellido: " + apellido);
}
//12. Realiza un script que muestre un reloj en pantalla con fecha y hora y que se actualice cada segundo.
setInterval( function() {
    let tiempo = new Date();
    document.write("AÑO: " + tiempo.getFullYear());
    document.write(" MES: " + tiempo.getMonth() + 1);
    document.write(" DIA: " + tiempo.getDate());
    document.write(" HORA: " + tiempo.getHours());
    document.write(" MINUTO: " + tiempo.getMinutes());
    document.write(" SEGUNDO: " + tiempo.getSeconds());
    document.close();
}, 1000);
//13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.
function  diferenciaAnio ( year ) {
    let tiempoActual = new Date();
    let anioActual = tiempoActual.getFullYear();
    if ( year < anioActual && year >= 0 ) {
        return anioActual - year;
    } else {
        document.write( "Año introducido mayor al year actual o menor al year cero" );
    }
}

let resultado = diferenciaAnio ( prompt("Introduzca el año : "));
if( resultado != null ) {
    document.write("La diferencia entre el año introducido y el año actual es : " + resultado);
}
//14. Programa una función que dada una cadena de texto cuente el numero de vocales y consonantes.
function vocalesConsonatnes(texto) {
    let cantv = texto.match(/[aeiou]/gi).length;
    let cantc = texto.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    document.write("Existen " + cantv + " vocales y " + cantc + " consonantes");
  }
vocalesConsonatnes(prompt("Ingrese un texto"));
//15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’.
function validarNombre (texto) {
    
    for (let i = 1; i < texto.length; i++) {
        if (  texto.charCodeAt(i) < 65 || (texto.charCodeAt(i) > 90 && texto.charCodeAt(i) < 96) && texto.charCodeAt(i) > 122  ) {
            return false
        }
    }
    
    return true;
}
if (validarNombre ( prompt("Introduza un nombre") ) ) {
    document.write("verdadero")
}
else {
    document.write("falso")
}
//16. Programa una función que dado un arreglo de elementos, elimine los duplicados:
//    entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]).
function noRepetidos ( array ) {
    let vector = [];
    for (let i = array.length - 1 ; i >= 0; i--) {
        let contador  = 0;
        for (let j = i ; j >= 0; j--) {
            if ( array[i] === array[j] ) {
                contador ++;
            }
        }
        if ( contador == 1) {
            vector.push( array[i] );
        }
    }
    return vector;
}

    
let vector = [ 5, 25, 10, 's', 5, 'a', 'a'];  
let vectorresult = noRepetidos ( vector );
let ultimovec = [];
for (let index = vectorresult.length - 1; index >= 0 ; index--) {
    ultimovec.push(vectorresult[index]);
}
document.write("vector sin datos repetidos: " + ultimovec);
//17. Programa una función que dado un array de números devuelva un objeto con dos arreglos el primero con los
//    números pares y en el segundo con los números impares.
function paresImpares ( array ) {
    let object = {
        pares : [],
        impares : []
    };
    for (let i = 0; i < array.length; i++) {
        if ( array[i] % 2 == 0 ){
            object.pares.push( array[i] );
        } else {
            object.impares.push( array[i] );
        }
        
    }
    return object;
}

    
let vector = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  
let object = paresImpares ( vector );
document.write("vector de pares del objeto: " + object.pares + " vector de impares del objeto: " + object.impares);
//18. Ayuda al Elfo a listar los regalos.
const carta = 'bici coche balon _playstation bici  coche   peluche';

function listGifts(letter) {
  const arrCarta = letter.split(" ");
  return arrCarta.filter((regalo) => {
    let value = regalo.startsWith("_")
    if (value !== true && regalo !=="") return regalo !== value
  })
  .reduce((contador, regalo) => {
    contador[regalo] = (contador[regalo] || 0) + 1;
    return contador
  }, {});
}

const regalos = listGifts(carta)
console.log(regalos)
//19. Buscando en el almacen.
function iterate(obj) {
  let res = [];
  for (let property in obj) {
    const child = obj[property];
    if (typeof child === 'object') {
      res = [...res, ...iterate(child)]
    }
    res.push(child);
  }
  return res;
}

function contains(store, product) {
  return iterate(store).some((item) => item === product)
}


const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(almacen, 'camiseta'));
console.log(contains(otroAlmacen, 'gameboy'));
//20. En busca del reno perdido.
function missingReindeer(ids) {
  let idsOrdenados = ids;
  for ( let i = 0 ; i < idsOrdenados.length; i++ ) {
      for ( let j = i+1; j < idsOrdenados.length; j++ ) {
        if( idsOrdenados[i] > idsOrdenados[j] ){
          let aux = idsOrdenados[i];
          idsOrdenados[i] = idsOrdenados[j];
          idsOrdenados[j] = aux;
        }
      }
  }
  let k, salida;
  for ( k = 0 ; k < idsOrdenados.length - 1; k++ ){
    if ( (idsOrdenados[k + 1] - idsOrdenados[k]) != 1 ) {
      salida = idsOrdenados[k] + 1;
      break;
    }
  }
  if ( k == idsOrdenados.length - 1 ) {
    salida = idsOrdenados.length;
  }
  return salida;
}

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)