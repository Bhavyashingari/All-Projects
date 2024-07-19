<?php
require_once 'database.php';

$product_id = $_POST['product_id'];
$quantity = $_POST['quantity'];

$stmt = $conn->prepare("INSERT INTO cart (product_id, quantity) VALUES (?, ?)");
$stmt->execute([$product_id, $quantity]);

echo json_encode(['status' => 'success']);
?>