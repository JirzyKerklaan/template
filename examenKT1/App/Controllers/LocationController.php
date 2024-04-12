<?php
class LocationController
{
    private $location;

    public function __construct($mysqli)
    {
        $this->location = new Location($mysqli);
    }

    public function index($path)
    {
        $locationsArray = $this->location->readMany();

        $this->loadView($path, $locationsArray);
    }

    public function showLocation($id)
    {
        if (is_null($id)) {
            throw new Exception("Boek met id $id niet gevonden");
            return;
        }

        $location = $this->location->readOne($id);
    }

    public function createLocation($name, $longitude, $latitude)
    {
        if (strlen($name) == 0 && strlen($longitude) == 0 && strlen($latitude) == 0) {
            throw new Exception("Niet alle benodigde data is ingevoerd");
            return;
        }

        $this->location->name = htmlentities($name);
        $this->location->longitude = htmlentities($longitude);
        $this->location->latitude = htmlentities($latitude);

        if ($this->location->create()) {
            $result = $this->location->name . " is toegevoegd!";
        } else {
            echo "Fout bij het toevoegen";
        }
    }

    public function updateLocation($id)
    {
        if (is_null($id)) {
            throw new Exception("Boek met id $id niet gevonden");
            return;
        }

        $this->location->readOne($id);

        $location = $this->location;
    }

    public function deleteLocation($id)
    {
        if (is_null($id)) {
            throw new Exception("Locatie met id $id niet gevonden");
        }

        if ($this->location->delete()) {
            $result = "Locatie met id $id is verwijderd";
        } else {
            $result = "FOUT bij het verwijderen van de locatie met id $id";
        }
    }

    public function loadView($viewName, $locationsArray)
    {
        extract($locationsArray);

        require_once "Resources/Views/{$viewName}.php";
    }
}
