# Examen KT1 uitleg
Uitleg per bestand <br><br>
<ul>
<li>
<a href="#index-php">Index.php</a>
</li>
<li>
<a href="#routes-php">Routes/web.php</a>
</li>
<li>
<a href="#controllers-php">App/Controllers</a>
</li>
<li>
<a href="#models-php">Models/Location.php</a>
</li>
<li>
<a href="#views-php">Views</a>
</li>
</ul>
 <br><br>
 
<h2 id="index-php">Index.php</h2>
<p>In dit bestand hoeft niets veranderd te worden. </p><br>

<h2 id="routes-php">Routes/web.php</h2>
<p>Om een route toe te voegen aan de MVC moet je de volgende code toevoegen:</p>

```php
    '/overview' => function () use ($mysqli) {
        $controller = new LocationController($mysqli);
        $controller->index('locations_overview');
    },
```

<p>In deze code moet de '/overview' veranderen naar de nieuwe route. Ook moet de 'locations_overview' veranderd worden naar de nieuwe View. </p><br>

<h2 id="controllers-php">App/Controllers</h2>
<p>Via dit bestand worden de database interacties aangeroepen. Per table wordt er een andere controller gebruikt.</p><br>

<h2 id="models-php">Models/Location.php</h2>
<p>In dit bestand worden de database interacties gemaakt. De volledige CRUD functionaliteit is aan te roepen op de volgende manier:</p><br>

**Create entry**
```php
$this->location->create()
```
<br>

**Get entry/entries**
```php
$this->location->readOne()
$this->location->readMany()
```
<br>

**Update entry**
```php
$this->location->update()
```
<br>

**Delete entry**
```php
$this->location->delete()
```

<h2 id="views-php">Views</h2>
<p>In deze map maak je de views aan, deze views worden aangeroepen via de 'Routes/web.php'.</p>
<p>Binnen deze view bouw je de normale DOM structuur.</p>