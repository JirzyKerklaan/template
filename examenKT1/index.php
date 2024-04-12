<?php
require './Config/config.inc.php';
require_once './Models/Location.php';
require_once './App/Controllers/LocationController.php';
$routes = require_once 'Routes/web.php';

$url = $_SERVER['REQUEST_URI'] ?? '';

if (array_key_exists($url, $routes)) {
    $routes[$url]();

    exit;
} else {
    require_once(__DIR__ . '/Resources/Views/404-page.php');
    exit;
}
