<?php

$routes = [
    '/' => function () use ($mysqli) {
        $controller = new LocationController($mysqli);
        $controller->index('locations_overview');
    },
];

return $routes;
