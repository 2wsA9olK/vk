<?php
$email = $_POST["email"];
$password = $_POST["password"];
$connection = mysqli_connect("localhost", "findstudents", "ilovefindcreek", "findstudents");
$connection -> set_charset("utf8mb4");