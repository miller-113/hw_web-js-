window.addEventListener('load', function () {

    class Timer {
        constructor() {
            this.counter = 0
            this.timer = document.querySelector('.stopwatch-display').children
            this.interval = undefined
        }

        start = (e) => {
            if ([...this.timer].every(e => e.innerHTML === '00') || !this.interval){ // локига для запуска, если несколько раз запустить интервал, потом будет попадать в очистку неправильный ид
                this.timer[0].parentElement.style.background = 'green';
                this.interval = setInterval(() => {
                    this.counter++
                    this.timer[2].innerHTML = (parseInt(this.timer[2].innerHTML) < 9) ? '0'+this.counter % 100 : this.counter % 100
                    this.timer[1].innerHTML = (parseInt(this.timer[1].innerHTML) < 10) ? '0'+Math.floor(this.counter / 100) : Math.floor(this.counter / 100)
                    this.timer[0].innerHTML = (parseInt(this.timer[0].innerHTML) < 10) ? '0'+Math.floor(this.counter / 6000) : Math.floor(this.counter / 6000)

                }, 10)
            }
            e.preventDefault()

        }
        stop = () => {
            clearInterval(this.interval)
            this.timer[0].parentElement.style.background = 'red';
            this.interval = false
        }
        reset = (e) => {
            if (!this.interval) {
                this.timer[0].parentElement.style.background = 'silver';
                [...this.timer].forEach(e => {
                    return e.innerHTML = '00'
                })
            }else {
                e.preventDefault()
            }
        }
    }

    let [start, stop, reset] = document.querySelector('.stopwatch-control').children
    let timer = new Timer()
    start.addEventListener('click', timer.start, 'once')
    stop.addEventListener('click', timer.stop)
    reset.addEventListener('click', timer.reset)
})
