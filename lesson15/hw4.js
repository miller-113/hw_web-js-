window.addEventListener('load', function () {

    let spanCreated = false
    const input = document.querySelector('input')

    input.addEventListener('focusin', function () {
        this.style.border = '2px solid green'
        this.style.outline = '0'
    })

    input.addEventListener('input', function () {
        // if (this.value.contains)
        this.value = this.value.replace(/[^0-9\+\-\.]/g, '')
    })

    input.addEventListener('focusout', function () {
        if (parseInt(this.value) < 0){
            this.after(helpText2)
            // this.outerHTML += '<br>Please enter correct price'
            this.style.border = '2px solid red'
            setTimeout(function (){
                helpText2.remove()
            }, 4000)
        }else {
            this.style.border = '2px solid black'
            this.insertAdjacentElement('beforebegin', spanHelpText)
        }
    })

    let helpText2 = document.createElement('span')
    helpText2.innerHTML = '<br>Please enter correct price'
    helpText2.style.color = 'rgb(2 1 1 / .4)'

    let spanClose = document.createElement('span')
    spanClose.innerHTML = 'X<br>'
    spanClose.classList = 'close'
    spanClose.onclick = closeClick.bind(this)

    let spanHelpText = document.createElement('span', document.createElement('hr'))
    spanHelpText.innerHTML = 'Кнопка з хрестиком'
    spanHelpText.id = 'help-text'

    spanHelpText.append(spanClose)

    function closeClick(e){
        if (e.target.parentElement === spanHelpText){
            spanHelpText.remove()
        }

    }
})