<?php  
$host = "localhost";
$user = "root";  // Bruk ditt MySQL-brukernavn
$pass = "MSQL326725800%"; // Bruk ditt MySQL-passord
$db_name = "test_db"; // Bruk riktig databasenavn

$conn = mysqli_connect($host, $user, $pass, $db_name);

if (!$conn) {
    die("Tilkobling mislyktes: " . mysqli_connect_error());
}
?>