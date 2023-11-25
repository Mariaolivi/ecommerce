let numero = document.getElementById('numero');
let bandeira = document.getElementById('bandeira')

function alteraBandeira() {
    if (numero.value.substr(0,1) == '4') {
        bandeira.innerHTML = '<img src="assets/imgs/visa.svg" style="width: 60px;">'
    }else if(numero.value.substr(0,1)== '5') {
        bandeira.innerHTML = '<img src="assets/imgs/mastercard.svg" style="width: 60px;">'
    }else {
        bandeira.innerHTML = 'Bandeira'
    }
 }