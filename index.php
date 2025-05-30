<?php
// Maintenance page — no backend or WordPress loading
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Site is down for maintenance</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background-color: #000; /* Fallback background color */
        }
        img {
            width: 100vw;
            height: 100vh;
            object-fit: contain;
            display: block;
        }
    </style>
</head>
<body>
    <img src="./maintenceImage.jpg" alt="Maintenance">
</body>
</html>
