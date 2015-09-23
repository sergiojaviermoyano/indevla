<?php
require 'config.php';

$insert = R::dispense('newsletter');
$insert->email = $_POST['mail'];
$id = R::store($insert);

echo json_encode(1);
?>