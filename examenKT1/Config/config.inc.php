<?php

// During development
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connection settings
$db_hostname = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'mvc-application';

$mysqli = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);

if (!$mysqli) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;

    exit;
}
