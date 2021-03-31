<?php 
use App\URLHelper;
use App\NumberHelper;
use App\TableHelper;

define('PER_PAGE', 20);

require 'vendor/autoload.php';
$pdo = new PDO("sqlite:./products.db", null, null, [
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);



$query = "SELECT * FROM products";
$queryCount = "SELECT COUNT(id) as count FROM products";
$params = [];
$sortable = [ 'id', 'name', 'city', 'price', 'address'];

if (!empty($_GET['q'])) {
  $query .= " WHERE city LIKE :city";
  $queryCount .= " WHERE city LIKE :city";
  
  $params['city'] = '%' . $_GET['q'] . '%';
}

// sorting
if (!empty($_GET['sort']) && in_array($_GET['sort'], $sortable)) {
  $direction = $_GET['dir'] ?? 'asc';
  if (!in_array($direction, ['asc', 'desc'])) {
    $direction = 'asc';
  }
  $query .= " ORDER BY " . $_GET['sort'] . " $direction";
}

// pagination
$page = (int)($_GET['p'] ?? 1);
$offset = ($page - 1) * PER_PAGE;

$query .= " LIMIT " . PER_PAGE . " OFFSET $offset";

$statement = $pdo->prepare($query);
$statement->execute($params);
$products = $statement->fetchAll();

$statement = $pdo->prepare($queryCount);
$statement->execute($params);
$count = (int)$statement->fetch()['count'];
$pages = ceil($count / PER_PAGE);

 
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
        <th><?= TableHelper::sort('id', 'ID', $_GET) ?></th>
        <th><?= TableHelper::sort('name', 'NOM', $_GET) ?></th>
        <th><?= TableHelper::sort('price', 'PRIX', $_GET) ?></th>
        <th><?= TableHelper::sort('city', 'VILLE', $_GET) ?></th>
        <th><?= TableHelper::sort('address', 'ADRESSE', $_GET) ?></th>
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

  <?php if ($pages > 1 && $page > 1): ?>
    <a href="?<?= URLHelper::withParam($_GET, 'p', $page - 1) ?>" class="btn btn-primary">Page précédente</a>
  <?php endif ?>
  <?php if ($pages > 1 && $page < $pages): ?>
    <a href="?<?= URLHelper::withParam($_GET, 'p', $page + 1) ?>" class="btn btn-primary">Page suivante</a>
  <?php endif ?>

</body>
</html>