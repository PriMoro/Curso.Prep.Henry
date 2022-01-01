// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  //return Object.entries(objeto); = una forma de hacerlo
  
  // otra forma de hacerlo

  var array = []; // va guardando el key y el valor.
  for (key in objeto)   // recorre el objeto.
  {
    array.push([key, objeto[key]]) // accedemos a la clave y al valor de la clave cuando esta en la posicion objeto[key]; 
    //aca es donde vamos a ir guardando: ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    // se escribe de esta manera ya que cada par clave.valor debe estar en un array distinto.
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (var i = 0; i < string.length; i++) {
    if (!objeto[string[i]]) { // se examina lo que está en la posición del objeto, un string, que significa ! no existe no está repetido" 
      //si no lo está, es falso, y es 0; si está se suma +1 con el valor de la variable.
      objeto[string[i]] = 0;
    }
    objeto[string[i]] += 1;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arrrayMayus = [];
  var array_minus = [];
  for (var i in s){
    if (s[i] === s[i].toUpperCase())
    {
      arrrayMayus.push(s[i]);
    }
    else {
      array_minus.push(s[i]);
    }
  }
  return arrrayMayus.join("") + array_minus.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var alreves = "";
  
  for (var i = str.length - 1; i >= 0; --i)
  {
    alreves = alreves + str[i];
  }
  return alreves.split(" ").reverse().join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var original = numero.toString().split().join();
  var dadoVuelta = original.split('').reverse().join('');

  if (original === dadoVuelta)
  {
    return "Es capicua";
  }
  else 
  {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var eliminar = cadena.split("");
  var cadenaModificada = eliminar.filter(function(el){
    return el !== "a" && el !== "b" && el !== "c"
  })
  return cadenaModificada.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var i = 0; i < arr.length; i++)
  {
    var auxiliar = arr[i];
    var l = i - 1;
    while (l >= 0 && auxiliar.length < arr[l].length)
      {
        arr[l + 1] = arr[l];
        l--;
      }
      arr[l + 1] = auxiliar;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var intersección = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var x = 0; x < arreglo2.length; x++) {
      if (arreglo1[i] === arreglo2[x]) {
        intersección.push(arreglo1[i]);
      }
    }
  }
  return intersección;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

