<?php
session_start();

if (!isset($_SESSION['id'])) {
    sendResult(false, 'Not logged in');
    exit(1);
}

define('LOG_DIR', '../secure/log/');

$buff = file_get_contents('php://input');
$json = json_decode($buff, true);

if (!isset($json['prefix'])) {
    sendResult(false, 'Empty query parameter: prefix');
    exit(1);
}
if (!isset($json['time'])) {
    sendResult(false, 'Empty query parameter: time');
    exit(1);
}
if (!isset($json['short'])) {
    sendResult(false, 'Empty query parameter: short');
    exit(1);
}
if (!isset($json['long'])) {
    sendResult(false, 'Empty query parameter: long');
    exit(1);
}

$filename = $json['prefix'] . '_operation_' . $_SESSION['id'] . '.json';

$result_log = file_put_contents(LOG_DIR . $filename,
    '{"time":"' . $json['time'] . '","short":' . $json['short'] . ',"long":' . $json['long'] . '},' . "\n",
    FILE_APPEND);

if ($result_log !== false) {
    sendResult(true, 'Upload succeeded');
}
else {
    sendResult(false, 'Can not write operation data');
}

function sendResult($status, $message) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
  
    echo json_encode([
        "status" => $status,
        "result" => $message
    ]);
}

?>