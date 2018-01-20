/*
var a = 2 + 232;
//Группировка case
switch (a) {
    case 3:
        alert( 'Маловато' );
        break;
    case 4:
        alert( 'В точку!' );
        break;
    case 5:
        alert( 'Перебор' );
        break;
    default:
        alert( 'Я таких значений не знаю' );
        break;
}
*/

/*
var arg = prompt("Введите arg?");
switch (arg) {
    case '0':
    case '1':
        alert( 'Один или ноль' );
        break;

    case '2':
        alert( 'Два' );
        break;

    case 3:
        alert( 'Никогда не выполнится' );

    default:
        alert('Неизвестное значение: ' + arg)
}
*/


/*
var i = 0;

while (i < 3) {
    alert( i );
    i++;
}
*/

/*
var i = 3;
while (i) { // при i, равном 0,
            // значение в скобках будет false и
            // цикл остановится
    alert( i );
    i--;
}
*/


/*
var i = 0;
do {
    alert( i );
    i++;
} while (i < 3);
*/


/*
for (var i = 0; i < 3; i++) {

    alert( i );
}
*/

/*
var sum = 0;

while (true) {

    var value = +prompt("Введите число", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Сумма: ' + sum );
*/
/*
var value = +prompt("Введите число", '');

for (var i = 1; i <= value; i++) {

    if ((i % 2) == 0) alert(i);

}
*/

/*
for (var i = 0; i < 2; i++){
    for(var j = 0; j < 2; j++){
        alert("Переменная j значение: " + j);
    }
    alert("Переменная i значение: " + i);
}
*/

var array = [13, 2, 3, 4, 5];


alert(array[0]);







/*
    function changeColor(newColor) {
    var elem = document.getElementById("para1");
    elem.style.color = newColor;
}
*/

