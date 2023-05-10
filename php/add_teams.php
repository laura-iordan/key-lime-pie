<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    echo $username = $_POST['username'];
    echo $email = $_POST['email'];
    echo $password = $_POST['password'];
    echo $id_role = $_POST['id_role'];
    echo $name = $_POST['name'];
    echo $surname = $_POST['surname'];
    echo $SSN = $_POST['SSN'];
    echo $address = $_POST['address'];
    echo $phone_no = $_POST['phoneNo'];
    echo $hourly_fee = $_POST['hourlyFee'];
    echo $status = $_POST['status'];

    $sql1 = "INSERT INTO [dbo].[users](username, email, password, id_role) VALUES(?, ?, ?, ?)";
    $params1 = array($username, $email, $password, $id_role);
    $stmt1 = sqlsrv_query( $conn, $sql1, $params1);
    if( $stmt1 === false) {
        die( print_r( sqlsrv_errors(), true) );
    }

    $sql2 = "SELECT id_user FROM [dbo].[users] WHERE username = '{$username}'";

    $stmt2 = sqlsrv_query($conn, $sql2);
    if (!$stmt2) {
        die(print_r(sqlsrv_errors(), true));
    }

    $id_user = sqlsrv_fetch_object($stmt2)->id_user;
    


    $sql3 = "INSERT INTO [dbo].[employees] (name, surname, SSN, address, phone_no, hourly_fee, status, id_user)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $params3 = array($name, $surname, $SSN, $address, $phone_no, $hourly_fee, $status, $id_user);
    $stmt3 = sqlsrv_query( $conn, $sql3, $params3);
    if( $stmt3 === false) {
        die( print_r( sqlsrv_errors(), true) );
    }

}
?>