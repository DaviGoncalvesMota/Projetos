<?php

include("conexao.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $id = $_POST["id"];
    $nome =  $conn->real_escape_string ($_POST["nome"]);
    $email = $conn->real_escape_string ($_POST["email"]);
    $senha = $conn->real_escape_string ($_POST["senha"]);
    $foto = $_FILES["foto"] ["name"];

    $criptografia = password_hash($senha, PASSWORD_DEFAULT);

    $pasta_destino = "fotos/";

    $caminho_imagem = $pasta_destino . $foto;

    move_uploaded_file($_FILES["foto"] ["tmp_name"], $caminho_imagem);

     $sql = "UPDATE usuarios SET nome='$nome', email='$email', senha='$criptografia', foto='$caminho_imagem' WHERE id=$id";

     if (!isset($_SESSION)) {
        session_start();
    }

    if($conn->query($sql) === TRUE){
        $_SESSION["foto"] = $caminho_imagem;
        $_SESSION["nome"] = $nome;
        $_SESSION["email"] = $email;
        header("Location: inicio.php");
        exit();
    } else {
        echo "erro ao atualizar usuario: " . $conn->error;
    }
}

$conn->close();

?>