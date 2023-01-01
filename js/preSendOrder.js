const btn_send = document.querySelector('.buy-btn');
const body_main = document.querySelector('.body-main');
const body_order = document.querySelector('.body-order');
const cl_btn_order = document.querySelector('.cl-btn-order');

const name_order = document.getElementById('name_order');
const surname_order = document.getElementById('surname_order');
const email_order = document.getElementById('email_order');
const phone_order = document.getElementById('phone_order');
const addres_order = document.getElementById('addres_order');
const price_order = document.querySelector('.price');
const price_for_buy = document.querySelector('.price_for_buy');



let value_name = document.querySelector('.value-name');
let value_surname = document.querySelector('.value-surname');
let value_email = document.querySelector('.value-email');
let value_color = document.querySelector('.value-color');
let value_phone = document.querySelector('.value-phone');
let value_addres = document.querySelector('.value-addres');
let value_counter = document.querySelector('.value-counter');
let value_price = document.querySelector('.value-price');

//Находим счётчик
let counter_order = document.querySelector('.counter-value');

const color_one = document.getElementById('one');
const color_two = document.getElementById('two');
const color_three = document.getElementById('three');
let color;

const errorOrderFill = document.querySelector('.title-error-order');

function popUpErrorOrder() {
    //Попап об ошибке полей
    const popUpErrorOrder = document.querySelector('.error-order');
    const clBtnErrorOrder = document.querySelector('.cl-btn-error-order');

    popUpErrorOrder.classList.remove('hide');

    clBtnErrorOrder.addEventListener('click', function() {
        popUpErrorOrder.classList.add('hide');
    })
}

btn_send.addEventListener('click', function () {

    if (color_one.checked) {
        color = color_one.dataset.color;
    } else if (color_two.checked) {
        color = color_two.dataset.color;
    } else if (color_three.checked) {
        color = color_three.dataset.color;
    } else{}



    if (name_order.value == "") {
        surname_order.classList.remove('error');
        email_order.classList.remove('error');
        phone_order.classList.remove('error');
        addres_order.classList.remove('error');
        popUpErrorOrder();
        name_order.classList.add('error');
        return false;
    } else {

    } 
    
    if (surname_order.value == "") {
        name_order.classList.remove('error');
        email_order.classList.remove('error');
        phone_order.classList.remove('error');
        addres_order.classList.remove('error');

        errorOrderFill.innerText = 'Введите фамилию';
        popUpErrorOrder();
        surname_order.classList.add('error');
        return false;
    } else {

    }
    
    if (email_order.value == "") {
        surname_order.classList.remove('error');
        name_order.classList.remove('error');
        phone_order.classList.remove('error');
        addres_order.classList.remove('error');

        errorOrderFill.innerText = 'Введите Email';
        popUpErrorOrder();
        email_order.classList.add('error');
        return false;
    } else if (email_order.value.search(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i) != 0){
        surname_order.classList.remove('error');
        name_order.classList.remove('error');
        phone_order.classList.remove('error');
        addres_order.classList.remove('error');

        errorOrderFill.innerText = 'Введите корректный Email';
        popUpErrorOrder();
        email_order.classList.add('error');
        return false;
    }
    
    if (phone_order.value == "") {
        surname_order.classList.remove('error');
        email_order.classList.remove('error');
        name_order.classList.remove('error');
        addres_order.classList.remove('error');

        errorOrderFill.innerText = 'Введите телефон';
        popUpErrorOrder();
        phone_order.classList.add('error');
        return false;
    } else {

    }
    
    if (addres_order.value == "") {
        surname_order.classList.remove('error');
        email_order.classList.remove('error');
        phone_order.classList.remove('error');
        name_order.classList.remove('error');

        errorOrderFill.innerText = 'Введите адрес';
        popUpErrorOrder();
        addres_order.classList.add('error');
        return false;
    } else {

    }
    
    if (color == undefined) {
        surname_order.classList.remove('error');
        name_order.classList.remove('error');
        phone_order.classList.remove('error');
        addres_order.classList.remove('error');
        email_order.classList.remove('error');
        errorOrderFill.innerText = 'Выберите цвет';
        popUpErrorOrder();
        return false;
    }

    surname_order.classList.remove('error');
    name_order.classList.remove('error');
    phone_order.classList.remove('error');
    addres_order.classList.remove('error');
    email_order.classList.remove('error');

    value_name.innerText = name_order.value;
    value_surname.innerText = surname_order.value;
    value_email.innerText = email_order.value;
    value_color.innerText = color;
    value_phone.innerText = phone_order.value;
    value_addres.innerText = addres_order.value;
    value_counter.innerText = counter_order.value;
    value_price.innerText = price_order.innerText + '₽';
    price_for_buy.setAttribute('value', price_order.innerText);


    body_main.classList.add('hider');
    body_order.classList.remove('hider');

})

cl_btn_order.addEventListener('click', function () {
    body_main.classList.remove('hider');
    body_order.classList.add('hider');
})

//let price_send = price_order.innerText;
let form_order = $('#form-order');

//Отправка формы в телеграм
$("#sendOrder").on('click', function() {

    const name_order_j = $('#name_order');
    const surname_order_j = $('#surname_order');
    const email_order_j = $('#email_order');
    const phone_order_j = $('#phone_order');
    const addres_order_j = $('#addres_order');

    const body_order_j = $('#body_order');
    const form_order_j = $('#form-Order');

    $.ajax({
        url: 'telegramOrder.php',
        type: 'POST',
        cache: false,
        data: {'name': name_order_j.val().trim(), 
                'surname': surname_order_j.val().trim(), 
                'email': email_order_j.val().trim(), 
                'phone': phone_order_j.val().trim(),
                'addres': addres_order_j.val().trim(), 
                'color': color, 
                'counter': counter_order.value, 
                'price': value_price.innerText},
        dataType: 'html',
        beforeSend: function() {
            body_order_j.addClass("sending");
        },
        success: function(data) {
            if (!data) {
                alert("Произошли ошибки на сервере, сообщение не отправлено. Попробуйте позже, специалисты решают проблему.");
            } else {
                form_order_j.trigger("reset");
            }
            body_order_j.removeClass("sending");
        }
    })
})