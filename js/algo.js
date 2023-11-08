function calc_place() {
    var inp = document.getElementById('place')
    var place = inp.valueAsNumber

    var result = 'Некорректное значение'
    if (place > 36 & place <= 54) {
        if (place % 2 == 0) result = 'Боковое верхнее место'
        else result = 'Боковое нижнее место'
    } else if (place > 0 & place <= 36){
        if (place % 2 == 0) result = 'Купе верхнее место'
        else result = 'Купе нижнее место'
    }

    var span = document.getElementById('result')
    span.innerText = result
    var hidden = document.getElementById('hidden_result')
    hidden.value = result
}

var button = document.getElementById('calc')
button.addEventListener('click', calc_place)