window.addEventListener('DOMContentLoaded', function () {

    const operators = {
        '039': "img/lievstar.png",
        '050': 'img/vodafonpng.png',
        '063': 'img/lifecell.jpg',
        '066': 'img/vodafonpng.png',
        '067': "img/lievstar.png",
        '068': "img/lievstar.png",
        '073': 'img/lifecell.jpg',
        '091': 'img/intertelecom.png',
        '092': 'img/PeopleNet.png',
        '093': 'img/lifecell.jpg',
        '094': 'img/intertelecom.png',
        '095': 'img/vodafonpng.png',
        '096': "img/lievstar.png",
        '097': "img/lievstar.png",
        '098': "img/lievstar.png",
        '099': 'img/vodafonpng.png',
    }

    const btn = document.querySelector('.submit-btn')
    const operatorsKeys = Object.keys(operators)
    const form = document.querySelector('.authenticated')
    const logo = document.querySelector('#logo');
    logo.style.display = 'none';

    let select = form.querySelector('select');
    let [...inputs] = form.querySelectorAll('input') //
    inputs.push(select);


    form.addEventListener('input', checkNumber)

    function checkNumber(e) {
        if (e.target.dataset.action === 'number') {

            // checking for numbers
            e.target.value = e.target.value.replace(/[^\+0-9]/g, '')

            // Adding operators logo
            if (e.target.value.slice(0, 3) in operators) {
                logo.style.display = 'block';
                logo.src = operators[e.target.value.slice(0, 3)];
            } else if (e.target.value.slice(2, 5) in operators) {
                logo.style.display = 'block';
                logo.src = operators[e.target.value.slice(2, 5)];
            } else {
                logo.style.display = 'none';
            }
        }
    }

    btn.addEventListener('click', function (e) {
        let inputError = false

        inputs.forEach(input => {
            if (input.value === '' || input.value === 'Choose city') {
                input.parentElement.classList.replace('suc', 'err')
                inputError = true
            }
        })

        if (inputError) {
            e.preventDefault()
        }

    })

    form.addEventListener('focusin', function (e) {
        let elem = e.target.closest('input, select')
        if (elem && form.contains(elem)) {
            if (elem.parentElement.classList.contains('err')) {
                elem.parentElement.classList.replace('err', 'suc')
            }
        }
    })
})