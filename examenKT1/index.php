<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./Resources/CSS/index.css">
    <script src="https://kit.fontawesome.com/43df3a711f.js" crossorigin="anonymous"></script>
</head>

<body>
    <?php
    require './Config/config.inc.php';
    require_once './Models/Location.php';
    require_once './App/Controllers/LocationController.php';
    $routes = require_once 'Routes/web.php';

    $url = $_SERVER['REQUEST_URI'] ?? '';

    if (array_key_exists($url, $routes)) {
        require_once(__DIR__ . '/Resources/Views/Components/Header.php');
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
        require_once(__DIR__ . '/Resources/Views/404-page.php');
        exit;
    }
    ?>
</body>

</html>