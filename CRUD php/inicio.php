<?php

include("conexao.php");

$sql = "SELECT id, nome, email, senha, foto FROM usuarios";
$resultado = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style2.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap" rel="stylesheet">
    <title> Inicio </title>
</head>

<body>

</body>

</html>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img class="w-25" src="rdpe.PNG"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">

                </li>
            </ul>
        </div>
    </div>
</nav>



<?php




if (!isset($_SESSION)) {
    session_start();
}

?>

</li>
<li class="perfil">
    <div class="fund">

        <?php

        if ($_SESSION['id'] > 0) {
            echo "<td><div class='imagem'><img src='" . $_SESSION["foto"] . "' class='prod'></td></div>";
            echo "<td><h1 class='text1'>" . $_SESSION["nome"] . "</h1><br>";
            echo "<td><h1 class='text2'>" . $_SESSION["email"] . "</h1><br>";
            
        } else {
        }
        if ($_SESSION['id'] > 0) {
            echo "<a class='btn' href='editar.php?id=" . $_SESSION['id'] . "'> Editar Perfil</a>";
        }
        ?>


        <br>
        <a class="btn" href="adicionar.html"> Adicionar novo usuario</a>

</li>


</div>




</body>

</html>