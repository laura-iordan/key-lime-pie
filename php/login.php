<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');

if($conn){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users(username, email, password) VALUES(?, ?, ?)";
    $params = array($username, $email, $password);

    $stmt = sqlsrv_query( $conn, $sql, $params);
    if( $stmt === false ) {
        die( print_r( sqlsrv_errors(), true));
    }
    
}
?>