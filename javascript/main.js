function calculadora() {
    if ( operacion == '+' ){
        return numero_1 + numero_2;
    }
    else if ( operacion == '-' ) {
        return numero_1 - numero_2;
    }
    else if ( operacion == '*' ) {
        return numero_1 * numero_2;
    }
    else if ( operacion == '/' ) {
        if ( numero_2 != 0 )
        {
            return numero_1 / numero_2;
        }
        return 'Error: no se puede dividir entre cero.';
    }
    else{
        return 'Error: el operador seleccionado no esta dentro de las opciones.';
    }
}

//Forma número 1

function suma() {
    let num_1 = document.getElementById('numero1').value;
    let num_2 = document.getElementById('numero2').value;

    document.getElementById("resultado").value = parseInt(num_1) + parseInt(num_2);
}

function resta() {
    let num_1 = document.getElementById('numero1').value;
    let num_2 = document.getElementById('numero2').value;

    document.getElementById("resultado").value = num_1 - num_2;
}

function multiplicacion() {
    let num_1 = document.getElementById('numero1').value;
    let num_2 = document.getElementById('numero2').value;

    document.getElementById("resultado").value = num_1 * num_2;
}

function division() {

    let num_1 = document.getElementById('numero1').value;
    let num_2 = document.getElementById('numero2').value;

    if ( num_2 != '0' )
    {
        document.getElementById('resultado').value = num_1 / num_2;
    }else{
        document.getElementById('resultado').value = 'Error: no se puede dividir entre cero.';
    }
}


/* let numero_1 = parseInt(prompt('Digite el primer numero: '));
let numero_2 = parseInt(prompt('Digite el segundo número: '));

let operacion = prompt('Digite el simbolo de la operación que desea realizar (+,-,*,/): ');

alert(calculadora(numero_1, numero_2)); */






