<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Locations Overview</title>
</head>

<body>
    <h1>Locations</h1>
    <?php if (isset($locationsArray) && !empty($locationsArray)) : ?>
        <ul>
            <?php foreach ($locationsArray as $location) : ?>
                <li><?php echo htmlspecialchars($location->name); ?></li>
            <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <p>No locations found.</p>
    <?php endif; ?>
</body>

</html>