






























































//События - это сигнал от брузера что-то произошло.
/*События мыши:

 click – происходит, когда кликнули на элемент левой кнопкой мыши
 contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
 mouseover – возникает, когда на элемент наводится мышь
 mousedown и mouseup – когда кнопку мыши нажали или отжали
 mousemove – при движении мыши
 */

/*События на элементах управления:

 submit – посетитель отправил форму <form>
 focus – посетитель фокусируется на элементе, например нажимает на <input>
 */

/*Клавиатурные события:

 keydown – когда посетитель нажимает клавишу
 keyup – когда посетитель отпускает клавишу
 */

/*События документа:

 DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.
 */

/*События CSS:

 transitionend – когда CSS-анимация завершена.
 Также есть и много других событий.
 */

/*
element.addEventListener(event, handler[, phase]);
 event    Имя события, например click
 handler  Ссылка на функцию, которую надо поставить обработчиком.
 phase    Необязательный аргумент, «фаза», на которой обработчик должен сработать.

 Удаление обработчика осуществляется вызовом removeEventListener:
 // передать те же аргументы, что были у addEventListener
 element.removeEventListener(event, handler[, phase]);
 */
function handler() {
    alert( 'Спасибо!' );
}

//input.addEventListener("click", handler);
// ....
//input.removeEventListener("click", handler);

// разные элементы интерфейса могут иметь интерес в том, чтобы их вызвали при загрузке документа
window.onload = function() {
    alert('Документ загружен!')
};

event.preventDefault ? event.preventDefault() : (event.returnValue=false);
















