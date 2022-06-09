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
        if (arr[i].toLowerCase() == palabra) {
            conteo++
        }
    }
    console.log("Numero de veces que se repite la palabra", conteo);
}

//Función 3
let arr = [0, null, undefined, 1, 2, 3, 4, 5, 6, 7, null, undefined, 0, false, false];
limpiar(arr);

function limpiar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == 0 || arr[i] == false || arr[i] == undefined) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log("Arreglo limpio:", arr);
}

//Funcion 4
let arr2 = [1, 4, 7, 8, 4545, 76, 85, 53, 472, 2];
valorMaxMin(arr2);

function valorMaxMin(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);

    console.log("Valor Maximo:", max);
    console.log("Valor Minimo:", min);

}

//Funcion 5
let arrMulti = [1, 2, 3, 4, 5, [3, [3, 7, [9, 10, 12, 34]]]];
flatten(arrMulti);
function flatten(arr){
    var arrM = arr.toString();
    var newArr = arrM.split(",");
    var lastArr = [];
    for(let i = 0;i<newArr.length;i++){
        lastArr.push(parseInt(newArr[i]))
    }
    console.log("Resultado: \n",lastArr);
}