<?php
require_once 'database.php';

$pid = $_GET['pid'];

$stmt = $conn->prepare("SELECT * FROM recommended_products WHERE pid = ?");
$stmt->execute([$pid]);
$recommendedProducts = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($recommendedProducts);
?>