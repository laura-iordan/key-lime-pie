<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    echo $id_user = $_POST['id_user'];
    echo $username = $_POST['username'];
    echo $email = $_POST['email'];
    echo $id_role = $_POST['id_role'];
    echo $name = $_POST['name'];
    echo $surname = $_POST['surname'];
    echo $SSN = $_POST['SSN'];
    echo $address = $_POST['address'];
    echo $phone_no = $_POST['phoneNo'];
    echo $hourly_fee = $_POST['hourlyFee'];
    echo $status = $_POST['status'];

    $sql = "UPDATE [dbo].[employees]
    SET name=?, surname=?, SSN=?, address=?, phone_no=?, hourly_fee=?, status=?
    WHERE id_user=?";
    $params = array($name, $surname, $SSN, $address, $phone_no, $hourly_fee, $status, $id_user);
    $stmt = sqlsrv_query( $conn, $sql, $params);
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }

}
?>