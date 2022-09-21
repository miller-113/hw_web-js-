document.write('<div class="wrapper">');
document.write('<div class="header"><div>','header', '</div></div>');
document.write('<div class="nav"><div>','nav', '</div></div>');
document.write('<div class="section"><div>','section', '</div></div>');
document.write('<div class="footer"><div>','footer', '</div></div>');
document.write('</div>');

// var name = prompt('Your name', 'name');
// var surname = prompt('Your surname', 'name');
// var age = prompt('Your age', 'name');
var x = 6;
var y = 14;
var z = 4;
const sum = [x, z, y].reduce((a, b) => a + b)
console.log(sum)
document.writeln('<pre>x += y - x++ * z = ',y - x++ * z, '</pre>'); // сокращенная форма добавления x = x + y, c последующим вычетом x и умножением на z(постпрефикс не учитывается, так как x добавляется на след операцию)
document.writeln('<pre>z = --x - y * 5 = ',--x - y * 5 , '</pre>'); // вычет от отрицательного предпрефиксного x(+1пост.преф.с прошлой-1=0) суммы умноженной y на 5
document.writeln('<pre>y /= x + 5 % z = ',x + 5 % z, '</pre>'); // сокращенный вид деления, получения остатка от деления с 5 добавления этого к x и это делим на y
document.writeln('<pre>z - x++ + y * 5 = ',z - x++ + y * 5, '</pre>'); // отнимаем от z x(с постпрефиксом который добавляет на 1, на след операцию) и добавляем это к результату y * 5
document.writeln('<pre>x = y - x++ * z = ',y - x++ * z, '</pre>'); // отнимаем от y x(который в прошлой операции получил +1 и сейчас получит 1 на след) умноженный на z(естественно приоритет стоит у умножения.


// var color = 'green'; // Либо hex #fafafa и т.д.
//
// // Менять цвет при клике, либо сразу после загрузки dom
// function change(identifier) {
//  identifier.style.background = color;
// }
var drawCats = function (howManyTimes) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " =^.^=");
 }
};
drawCats(10);
var input = "javascript is awesome";
var output = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a'){
        (output += '4')}
    else if (input[i] === 'e'){
        (output += '3')}
    else if (input[i] === 'i'){
        (output += '1')}
    else if (input[i] === 'o'){
        (output += '0')}
    else {(output += input[i])}
}
console.log(output)

var x = 6
y = 14
z = 4;

console.log('x =', x, 'y =', y, 'z =', z);
console.log('');

var x = 6
y = 14
z = 4;
console.log('x =', x, 'y =', y, 'z =', z);
console.log('x += y - x++ * z');
x += y - x++ * z; // прибавляем к x + y - (x * z)
console.log('x =', x, 'y =', y, 'z =', z);
console.log('');

var x = 6
y = 14
z = 4;
console.log('x =', x, 'y =', y, 'z =', z);
console.log('z = --x - y * 5');
z = --x - y * 5; // z = x-1 - (y * 5)
console.log('x =', x, 'y =', y, 'z =', z);
console.log('');

var x = 6
y = 14
z = 4;
console.log('y /= x + 5 % z');
y /= x + 5 % z; // y = y / (x + 5 % z)  ||||||||а почему при такой форме получается бесконечность, если x=-5 и z=-75. -0.18666666666666668, в пайтоне это нормально обрабатывает =)
console.log('x =', x, 'y =', y, 'z =', z,);
console.log('');

var x = 6
y = 14
z = 4;
console.log('z - x++ + y * 5');
z - x++ + y * 5; // тут только x прибавляет 1 на след операцию
console.log('x =', x, 'y =', y, 'z =', z);
console.log('');

var x = 6
y = 14
z = 4;
console.log('x = y - x++ * z');
x = y - x++ * z; // x = y - (x * z) ||||||||||и теперь у нас 2 бесконечности)
console.log('x =', x, 'y =', y, 'z =', z);
console.log('');





