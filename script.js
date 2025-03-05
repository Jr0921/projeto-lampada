const ligar = document.getElementById('liga')
const desligar = document.getElementById('desliga')
const lampada = document.getElementById('lampada')

function ligarlampada(){
    lampada.src="Lampada-acesa.png";
}

function desligarlampada(){
    lampada.src="Lampada-apagada.png";
    
}


ligar.addEventListener('click', ligarlampada)
desligar.addEventListener('click',desligarlampada)