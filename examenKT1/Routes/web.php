<?php

$routes = [
    '/' => function () use ($mysqli) {
        $controller = new LocationController($mysqli);
        $controller->index('home');
    },
];

return $routes;
