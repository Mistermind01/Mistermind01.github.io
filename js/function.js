/* Функция - специальная конструкция, с помощью которой какой-либо фрагмент кода,
   повторяющийся в программе два или более раз,
   выносится в отдельную часть кода и может использоваться сокращенно.
   Этот фрагмент получает собственное имя и, в дальнейшем, для того, чтобы воспользоваться вынесенным кодом,
   необходимо будет указать это имя. Можно так сказать, мы зададим псевдоним для этого куска кода,
   и мы будем его использовать, написав этот псевдоним.*/
/* Синтаксис создания функций*/
/*
function showMessage() {
    alert( 'Привет всем присутствующим!' );
}
//Чтобы запустить функцию ее нужно вызвать
showMessage();
//Если хотите, можете ее еще раз вызвать
showMessage();
//И еще раз
showMessage();
*/
//---------------------------------------------------------------------------------------------------------------------
 /*function a (a, b) {
     var res = a + b;
     alert (b);
}
a (1, 2);*/
 // рисует линию из звездочек длиной count
 /*function Star (count) {
    for(var i = 0; i < count; i++) {
        document.write('*');
    }
        document.write("\n<br>");

 }

 Star(3); // показ линии из трех звездочек
 Star(5); // показ линии из пяти звездочек
*/
//---------------------------------------------------------------------------------------------------------------------
/*
function vivod(num) {
    var n = parseInt(num);
    if (!isNaN(n)) alert(n);
    n = parseInt(num);
    if (n > 0 || n < 10) alert(n);
    else alert("Нет совпадений");
}
vivod("15 число");// ?
*/

 // рисует линию из символа - symb, длиной count
 /*function AnyLine(symb, count) {
         for(var i = 0; i < count; i++){
                 document.write(symb);
         }
         document.write("\n<br>");
 }

 AnyLine('++', 3); // показ линии из трех плюсов
 AnyLine('=', 5); // показ линии из пяти знаков равно
*/
//---------------------------------------------------------------------------------------------------------------------
/*
function cont(a) {
    if(a % 2 == 0) return "Четно";
    else return "Не четное";
}
alert(cont(5));
*/
// Return директива
/*
 function diapazon(num) {
     var n = parseInt(num);
     if (n > 0 && n < 10) return n;
     else return 0;
 }
 //результат выполнения функции записываем в number
 var number = diapazon("1 2");
 alert(number);
*/

// вычисляет степень (Pow) числа (Digit)
/*
function MyPow(Digit, Pow) {
    var key = 1;
    for(var i = 0; i < Pow; i++){
        key *= Digit;
    }
    return key;
}

// запись возвращаемого результата в переменную res
var res = MyPow(2, 8);
document.write("Res = " + res + "\n<br>");
*/
/* Аргументы, которые указываются при определении функции, называются формальными */
//---------------------------------------------------------------------------------------------------------------------
// Должна менять значения переменных местами
function Change (One, Two) {
    document.write("Вывод внутри функции: " + One + 
                        " " + Two + "\n<br>");// 1 2
    var temp = One;
    One = Two;
    Two = temp;
    document.write("Вывод внутри функции: " + One + 
                        " " + Two + "\n<br>");// 2 1
}
var a = 1, b = 2;
document.write("Вывод в основной программе: " + a + 
                        " " + b + "\n<br>"); // 1 2
// передача по значению
Change(a, b);
document.write("Вывод в основной программе: " + a + 
                        " " + b + "\n<br>"); // 1 2


//---------------------------------------------------------------------------------------------------------------------
// Область видимости. Глобальные и локальные переменные.
/*
var a = 5;
if (a == 5) {
    var b = 3;
}
alert(b); // ошибка! b = underfined
*/
//Глобальная переменная
/*
function f() {
    a = 2;
}
var a = 1;
f();
alert(a);
*/

/*
function f() {
    var  a = 2;
}
var a = 1;
f();
alert(a);
*/

//---------------------------------------------------------------------------------------------------------------------
/* Локальные переменные */
/*
function showMessage() {
    var message = 'Привет, я - Вася!'; // локальная переменная

    alert( message );
}

showMessage(); // 'Привет, я - Вася!'

alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри
*/
//----------------------------------------------------------------------------------------------------------------------
/* Внешние переменные */
/*
var userName = 'Вася';

function showMessage() {
    var message = 'Привет, я ' + userName;
    alert(message);
}

showMessage(); // Привет, я Вася
alert(userName);
*/
//----------------------------------------------------------------------------------------------------------------------
/* Фунции с параметрами
 Псевдомассив аргументов "arguments"
 В JavaScript любая функция может быть вызвана с произвольным
 количеством аргументов.
*/

function go(a, b) {
    alert("a = " + a + ", b = " + b);
}

go(1);     // a = 1, b = undefined
go(1, 2);   // a = 1, b = 2
go(1, 2, 3); // a = 1, b = 2, третий аргумент не вызовет ошибку

//------------------------------------------------------------------------

/*
function sayHi() {
    for (var i = 0; i < arguments.length; i++) {
        alert( "Привет, " + arguments[i] );
    }
}

sayHi("Винни", "Пятачок", "Vasiy"); // 'Привет, Винни', 'Привет, Пятачок'
var a = sayHi();
*/
//---------------------------------------------------------------------------------------------------------------------
/* Возврат значения */
/*
function calcD(a, b, c) {
    return b * b - 4 * a * c;//директива return.
}

var test = calcD(-4, 2, 1);
alert(test); // 20
*/

/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

var age = prompt('Ваш возраст?');

if (checkAge(age)) {
    alert( 'Доступ разрешен' );
} else {
    alert( 'В доступе отказано' );
}
*/


// Два способа создания Именованные (FunctionDeclaration)
/* функция sum
определена ниже
*/
/*
var a = sum(2, 2);
alert(a);
function sum(x, y) {
    return x + y
}
*/


//Анонимные (FunctionExpression)
/* будет ошибка,
 т.к sum еще не существует
 */



/*
var sum = function(x, y) {
    return x + y
};
var b = sum(2, 2);
alert(b);
*/

/*
var num = 2;
function kyb(num) {
    return num * num * num;
}
//alert(typeof kyb(num));



function min() {
    var min = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        if(min > arguments[i]){
            min = arguments[i];
        }
    }
    return min;
}
var minNumb = min(5, 4, 3, 2, 1);
alert(minNumb);
*/

/*====================================================================================================================*/
// Удаление и добавление элементов
/*
var ul = document.getElementsByTagName('ul')[0];
var hiter = ul.removeChild(ul.firstChild);
var kovaren = ul.removeChild(ul.firstChild);
ul.appendChild(kovaren);
ul.appendChild(hiter);
*/

//Поиск элемента по id
//document.getElementById('dataKeeper');

//Поиск по тегу
//document.getElementsByTagName(tag);

//Получение второго элемента списка (нумерация идет с 0)
//document.getElementsByTagName('li')[1];

//Получить всех потомков
//var div = document.getElementById('d1');
//var elems = div.getElementsByTagName('*');

//Поиск по name: getElementsByName

// Динамическое изменение содержимого элементов
/*
Для изменения содержимого элемента можно использовать 2 свойства элементов:
 innerText - текстовое содержимое элемента;
 innerHTML - содержимое элемента с HTML разметкой.
 */
//Перебор элементов списков элементов
//var li = document.getElementsByTagName('LI');
//Изменим значение первого элемента
//li[0].innerHTML = "Первый элемент списка";
























