<?php
namespace App;

use PDO;
use App\User;

class Auth {
  private $pdo;

  public function __construct(PDO $pdo) 
  {
    $this->pdo = $pdo;
  }

  public function user(): ?User
  {

  }
                        
  public function login (string $username, string $password): ?USer
 {
    $query = $this->pdo->prepare('SELECT * FROM users WHERE username = :username');
    $query->execute(['username' => $username]);
    $user = $query->fetchObject(User::class);

    if ($user === false) {
      return null;
    }

    if (password_verify($password, $user->password)) {
      if (session_status() === PHP_SESSION_NONE) {
        session_start();
      }
      $_SESSION['auth'] = $user->id; 
      return $user;
    }
    return null;
 }
}