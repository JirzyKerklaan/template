    <?php require_once(__DIR__ . '../../../Resources/views/Components/Pageheader.php'); ?>
    <?php if (isset($locationsArray) && !empty($locationsArray)) : ?>
        <ul>
            <?php foreach ($locationsArray as $location) : ?>
                <li><?php echo htmlspecialchars($location->name); ?></li>
            <?php endforeach; ?>
        </ul>
    <?php else : ?>
        <p>No locations found.</p>
    <?php endif; ?>