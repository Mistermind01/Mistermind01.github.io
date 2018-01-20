//"use strict";

// fix this
/*
var number = 10;
//alert(number);

var hello = "Hello";
//alert(hello);


var $ = 1; // объявили переменную с именем '$'
var _ = 2; // переменная с именем '_'
//alert( $ + _ ); // 3

var a1; // начало не может быть цифрой

var my_name; // дефис '-' не является разрешенным символом

//Константы
var COLOR_RED = "#F00";
var COLOR_GREEN = "#0F0";
var COLOR_BLUE = "#00F";
var COLOR_ORANGE = "#FF7F00";

var color = COLOR_ORANGE;
//alert( color ); // #FF7F00

*/
/*
var boolean = true;// false

if(boolean){
    alert("Boolean is true");

}else {
    alert("Boolean is false");
}
*/



/*
var years = prompt('Сколько вам лет?');
alert('Вам ' + years + ' лет!');
*/

//var firstNumber = parseInt(prompt('Введите первое число')) - 20;
//var secondNumber = +prompt('Введите второе число');
//alert(firstNumber + secondNumber);
/*
var passwordDb = "Cat";
var password = prompt("Введите пароль");
if (password == passwordDb){
    alert("True");
}else {
    alert("False");
}
*/

/*
var parseIntFirst = parseInt(prompt('Введите первое число'), 10);
var parseIntSecond = parseInt(prompt('Введите второе число'), 10);
alert(parseIntFirst + parseIntSecond);
*/
/*
alert("Hello World!!!");

var message;

message = "Hello";

alert(message);

var boolean = true;// false

if(boolean){
    alert("Boolean is true");
}else {
    alert("Boolean is false");
}
*/


//---------------------------------------------------------------------------------------------------------------------------------------------------------


/* обычный синтаксис */
var array = [ elem0, elem1, elem2];
var empty = [];
/* Синтаксис с new Array() */
//var array = new Array( elem0, elem1, elem2, ...);
//var empty = new Array();
/* Редкий синтаксис: аргумент new Array - одно число.
 При этом создается массив заданной длины,
 все значения в котором undefined */
//var array = new Array(10);

/*arr[arr.length] = 5  *//* или arr.push(5) */
/* Многомерный массив */

//alert(matrix[1][1]);  // 5

/*
var arr = [];
arr[1000] = true;

alert(arr.length); // 1001
*/

/*
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
*/

/*
for(var j = 0; j < arr.length; j++) {

    for(var n = 0; n < arr.length; n++) {

        if (n == arr.length - 1)
            document.write(arr[j][n]);
        else
            document.write(arr[j][n] + ", ");
    }
    document.write("<br>");
}
*/

// Обьекты как ассоциотивные массивы

// Два синтаксиса создания пустого массива
/*
var obj = new Object();
var obj = {};// Пустые скобки (основной синтаксис)

// Операции с обьектами
var person = {}; // пока пустой

//Основные операции с обьектами - это создание, получение и удаление свойств
person.name = 'Вася';
person.age = 25; // Еще одно свойсво
//alert(person.name + ': ' + person.age);

// Удаление осуществляется оператором delete
delete person.age;
//alert(person.name + ": " + person.age);
// Проверка на наличие свойсва с определенным ключем
if("name" in person){
*/
  //alert("Свойсво name существует");
/*
}

var vasya = {};
//alert(vasya.bla_bla); // undefined нет свойства с ключем bla_bla

// дело в том что JS можно обратится к любому свойству даже если оно не существует, ошибки не будет
//alert(person.bla_bla === undefined);// true, свойства нет
//alert(person.age === undefined); // false, свойство есть

// разница между in и === undefined
var obj = {};
obj.test = undefined;

//alert(obj.test === undefined); // true
//alert(obj.bla === undefined); // true

// но оператор in гарантирует правельный результат
//alert("test" in obj);// true
//alert("blabla" in obj) // false

//Альтернативный синтаксис
person['age'] = 25; // Тоже что и person.age = 25;

//Записи идентичны, но [] позволяют использовать в качестве имени свойства любую строку
person['любимый напиток'] = 'Виски';
//person.любимый напиток = 'Виски';// ??? Error

//Доступ к свойству через переменную
var key = 'age';
//alert(person[key]); // Выведет person['age']

//Обьявление со свойствами

var menuSetup = {
    width: 300,
    height: 200,
    title: 'Menu'
};
// то же самое что:
var menuSetup = {};
menuSetup.width = 300;
menuSetup.height = 200;
menuSetup.title = 'Menu';

// В качестве значения можно тут же указать и другой обьект
var user = {
    name: "Вася",
    age: 25,
    size: {
        top: 90,
        middle: 60,
        bottom: 90
    }
};

//alert(user.name);
//alert(user.size.top);

*/









var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var j = array.length - 1;
/*
for(var i = 0 ; i < array.length / 2; i++, j--){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
*/

var arrayLength = array.length;
for(var i = 0 ; i < arrayLength; i++, j--){
    //реверс массива выполняется до центра
    if(i <= arrayLength / 2) {
        var temp = array[i];
        array[i] = array[(arrayLength - 1) - i];
        array[(arrayLength - 1) - i] = temp;
    }
    //  Ввывод массива на экран
    if(i == arrayLength - 1) {
        document.write(array[i].toString());
    }else {
        document.write(array[i].toString() + ", ");
    }
}

//document.write(array.toString());




var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
//alert(sum);







// forEach
var arr = ["Яблоко", "Груша", "Апельсин"];
arr.forEach(function (item, i, arr) {
    //alert(i + ": " + item + " (массив:" + arr + ")");
});

//Filter
var positiveArr = array.filter(function (number) {
    return number > 0;
});

//Map
var names = ["Html", "Css", "JavaScript"];
var nameLenght = names.map(function (name) {
    return name.length;
});
//Получили массив с длинами
//alert(nameLenght);// 4, 3, 10

//Every/some
function isPositive(number) {
    return number > 0;
}

//alert(array.every(isPositive)); //false, не все положительные
//alert(array.some(isPositive)); //true, есть хоть одно положительное

//reduce/reduseRight
var result = array.reduce(function (sum, current) {
    return sum + current;
}, 0);
//alert(result);









/*
 push
 shift
 join
 concat
 pop
 unshift
 slice
 reverse
 sort
 splice
 */

//var array = [ "one", "two" ]
// добавить элементы "three", "four"
//var pushed = array.push("three", "four")
// теперь array = [ "one", "two", "three", "four" ]
// array.length = 4
// pushed = 4





