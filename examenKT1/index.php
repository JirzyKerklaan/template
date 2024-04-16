<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Examen KT1">
    <title>Document</title>
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Font awesome -->
    <script src="https://kit.fontawesome.com/43df3a711f.js" crossorigin="anonymous"></script>

    <!-- Google fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <!-- Resources -->
    <link rel="stylesheet" href="./Resources/css/index.css">
    <script src="./Resources/js/index.js"></script>
</head>

<body>
    <?php
    require './Config/config.inc.php';
    require_once './Models/Location.php';
    require_once './App/Controllers/LocationController.php';
    $routes = require_once 'Routes/web.php';

    $url = $_SERVER['REQUEST_URI'] ?? '';

    if (array_key_exists($url, $routes)) {
        require_once(__DIR__ . '/Resources/views/Components/Header.php');
    ?>
        <main>
            <div class="content mt-[-80px]">
                <?php
                $routes[$url]();
                ?>
            </div>
        </main>
    <?php
        exit;
    } else {
        require_once(__DIR__ . '/Resources/views/Components/Header.php');
        require_once(__DIR__ . '/Resources/views/404-page.php');
        exit;
    }
    ?>
</body>

</html>