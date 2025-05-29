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
        body {
            text-align: center;
            padding: 10%;
            font: 20px Helvetica, sans-serif;
            color: #333;
            background-color: #f9f9f9;
        }
        h1 {
            font-size: 50px;
            margin: 0 0 20px 0;
        }
        article {
            display: block;
            text-align: left;
            max-width: 650px;
            margin: 0 auto;
        }
        a {
            color: #dc8100;
            text-decoration: none;
        }
        a:hover {
            color: #333;
        }
        @media only screen and (max-width: 480px) {
            h1 {
                font-size: 40px;
            }
        }
    </style>
</head>
<body>
    <article>
        <h1>Site is temporarily unavailable.</h1>
        <p>Scheduled maintenance is currently in progress. Please check back soon.</p>
        <p>We apologize for any inconvenience.</p>
        <p id="signature">&mdash; <a href="mailto:chamodh@gmail.com">Chamodh</a></p>
    </article>
</body>
</html>
