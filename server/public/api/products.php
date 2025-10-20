<?php

$allowedOrigin = 'http://localhost:8080';
header("Access-Control-Allow-Origin: $allowedOrigin");
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

// --- Build target URL to Pockee ---
$base = 'https://v8api.pockee.com';
$path = '/api/v8/public/products';

// default params από το assignment
$params = [
  'assortment_id' => $_GET['assortment_id'] ?? '14',
  'in_stock'      => $_GET['in_stock']      ?? 'true',
];

// take any other params from the original request
foreach ($_GET as $k => $v) {
  if (!isset($params[$k])) { $params[$k] = $v; }
}

$query = http_build_query($params);
$url = $base . $path . '?' . $query;

// --- cURL call ---
$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_TIMEOUT => 10,
  CURLOPT_HTTPHEADER => [
    'Accept: application/json',
  ],
]);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);

// --- output ---
header('Content-Type: application/json; charset=utf-8');
if ($err) {
  http_response_code(502);
  echo json_encode(['error' => 'Upstream error', 'detail' => $err], JSON_UNESCAPED_UNICODE);
  exit;
}
http_response_code($httpcode);
echo $response;
