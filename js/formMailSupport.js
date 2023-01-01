$("#sendMail").on("click", function() {
    var name = $("#name");
    var email = $("#email");
    var phone = $("#phone");
    var mess = $("#mess");
    var form = $(".pop");
    var forma = $(".form-popUpSupport");

    var titlePopUpError = $(".title-popUp");
    var titlePopUpSucces = $(".title-popUp-suc");

    var pattern_email = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

    function popUpError() {
        var popUpError = $(".popUpError");
        var clBtnPopUpError = $(".popUpError-clBtn-wrapper");

        popUpError.removeClass("hide");

        clBtnPopUpError.on("click", function () {
            popUpError.addClass("hide");
        })
    }

    function popUpSucces() {
        var popUpSucces = $(".popUpSucces");
        var clBtnPopUpSucces = $(".popUpSucces-clBtn-wrapper");

        popUpSucces.removeClass("hide");

        clBtnPopUpSucces.on("click", function() {
            popUpSucces.addClass("hide");
        })
    }


  
        if(name.val().trim() == "") {
            email.removeClass('error');
            phone.removeClass('error');
            mess.removeClass('error');
            popUpError();
            titlePopUpError.text("Введите имя");
            name.addClass('error');
            return false;
        } else {

        }
        
        if(email.val().trim() == "") {
            name.removeClass('error');
            phone.removeClass('error');
            mess.removeClass('error');
            popUpError();
            titlePopUpError.text("Введите Email");
            email.addClass('error');
            return false;
        } else if (email.val().search(pattern_email) != 0) {
            name.removeClass('error');
            phone.removeClass('error');
            mess.removeClass('error');
            popUpError();
            titlePopUpError.text("Введите корректный Email");
            email.addClass('error');
            return false;
        } 
        
        if(phone.val().trim() == "") {
            name.removeClass('error');
            email.removeClass('error');
            mess.removeClass('error');
            popUpError();
            titlePopUpError.text("Введите номер телефона");
            phone.addClass('error');
            return false;
        } else {

        } 
        
        if(mess.val().trim().length < 5) {
            name.removeClass('error');
            email.removeClass('error');
            phone.removeClass('error');
            popUpError();
            titlePopUpError.text("Введите сообщение не менее 5 символов");
            mess.addClass('error');
            return false;
        } else {

        }
    
        name.removeClass('error');
        email.removeClass('error');
        phone.removeClass('error');
        mess.removeClass('error');
    

    $.ajax({
        url: 'telegramSupport.php',
        type: 'POST',
        cache: false,
        data: {'name': name.val().trim(), 'email': email.val().trim(), 'phone': phone.val().trim(), 'mess': mess.val().trim()},
        dataType: 'html',
        beforeSend: function() {
            form.addClass("sending");
        },
        success: function(data) {
            if (!data) {
                alert("Произошли ошибки на сервере, сообщение не отправлено. Попробуйте позже, специалисты решают проблему.");
            } else {
                popUpSucces();
                titlePopUpSucces.text('Сообщение успешно отправлено!');
                forma.trigger("reset");
            }
            form.removeClass("sending");
        }
    })
});