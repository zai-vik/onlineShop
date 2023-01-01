<?php
    /* https://api.telegram.org/bot5454670572:AAG6FdlwUEGEZe0lMCbb7Kp7PhnERZeusuI/getUpdates */

   //Получаем данные из полей формы 
   $name = $_POST['name'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $mess = $_POST['mess'];

   //Работа с телеграмм
   $token = "5454670572:AAG6FdlwUEGEZe0lMCbb7Kp7PhnERZeusuI";
   $chat_id = "-648034001";

   //Создаём массив с сообщением
   $arr = array(
    'Имя пользователя: ' => $name,
    'E-mail пользователя: ' => $email,
    'Телефон пользователя: ' => $phone,
    'Сообщение пользователя: ' => $mess,
   );
   
   //Пробегаемся циклом по массиву
   foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
   };

   //Отпправка сообщения в телеграмм
   $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}
        &parse_mode=html&text={$txt}","r");
?>
    