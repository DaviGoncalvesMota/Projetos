<?php
include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome =  $conn->real_escape_string ($_POST["nome"]);
    $email = $conn->real_escape_string ($_POST["email"]);
    $senha = $conn->real_escape_string ($_POST["senha"]);
    $foto = $_FILES["foto"]["name"];

    $criptografia = password_hash($senha, PASSWORD_DEFAULT);

    $pasta_destino = "fotos/";

    $caminho_imagem = $pasta_destino . $foto;

    move_uploaded_file($_FILES["foto"]["tmp_name"], $caminho_imagem);

    $select = "SELECT email FROM usuarios WHERE email = '$email'";
    $sql_query = $conn->query($select) or die("falha na execução" . $conn->error);

    $quantidade = $sql_query->num_rows;

    if ($quantidade == 1){
        header("Location: emailJaExiste.html");
    }
    else{
        $sql = "INSERT INTO usuarios (nome, email, senha, foto ) VALUES ('$nome', '$email', '$criptografia', '$caminho_imagem')";
        
        if (!isset($_SESSION)) {
            session_start();
        }
    
        if ($conn->query($sql) === TRUE) {
            $sql = "SELECT id, foto, nome, email FROM usuarios WHERE email = '$email'";
            $sql_query = $conn->query($sql) or die("falha na execução" . $conn->error);
            $usuario = $sql_query->fetch_assoc();
            $_SESSION["id"] = $usuario["id"];
            $_SESSION["foto"] = $usuario["foto"];
            $_SESSION["email"] = $usuario["email"];
            $_SESSION["nome"] = $usuario["nome"];
    
            header("Location: inicio.php");
            exit();
        } else {
            echo "erro ao adicionar usuario: " . $conn->error;
        }
    }

}
$conn->close();
?>