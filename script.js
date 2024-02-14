const segundo = document.querySelector('#segundo');
const minuto = document.querySelector('#minuto');
const hora = document.querySelector('#hora');
const lembrete = document.querySelector('#lembrete');

let seg = 0;
let min = 0;
let hr = 0;
let intervalo;
let i = 0;

function aumentarSegundo(){
    seg++;

    if(seg<10){
        segundo.innerHTML = `0${seg}`
    } else {
        segundo.innerHTML = `${seg}`
    }

    if(seg === 59){
        seg = 0;
        aumentarMinuto();
    }
    
}

function aumentarMinuto(){
    min++;

    if(min<10){
        minuto.innerHTML = `0${min}`
    } else {
        minuto.innerHTML = `${min}`
    }

    if(min===60){
        min = 0;
        aumentarHora();
    }

    if(min===30 || min === 59){
        i++;

        lembrete.innerHTML = `Você estudou ${i} sessão(ões)`;
    }

}

function aumentarHora(){
    hr++;

    if(hr<10){
        hora.innerHTML = `0${hr}`;
    } else{
        hora.innerHTML = `${hr}`
    }
}

function iniciar(){
    intervalo = setInterval(()=>{
        aumentarSegundo();
    }, 1000)
}

function zerar(){
    clearInterval(intervalo);
    seg = 0;
    min = 0;
    hr = 0;
    segundo.innerHTML = `00`
    minuto.innerHTML = `00`
    hora.innerHTML = `00`
}

function pausar(){
    clearInterval(intervalo);
}




