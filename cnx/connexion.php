<?php

// Gestion des Erreurs
try {
    // Connexion avec le serveur de base de données MySQL
    $cnx = new PDO(
        'mysql:host=localhost;dbname=codejam;charset=utf8',    // La chaine de connexion
        'root',         // login
        '');        // mot de passe

} catch (Exception $e) {
    die("<p class='alert alert-danger w-50 m-auto text-center'><strong>Erreur De Connexion</strong> --> "
    .$e->getMessage()
    ."</p>");
}