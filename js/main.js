function calcular() {
    var infonum = document.getElementById('text1')
    var infonum2 = document.getElementById('text2')
    var num = document.getElementById('number').value
    var calculando = document.getElementById('resultado')
    var selector = document.getElementById('selector').value
    var bin = document.getElementById('bin')
    var decimal = 255;
    var result = decimal.toString(16);
    calculando.innerHTML = parseInt(num, 2);
    var lastnum = num.charAt(num.length - 1)
    if (num == '') {
        calculando.innerHTML = ''
    }
    if (lastnum == 0 || lastnum == 1) {
        infonum2.innerHTML = 'Here is your decimal!'
        infonum.innerHTML = ''
    } else {
        calculando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (lastnum >> 1 || lastnum >> 999999) {
        infonum.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2.innerHTML = ''
    }
    if (lastnum == '') {
        infonum.innerHTML = ''
        infonum2.innerHTML = ''
    }



}