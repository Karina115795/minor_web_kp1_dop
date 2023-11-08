function to_latin() {
    var surname = document.getElementsByClassName('block4')[0]
    var name = document.getElementsByClassName('block5')[0]
    var f_name = document.getElementsByClassName('block6')[0]
    var sex = document.getElementsByClassName('block7')[0]

    surname.textContent = 'Iksanova'
    name.textContent = 'Karina'
    f_name.textContent = 'Rustamovna'
    sex.textContent = 'female'
}

function to_russian() {
    var surname = document.getElementsByClassName('block4')[0]
    var name = document.getElementsByClassName('block5')[0]
    var f_name = document.getElementsByClassName('block6')[0]
    var sex = document.getElementsByClassName('block7')[0]

    surname.textContent = 'Иксанова'
    name.textContent = 'Карина'
    f_name.textContent = 'Рустамовна'
    sex.textContent = 'жен.'
}

var buttom = document.getElementById('Latin')
buttom.addEventListener('click', to_latin)

var buttom = document.getElementById('Russian')
buttom.addEventListener('click', to_russian)

