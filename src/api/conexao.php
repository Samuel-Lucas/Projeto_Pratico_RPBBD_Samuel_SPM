<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "bd_projeto";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if(!$conn) {
        die("Falha na conexão: ". mysqli_connect_error());
    } 
   
?>