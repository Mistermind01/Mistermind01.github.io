"use strict";
// Создание обьектов
/*
var obj = new Object();
var obj = {};
*/
//alert(typeof obj);

//Добавления свойств
/*
obj.test = 5;
obj['test test'] = 15;
*/

//Квадратные скобки используются в основном, когда название свойства находится в переменной:
/*
var name = 'test';
obj[name] = 5;
*/

//Доступ к свойствам
//alert(obj.test);
//alert(obj['test test']);

// Если  нет такова свойства то результат будет то результат будет
// 'undefined'
//alert(obj.noSuchKey); // => 'undefined'

//Удаляет свойство оператор delete:
//delete obj.test;
//alert("delete" + ob.test);

//Расширенное создание
/*
var obj = {
    test: 5,
    bla: true
};
*/

//Добавление метода
/*
var rabbit = {};
    rabbit.run = function(n) {
        //alert("Пробежал " + n + " метров!");
};
rabbit.run(5);
rabbit.run(7);

*/

//Создадим два любых объекта:
/*
var vasya = {
    name: "Василий"
};
 var dima = {
    name: "Дмитрий"
};
//Определим никак не связанную с ними функцию say:
var say = function() {
    alert("Привет, я " + this.name)
};

//Присвоим функцию свойству sayHi для обоих объектов:
vasya.sayHi = say;
dima.sayHi = say;

//И теперь тестовый запуск:
vasya.sayHi();    // =>  "Привет, я Василий"

dima.sayHi();    // => "Привет, я Дмитрий"

// или так вызов через ассоциацию(индекс)
dima['sayHi']();
*/

//Доступ к объекту из метода
/*
function this1() {

    //Создание двух обьектов
    var vasya = {
        name:'Вася'
    };

    var petya = {
        name:'Петя'
    };

    var sayName  = function() {
 //       alert("Я - " + (this.name ? this.name : 'безымянный') ); //Тернарный оператор и доступ к обьекту через this
    };

    vasya.sayName = sayName;

    // один и тот же метод в двух объектах
    petya.sayName = vasya.sayName;

    // тут - this будет petya
    petya.sayName();  // Я - Петя

    // тут - this будет vasya
    vasya.sayName();  // Я - Вася

    // а тут - вызывается метод глобального объекта window, у которого нет имени
    sayName(); // Я - безымянный
}

this1();
*/
/*----------------------------------------------------------------------*/

//Для перебора всех свойств объекта используется специальный вид конструкции for, for..in:
/*
var o = {
    a:5,
    b:true
};

for (var key in o) {
    alert('Ключь ' + key + ' : ' + ' Значение ' + o[key]);
}
*/
//---------------------------------------------------------------------------------------------------------------------
// Для доступа к текущему объекту из метода используется ключевое слово this.
/*
var user = {
    name: 'Василий',

/!*
    sayHi: function() {
        alert( this.name );
    }
*!/
    sayHi: function() {
        alert( user.name );
    }
};

user.sayHi(); // sayHi в контексте user
*/
//--------------------------------------------------------------------------------------------------------------------
/*var user = {
 name: 'Василий',

 sayHi: function() {
 alert( user.name ); // приведёт к ошибке
 }
 };

 var admin = user;
 user = null;

 admin.sayHi(); // упс! внутри sayHi обращение по старому имени, ошибка!*/
//--------------------------------------------------------------------------------------------------------------------
/* Через this метод может не только обратиться к любому свойству объекта,
         но и передать куда-то ссылку на сам объект целиком:
 */

 /*var user = {
     name: 'Василий',
     sayHi: function() {
     showName(this); // передать текущий объект в showName
    }
 };

 function showName(namedObj) {
    alert( namedObj.name );
 }

 user.sayHi(); // Василий*/
//--------------------------------------------------------------------------------------------------------------------
//Эта функция ещё не знает, каким будет this. Это выяснится при выполнении программы.


/*
 function sayHi() {
    alert( this.firstName );
 }

var user1 = { firstName: "Вася" };
var admin = { firstName: "Админ" };


user1.userFunc = sayHi;
admin.adminFunc = sayHi;

// this равен объекту перед точкой:
user1.userFunc(); // Вася
admin.adminFunc(); // Админ
admin['adminFunc'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)

*/
/* Значение this при вызове без контекста */
/*
function func() {
    alert( this ); /!* выведет [object Window] или [object global] в старом стандарте,
                       при использование "use strict" выведет undefined. *!/
}
*/

//func();

/* Создайте объект calculator с тремя методами:

 read() запрашивает prompt два значения и сохраняет их как свойства объекта
 sum() возвращает сумму этих двух значений
 mul() возвращает произведение этих двух значений
 */

/*
var calculator = {
    /!*...ваш код...*!/
};

calculator.read(); // вызов +prompt()
alert( calculator.sum() );
alert( calculator.mul() );
*/


/*
var ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().up().down().showStep();// ?
*/


/*
var calculator = {
    sum: function() {
        return this.a + this.b;
    },

    mul: function() {
        return this.a * this.b;
    },

    read: function() {
        this.a = +prompt('Первое число: ', 0);
        this.b = +prompt('Второе число: ', 0);
    }
};

calculator.read();
alert("Сумма: " + calculator.sum() );
alert("Произведение: " + calculator.mul() );
*/


/*
var obj = {
    foo: 15
    //bar: this.foo
};
obj.bar = obj.foo;
alert(obj.bar); //?
*/
/*--------------------------------------------------------------------------------------------------------------------*/

// Конструктор становится любая функция, вызванная через new.
// Обычный синтаксис {...} позволяет создать один объект. Но зачастую нужно создать много однотипных объектов.
function Animal(name) {
    // this = {}; // То что делает интерпритатор
    this.name = name;
    this.canWalk = true;
    // return this; // То что делает интерпритатор
}

var animal = new Animal("ёжик");
/*В результате вызова new Animal("ёжик");
                    получаем такой объект:
 Детальнее – функция, запущенная через new, делает следующее:
 1. Создаётся новый пустой объект.
 2. Ключевое слово this получает ссылку на этот объект.
 3. Функция выполняется. Как правило,
            она модифицирует this, добавляет методы,
                                    свойства.
 4. Возвращается this.

 animal = {
 name: "ёжик",
 canWalk: true
 };

 Теперь многократными вызовами new Animal с разными параметрами мы можем создать столько объектов, сколько нужно.
 Поэтому такую функцию и называют конструктором – она предназначена для «конструирования» объектов.
 */

//Иногда функцию-конструктор объявляют и тут же используют, вот так:
/*
var animalTwo = new function() {
    this.name = "Васька";
    this.canWalk = true;
};
*/

//Можно без скобок
/*
var animal1 = new BigAnimal; // <-- без скобок
// то же самое что
var animal2 = new BigAnimal();
*/

//Создание методов в конструкторе
/*
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "Моё имя: " + this.name );
    };
}

var ivan = new User("Иван");
var Nikita = new User("Никита");
Nikita.sayHi();
ivan.sayHi(); // Моё имя: Иван
*/
// Как мы это делали раньше
/*
 ivan = {
 name: "Иван",
 sayHi: функция
 }
 */

//Локальные переменные
/*
function User(firstName, lastName) {
    // вспомогательная переменная
    var hi = "Привет";

    //  вспомогательная вложенная функция
    function getFullName() {
        return firstName + " " + lastName;
    }

    this.sayHi = function() {
        alert( hi + ", " + getFullName() ); // использование
    };
}

var vasya = new User("Вася", "Петров");
vasya.sayHi(); // Привет, Вася Петров
*/

function Calculator() {

    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](+a, +b);
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});

var result = calc.calculate("9 / 3");
alert( result ); // 6



















//Создать Calculator при помощи конструктора
/*
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
 Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
 Метод sum() возвращает сумму запомненных свойств.
 Метод mul() возвращает произведение запомненных свойств.
 */
// Пример использования:
/*
var calculator = new Calculator();
calculator.read();

alert( "Сумма = " + calculator.sum() );
alert( "Произведение = " + calculator.mul() );
*/






















// Решение1.
/*
function Calculator() {

    this.read = function() {
        this.a = +prompt('First number:', 0);
        this.b = +prompt('Second number:', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма = " + calculator.sum() );
alert( "Произведение = " + calculator.mul() );
*/













