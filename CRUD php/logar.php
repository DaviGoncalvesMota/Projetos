<?php

include("conexao.php");

if (isset($_POST["email"]) || isset($_POST["senha"])) {
    if (strlen($_POST["email"]) == 0) {
       header("Location: Erro.html");
    } else if (strlen($_POST["senha"]) == 0) {
        header("Location: Erro.html");
    } else {
        $email = $conn->real_escape_string($_POST["email"]);
        $senha = $conn->real_escape_string($_POST["senha"]);
        
        $sql_code = "SELECT * FROM usuarios WHERE email = '$email'";
        $sql_query = $conn->query($sql_code) or die("falha na execução" . $conn->error);

        $quantidade = $sql_query->num_rows;

        if ($quantidade == 1) {
            $usuario = $sql_query->fetch_assoc();
            if(password_verify($senha, $usuario["senha"])) {
                if (!isset($_SESSION)) {
                    session_start();
                }
    
                $_SESSION['id'] = $usuario["id"];
                $_SESSION["foto"] = $usuario["foto"];
                $_SESSION["nome"] = $usuario["nome"];
                $_SESSION["email"] = $usuario["email"];
    
                header("Location: inicio.php");
            }
            else {
                 header("Location: erro.html");
            }

            
        } else {
            header("Location: erro.html");
        }
    }
}
?>