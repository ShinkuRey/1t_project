<?php

$dbServerName = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "BrainOut";

$con = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);

$db = mysqli_select_db($con, 'BrainOut');
