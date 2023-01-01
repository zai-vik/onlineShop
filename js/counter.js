//Находим кнопку минус
const minus = document.querySelector('.minus');
//Находим кнопку плюс
const plus = document.querySelector('.plus');

//Находим счётчик
let counter = document.querySelector('.counter-value');

const price = document.querySelector('.price');

const pricer = document.querySelector('.pricer');

//Добавляем обработчик клика к кнопке плюс
plus.addEventListener('click', function() {
    counter.value = ++counter.value;
    //Вписать в price значение счётчика умноженное на pricer
    price.innerText = counter.value * pricer.innerText;
})


    

//Добавляем обработчик клика к кнопке минус
minus.addEventListener('click', function () {
    //Проверяем, чтобы счётчик не был равен нулю
    if (counter.value > 1) {
        counter.value = --counter.value;
        //Вписать в price значение счётчика умноженное на pricer
        price.innerText = counter.value * pricer.innerText;
    } else {

    }
})