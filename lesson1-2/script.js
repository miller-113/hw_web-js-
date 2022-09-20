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
document.writeln('<pre>z = --x - y * 5 = ',--x - y * 5 , '</pre>'); // вычет от отрицательного предпрефиксного x суммы умноженной y на 5
document.writeln('<pre>y /= x + 5 % z = ',x + 5 % z, '</pre>');
document.writeln('<pre>z - x++ + y * 5 = ',z - x++ + y * 5, '</pre>');
document.writeln('<pre>x = y - x++ * z = ',y - x++ * z, '</pre>');
// var color = 'green'; // Либо hex #fafafa и т.д.
//
// // Менять цвет при клике, либо сразу после загрузки dom
// function change(identifier) {
//  identifier.style.background = color;
// }
