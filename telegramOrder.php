<?php
    /* https://api.telegram.org/bot5703582047:AAEqRy7ER5BxXyZn3MTc78KtTXMFKu6jkhE/getUpdates */

   //Получаем данные из полей формы 
   $name = $_POST['name'];
   $surname = $_POST['surname'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $addres = $_POST['addres'];
   $color = $_POST['color'];
   $counter = $_POST['counter'];
   $price = $_POST['price'];

   //Работа с телеграмм
   $token = "5703582047:AAEqRy7ER5BxXyZn3MTc78KtTXMFKu6jkhE";
   $chat_id = "-643275862";

   //Создаём массив с сообщением
   $arr = array(
    'Имя пользователя: ' => $name,
    'Фамилия пользователя: ' => $surname,
    'E-mail пользователя: ' => $email,
    'Телефон пользователя: ' => $phone,
    'Адрес отправки: ' => $addres,
    'Цвет товара: ' => $color,
    'Кол-во товара: ' => $counter,
    'Сумма заказа: ' => $price,
   );
   
   //Пробегаемся циклом по массиву
   foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
   };

   //Отпправка сообщения в телеграмм
   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
        &parse_mode=html&text={$txt}","r");
?>
    