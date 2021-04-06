<?php

use App\Auth;
require '../vendor/autoload.php';

$error = false;

if (!empty($_POST)) {
  $pdo = new PDO("sqlite:../data.sqlite", null, null, [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]);
  
  $auth = new Auth($pdo);
  $user = $auth->login($_POST['username'], $_POST['password']);
  
  if ($user) {
    header('Location: index.php?login=1');
    exit();
  }
  $error = true;
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Login</title>
</head>
<body>
<h1 class="container">Se connecter</h1>
  
<?php if($error): ?>
  <div class="alert alert-danger">
    identifiants invalides
  </div>
<?php endif ?>

<form action="" method="post" class="container">
  <div class="form-group">
    <input type="text" name="username" placehoder="Login" class="form-control">
  </div>
  <div class="form-group">
    <input type="password" name="password" class="form-control" placeholder="pass">
  </div>
  <button class="btn btn-primary">Se connecter</button>
</form>


</body>
</html>