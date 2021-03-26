<?php 

use App\NumberHelper;
require 'vendor/autoload.php';
$pdo = new PDO("sqlite:./products.db", null, null, [
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);



$query = "SELECT * FROM products";
$params = [];

if (!empty($_GET['q'])) {
  $query .= " WHERE city LIKE :city";
  $params['city'] = '%' . $_GET['q'] . '%';
}

$query .= " LIMIT 20";
$statement = $pdo->prepare($query);
$statement->execute($params);
$products = $statement->fetchAll();
 
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
  <title>Notre tableau</title>
</head>
<body class="p-4">

  <h1>Biens immo</h1>

  <form action="" class="mb-4">
    <div class="form-group">
      <input type="text" class="form-control" name="q" placeholder="rechercher par ville" value="<?= htmlentities($_GET['q']) ?? null ?>">
    </div>
    <button class="btn btn-primary" type="submit">Rechercher</button>
  </form>
  
  <table class="table table-striped">
    <thead>
      <tr> 
        <th>ID</th>
        <th>Nom</th>
        <th>Prix</th>
        <th>Ville</th>
        <th>Adresse</th>
      </tr>
    </thead>
    <tbody>
    <?php foreach ($products as $product): ?>
      <tr>
        <td>#<?= $product['id']; ?></td>
        <td><?= $product['name']; ?></td>
        <td><?= NumberHelper::price($product['price'], '€'); ?></td>
        <td><?= $product['city']; ?></td>
        <td><?= $product['address']; ?></td>
      </tr>
    <?php endforeach ?>
    </tbody>
  </table>
  

</body>
</html>