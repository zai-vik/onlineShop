//Создаём функцию openPopUp(открытие попапа с формой поддержки)
function openPopUp () {
    //Находим кнопку открытия попапа
    const popBtnOpen = document.querySelector('.support');
    //Находим попап
    const popUp = document.querySelector('.pop');
    //Находим кнопку закрытия попапа
    const popBtnClose = document.querySelector('.cl-btn-Support');

    //Удаляем класс hide у попапа при клике на кнопку открытия
    //чтобы его отобразить
    popBtnOpen.addEventListener('click', function () {
        popUp.classList.remove('hide');
        popUp.classList.add('_active');
    })
   
    //Добавляем класс hide к попапу при клике на кнопку закрытия
    //чтобы скрыть его
    popBtnClose.addEventListener('click', function () {
        popUp.classList.add('hide');
        popUp.classList.remove('_active')
    })
}
//Вызываем функцию openPopUp, чтобы попап начал работать
openPopUp();

/*
//Создаём функцию popUpError(попап об ошибке)
function popUpError () {
    //Находим попап ошибки
    const popUpError = document.querySelector('.popUpError');
    //Находим кнопку закрытия попапа
    const clBtnPopUpError = document.querySelector('.popUpError-clBtn-wrapper');

    //Удаляем класс hide у попапа, чтобы его отобразить
    popUpError.classList.remove('hide');

    //Добавляем обработчик события клик  к кнопке закрытия
    clBtnPopUpError.addEventListener('click', function () {
        //Добавляем класс hide, чтобы скрыть попап
        popUpError.classList.add('hide');
    })
}

// Создаём функцию popUpSucces(попап успешной отправки)
function popUpSucces () {
    //Находим попап успешной отправки
    const popUpSucces = document.querySelector('.popUpSucces');
    //Находим кнопку закрытия попапа успешной отправки
    const clBtnPopUpSucces = document.querySelector('.popUpSucces-clBtn-wrapper');

    //Удаляем класс hide у попапа, чтобы его отобразить
    popUpSucces.classList.remove('hide');

    //Добавляем обработчик события клик к кнопке закрытия
    clBtnPopUpSucces.addEventListener('click', function () {
        //Добавляем класс hide к попапу, чтобы его скрыть при нажатии
        //на кнопку закрытия
        popUpSucces.classList.add('hide');
    })
}


//Валидация и отправка формы
"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formSupport');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('sending');
            }else {
                alert('УПС ошибочка');
                form.classList.remove('sending');
            }
        } else {
            popUpError();
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } 
            else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                } 
            }

        }
        return error;
    }

    function formAddError(input) {
        input.classList.add('error');
    }

    function formRemoveError(input) {
        input.classList.remove('error');
    }
})




//Функция теста Email
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

*/

