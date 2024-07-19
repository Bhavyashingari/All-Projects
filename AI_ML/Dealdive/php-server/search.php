<?php
require_once 'database.php';

if (isset($_GET['search'])) {
  $searchInput = $_GET['search'];
  $query = "SELECT * FROM products WHERE name LIKE '%$searchInput%'";
  $result = mysqli_query($conn, $query);
  $products = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
  }
  echo json_encode($products);
}
?>