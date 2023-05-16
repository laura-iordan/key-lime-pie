<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $id_user = $_POST['id_user'];
    //echo $username = $_POST['username'];
    //echo $email = $_POST['email'];
    //echo $id_role = $_POST['id_role'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    //echo $SSN = $_POST['SSN'];
    //echo $address = $_POST['address'];
    //echo $phone_no = $_POST['phoneNo'];
   // echo $hourly_fee = $_POST['hourlyFee'];
    $status = $_POST['status'];
    $id_team = $_POST['id_team'];

    if(!is_numeric($id_team)){
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?, status=?
        WHERE id_user=?";
        $params = array($name, $surname, $status, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }else{
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?, status=?, id_team=?
        WHERE id_user=?";
        $params = array($name, $surname, $status, $id_team, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }

}
?>