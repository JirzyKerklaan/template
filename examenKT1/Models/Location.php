<?php
class Location
{
    public $id = null;
    public $name = "";
    public $longitude = "";
    public $latitude = "";

    private $mysqli;

    public function __construct($mysqli)
    {
        $this->mysqli = $mysqli;
    }

    public function readOne($id)
    {
        $query = "SELECT * FROM locations WHERE id = ?";
        if ($stmt = $this->mysqli->prepare($query)) {
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows == 1) {
                $row = $result->fetch_assoc();
                $this->id = $id;
                $this->name = $row['name'];
                $this->longitude = $row['longitude'];
                $this->latitude = $row['latitude'];
            } else {
                throw new Exception("Kan de locatie met id: $id niet vinden!");
            }
        }
    }

    public function readMany()
    {
        $query = "SELECT * FROM `locations` ORDER BY `locations`.`id` ASC";
        $locations = [];
        if ($result = $this->mysqli->query($query)) {
            while ($row = $result->fetch_assoc()) {
                $locationAdd = new self($this->mysqli); // Create a new instance of the current class
                $locationAdd->id = $row['id'];
                $locationAdd->name = $row['name'];
                $locationAdd->longitude = $row['longitude'];
                $locationAdd->latitude = $row['latitude'];
                $locations[] = $locationAdd;
            }
        }

        return $locations;
    }


    public function update()
    {
        if ($this->id !== null) {
            $query = "UPDATE locations SET name = ?, longitude = ?, latitude = ? WHERE id = ?";
            if ($stmt = $this->mysqli->prepare($query)) {
                $stmt->bind_param("sssi", $this->name, $this->longitude, $this->latitude, $this->id);
                if ($stmt->execute()) {
                    return true;
                } else {
                    echo $query . "<br />" . $this->mysqli->error;
                }
            }
        }
        return false;
    }

    public function create()
    {
        $query = "INSERT INTO locations (name, longitude, latitude) VALUES (?, ?, ?)";
        if ($stmt = $this->mysqli->prepare($query)) {
            $stmt->bind_param("sss", $this->name, $this->longitude, $this->latitude);
            return $stmt->execute();
        }
        return false;
    }

    public function delete()
    {
        if ($this->id !== null) {
            $query = "DELETE FROM locations WHERE id = ?";
            if ($stmt = $this->mysqli->prepare($query)) {
                $stmt->bind_param("i", $this->id);
                return $stmt->execute();
            }
        }
        return false;
    }
}
