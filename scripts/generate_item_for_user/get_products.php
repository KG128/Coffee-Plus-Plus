<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "coffeeplusplusdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM coffee_product_catalog";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Output data of each row
  $products = array();
  while ($row = $result->fetch_assoc()) {
    $product = array(
      "product_id" => $row["product_id"],
      "name" => $row["name"],
      "image" => $row["image"],
      "calories" => $row["calories"],
      "time" => $row["time"],
      "price" => $row["price"]
    );
    array_push($products, $product);
  }
  echo json_encode($products);
} else {
  echo "0 results";
}

$conn->close();
