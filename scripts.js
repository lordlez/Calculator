const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-same')[0];
const botonBorrar = document.getElementsByName('data-detele')[0];
let resultado = document.querySelector('#result');
let operacionActual ='';
let operacionAnterior = '';
let operacion = undefined;


botonNumeros.forEach(function(e){
    e.addEventListener('click', function(){
        agregarNumero(e.innerText);
    })
});

botonOpera.forEach(function(e){
    e.addEventListener('click', function(){
        seleccionOperacion(e.innerText);
    })
});


botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonBorrar.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});


function agregarNumero(numero){
    operacionActual = operacionActual.toString() + numero.toString();
    actualizarDisplay();
}

function clear(){
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}


function actualizarDisplay(){
    resultado.value = operacionActual; 
}

function seleccionOperacion(op){
    if(operacionActual === ''){
        return;
    }else{
        operacion = op.toString();
        operacionAnterior = operacionActual;
        operacionActual = '';
    }
}

function calcular(){
    let calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)){
        return;
    }
    switch(operacion){
        case '+': calculo = anterior + actual;
                  break;
        case '-': calculo = anterior - actual;
                break;
        case 'X': calculo = anterior * actual;
                  break;
        case '/': calculo = anterior / actual;
                  break;
        default: return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

