<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $id_role = $_POST['id_role'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $SSN = $_POST['SSN'];
    $address = $_POST['address'];
    $phone_no = $_POST['phoneNo'];
    $hourly_fee = $_POST['hourlyFee'];
    $status = $_POST['status'];

    if($id_role == 2){
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

        $sql4 = "SELECT [id_employee]
        FROM [dbo].[employees]
        WHERE [id_user] = '{$id_user}'";
    
        $stmt4 = sqlsrv_query($conn, $sql4);
        if (!$stmt4) {
            die(print_r(sqlsrv_errors(), true));
        }
    
        $id_employee = sqlsrv_fetch_object($stmt4)->id_employee;

        $sql5 = "INSERT INTO [dbo].[managers] (id_employee)
        VALUES (?)";
        $params5 = array($id_employee);
        $stmt5 = sqlsrv_query( $conn, $sql5, $params5);
        if( $stmt5 === false) {
            die( print_r( sqlsrv_errors(), true) );
        }



    }else{
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

    

}
?>