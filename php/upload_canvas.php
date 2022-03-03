<?php
session_start();

if (!isset($_SESSION['id'])) {
    sendResult(false, 'Not logged in');
    exit(1);
}

define('CANVAS_DIR', '../secure/canvas/');
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
if (!isset($json['canvas'])) {
    sendResult(false, 'Empty query parameter: canvas');
    exit(1);
}
if (strlen($json['canvas']) > 16384) { // 16 kB
    sendResult(false, 'Canvas Too Large');
    exit(1);
}

$filename = $json['prefix'] . '_canvas_' . $_SESSION['id'] . '.json';

$result_canvas = file_put_contents(CANVAS_DIR . $filename, $json['canvas'], LOCK_EX);
$result_log = file_put_contents(LOG_DIR . $filename,
    '{"time":"' . $json['time'] . '","canvas":' . $json['canvas'] . "},\n",
    FILE_APPEND);

if ($result_canvas !== false && $result_log !== false) {
    sendResult(true, 'Upload succeeded');
}
else {
    sendResult(false, 'Can not write canvas data');
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