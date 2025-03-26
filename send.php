<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    include 'db_conn.php';

    $name = trim($_POST['name'] ?? '');

    if (!empty($name)) {
        // Sikker SQL med prepared statement
        $stmt = mysqli_prepare($conn, "INSERT INTO test_table (name) VALUES (?)");
        mysqli_stmt_bind_param($stmt, "s", $name);

        if (mysqli_stmt_execute($stmt)) {
            echo "Navnet '$name' ble lagret i databasen!";
        } else {
            echo "Feil ved lagring: " . mysqli_error($conn);
        }
        mysqli_stmt_close($stmt);
    } else {
        echo "Navnet kan ikke være tomt!";
    }
} else {
    echo "Ingen data mottatt.";
}
?>
