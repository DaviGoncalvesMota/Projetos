<?php

include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["id"])) {
  $id = $_GET["id"];

  $sql = "SELECT id, nome, email, senha, foto FROM usuarios WHERE id = $id";
  $resultado = $conn->query($sql);

  if ($resultado->num_rows != $id) {
    $row = $resultado->fetch_assoc();
  } else {
    echo "Usuario nao encontrado.";
    exit();
  }
} else {
  echo "ID de usuario nao fornecido.";
  exit();
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <title>Editar Usuario</title>
</head>

<body>
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">


            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">

                <div class="center-wrap">
                  <div class="section text-center">

                    <div class="form-group">


                      <h1>Editar Usuario</h1>
                      <form action="atualizar.php" method="post" enctype="multipart/form-data">

                        <div class="form-group">
                          <input type="hidden" class="form-style" name="id" value="<?php echo $row["id"]; ?>">
                          <i class="input-icon uil uil-user"></i>
                        </div>

                        <div class="form-group">
                          <input type="text" class="form-style" name="nome" value="<?php echo $row["nome"]; ?>"
                            required><br>
                          <i class="input-icon uil uil-user"></i>
                        </div>

                        <div class="form-group mt-2">
                          <input type="email" class="form-style" name="email" value="<?php echo $row["email"]; ?>"
                            required><br>
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" class="form-style" name="senha"
                            required><br>
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div class="form-group mt-2">
                          <i class="input-icon uil-camera"></i>
                          <label for='selecao-arquivo' class="form-style">Escolha sua foto</label>
                          <input type="file" name="foto" id="selecao-arquivo" value="<?php echo $row["foto"]; ?>">

                        </div>
                        <input type="submit" class="btn mb-2 mt-2" value="Atualizar">

                      </form>
                      <br>
                      <a class="btn mb-2 mt-2" href="inicio.php"> Voltar a Página Inicial </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>




</body>

</html>