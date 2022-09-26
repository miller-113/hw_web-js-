document.write('<h1>ДЗ 1</h1>')
document.write('<div class="wrapper">')

document.write('<div>')

for (let i = 0;i < 5; i++){
    for (let row = 0; row <= 15; row++){
    document.write('*')
    }
    document.write('<br>')
}
document.write('</div>')

// for (var i = 0; i < 10; i++) {
//     if (i === 5)
//     { continue; }       // skips the rest of the cycle
// document.write(i + ", ");       // skips 5
// }
    document.write('<br>')
    document.write('<br>')


document.write('<div>')

for (let row = 0; row <= 5; row++){
    for (let column = 0; column <= 15; column++){
        if (row !== 0 && row !== 5){
            if (column !== 0 && column !== 15){
                document.write('&nbsp;'.repeat(2));
            continue}
        }
        document.write('*')
    }
    document.write('<br>')
}
document.write('</div>')

document.write('<br>')
document.write('<br>')
document.write('<div>')

for(let i =0;i<10;i++){
    for(let j=0;j<i;j++){
        document.write('* ');
    }
    document.write('<br/>');
}
document.write('</div>')

document.write('<br>')
document.write('<br>')
document.write('<div>')

for(let i = 0; i < 10; ++i){
    for(let spase = (10 - i); spase > 0; spase--){
        document.write('&nbsp;&nbsp;')
    }
    for (let j = 0; j <= i; j++){
        document.write('&nbsp;*&nbsp;')
    }
    document.write('<br>')
}
document.write('</div>')

document.write('<br>')
document.write('<br>')
document.write('<div>')

for(let i = 0; i < 7; ++i){
    for(let spase = (7 - i); spase > 0; spase--){
        document.write('&nbsp;&nbsp;')
    }
    for (let j = 0; j <= i; j++){
        document.write('&nbsp;*&nbsp;')
    }
    document.write('<br>')
}
for(let i = 0; i <= 7; ++i){
    for(let spase = (i); spase > 0; spase--){
        document.write('&nbsp;&nbsp;')
    }
    for (let j = 7; j >= i; j--){
        document.write('&nbsp;*&nbsp;')
    }
    document.write('<br>')
}
document.write('</div>')
document.write('</div>')

document.write('<h1>ДЗ 2</h1>')

var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-рол');

styles.splice(parseInt(styles.length/2), 1, 'Класика')
document.write(styles.shift())
document.write(styles.unshift('Реп', 'Реггі'))




// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте «Рок-н-рол» до кінця.
// Замініть значення всередині на «Класика». Ваш код для пошуку значення всередині повинен працювати для масивів з будь-якою довжиною
// Видаліть перший елемент масиву та покажіть його.
// Вставте «Реп» та «Реггі» на початок масиву.