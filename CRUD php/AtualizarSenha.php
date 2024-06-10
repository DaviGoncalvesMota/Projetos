<?php

include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string ($_POST["email"]);
    $senha = $conn->real_escape_string ($_POST["senha"]);
    $senhaConfirma = $conn->real_escape_string ($_POST["senhaConfirma"]);

    $criptografia = password_hash($senha, PASSWORD_DEFAULT);

    $sql = "UPDATE usuarios SET senha='$criptografia' WHERE email='$email'";
    $sel = "SELECT email FROM usuarios WHERE email = '$email'";

    $sql_query = $conn->query($sel) or die("falha na execução" . $conn->error);
    $quantidade = $sql_query->num_rows;

    if (!isset($_SESSION)) {
        session_start();
    }

    if ($conn->query($sql) === TRUE) {
        if ($quantidade > 0 && $senha == $senhaConfirma) {
            $_SESSION["senha"] = $senha;
            header("Location: adicionar.html");
        } else {
            header("Location: erro.html");
        }
        exit();

    } else {
        echo "erro ao atualizar usuario: " . $conn->error;
    }
}

$conn->close();

?>