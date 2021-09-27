
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
        document.getElementById('resultado').value = 'Error: no se puede dividir entre cero.'
    }
    
}







