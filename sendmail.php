<?php

$para      = 'contact@indev.com.ar';
$titulo    = 'Contact from web page: '.$_POST['subj'];
$mensaje   = $_POST['mesj'];

$cabeceras = 'From: '.$_POST['mail'].'\r\n' .
    'Reply-To: '.$_POST['mail'].'\r\n' .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);

echo json_encode(1);
//mail : $("#yourMail").val(),
//name : $('#yourName').val(),
//subj : $('#yourSubject').val(),
//mesj : $('#yourMsj').val()

?>