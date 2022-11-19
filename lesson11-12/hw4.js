let photos = document.querySelectorAll('.photo')
console.log(photos)
var counter = 5
setInterval(function (){
    [...photos].forEach(e => {
        e.style.visibility = 'hidden'
    });
    [...photos][counter%5].style.visibility = 'visible';
    counter++
}, 3000)