//Funcion 1
let array1 = [1, 4, 5, 6, 7];
let array2 = [5, 6, 8, 3, 122];
ordenarArray(array1, array2);

function ordenarArray(array1, array2) {
    arrayJunto = array1.concat(array2);
    for (let i = 0; i < arrayJunto.length; i++) {
        for (let j = 0; j < arrayJunto.length; j++) {
            var temp = 0;
            if (arrayJunto[i] < arrayJunto[j]) {
                temp = arrayJunto[i];
                arrayJunto[i] = arrayJunto[j];
                arrayJunto[j] = temp;
            }
        }
    }

    console.log("Resultado: \n", arrayJunto);
}

//Funcion 2
let cadena = "hola Mundo Hola mundo mundo mundo";
let palabra = "mundo";

contarPalabras(cadena, palabra)

function contarPalabras(cadena, palabra) {
    var arr = cadena.split(' ');
    var conteo = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase() == palabra){
            conteo++
        }
    }
    console.log(conteo);
}