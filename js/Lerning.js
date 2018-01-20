/*function moveon() {
    //Вывести модальный диалог, чтобы рполучить ответ пользователя
    var answer = confirm("Ready to move on ? ");
    //Если пользователь нажимает кнопку "OK", заставить браузер загрузить новую страницу
    if(answer) window.location = "http://google.com";
}

setTimeout(moveon, 1000);*/
/* Замена значений.
var a = 10;
var b = 20;
//alert(a + " , " + b);
a ^= b;
b ^= a;
a ^= b;
//alert(a + " , " + b);

var a = 1;
var b = 2;
document.write(a + ", " + b);
a = b + a;// a = 3
b = a - b;// b = 1
a = a - b;// a = 2
document.write("<br>" + a + ", " + b);
*/


//выводит сообщение в специальной области для отладочных сообщений внутри документа. Если документ не содержит такой области, она создается
/*
function debug(msg) {
    //Отыскать область для отладочных сообщений в документе, поиск по HTML - атрибуту id
    var log = document.getElementById("debuglog");

    //Если элемент с атребутом id="debuglog" отсутствует создать его
    if(!log){
        log = document.createElement("div"); // Создать элемент <div>
        log.id = "debuglog"; // Установить атребут id
        log.innerHTML = "<h1>Debug Log </h1>"; //Начальное содержимое
        document.body.appendChild(log); // Добавить в конец документа
    }
    // Теперь обернуть сообщение в теги <pre> и добавить в элемент log
    var pre = document.createElement("pre"); //Создать тег <pre>
    var text = document.createTextNode(msg); // Обернуть msg в текстовый узел
    pre.appendChild(text); // Добаввить текст в тег <pre>
    log.appendChild(pre); // Добавить <pre> в элемент log
}
*/

/*
var then = new Date(2017, 0, 1);// First day of first month of 2010 year
document.write(then.toDateString());
*/

//alert(eval(" 3 + 2"));


var geval = eval;

var x = "global", y = "global";

function f() {
    var x = "local";
    eval("x += ' changed';");
    return x;
}
function g() {
    var y = "local";
    geval("y += ' changed';");
    return y;
}
console.log(f(), x);
console.log(g(), y);

for(var i = 0, j = 10; i < j; i++, j--){
    document.write(i + j + "<br>");
}
var a = [1, 2, 3, 4, 5];
for(var i = 0; i < a.length; a[i++] = 0);

for(i = 0; i < a.length; i++){
    document.write(a[i] + "<br>");
}

function hypotenuse(x, y) {

    return Math.sqrt(x * x + y * y);
}
function factorial(n) {             // Рекурсивная функция

    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

alert(factorial(5));






















