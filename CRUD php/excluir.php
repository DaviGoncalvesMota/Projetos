<?php

include("conexao.php");

if($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["id"])) {
    $id = $_GET["id"];

    $sql = "DELETE FROM usuarios WHERE id=$id";

    if($conn->query($sql) === TRUE) {
        header("Location: inicio.php");
        exit();
    } else {
        echo "erro ao excluir usuarios: " . $conn->error;
    }
}

$conn->close();
?>