<?php

$host = "localhost";
$usuario = "root";
$senha = "usbw";
$banco = "projeto";

$conn = new mysqli($host, $usuario, $senha, $banco);

if($conn->connect_error) {
    die("conexao falhou: " . $conn->connect_error);
}


?>