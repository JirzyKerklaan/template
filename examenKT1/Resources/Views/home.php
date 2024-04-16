<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina niet gevonden</title>
</head>
<?php require_once(__DIR__ . '../../../Resources/views/Components/Pageheader.php'); ?>
<!-- Componenten inladen & data insturen -->

<?php #if (isset($locationsArray) && !empty($locationsArray)) : 
?>
<!-- <ul> -->
<?php #foreach ($locationsArray as $location) : 
?>
<!-- <li><?php echo htmlspecialchars($location->name); ?></li> -->
<?php #endforeach; 
?>
<!-- </ul> -->
<?php #else : 
?>
<!-- <p>No locations found.</p> -->
<?php #endif; 
?>