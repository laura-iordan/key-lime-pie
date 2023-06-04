<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $id_user = $_POST['id_user'];
    $id_role = $_POST['id_role'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $SSN = $_POST['SSN'];
    $address = $_POST['address'];
    $phone_no = $_POST['phoneNo'];
    $hourly_fee = $_POST['hourlyFee'];
    $status = $_POST['status'];

    $sql1 = "SELECT [id_role]
        FROM [dbo].[users]
        WHERE [id_user] = '{$id_user}'";
    
        $stmt1 = sqlsrv_query($conn, $sql1);
        if (!$stmt1) {
            die(print_r(sqlsrv_errors(), true));
        }
    
        $id_role_vechi = sqlsrv_fetch_object($stmt1)->id_role;


    if($id_role == 2 && $id_role != $id_role_vechi){
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?, SSN=?, address=?, phone_no=?, hourly_fee=?
        WHERE id_user=?";
        $params = array($name, $surname, $SSN, $address, $phone_no, $hourly_fee, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

        $sql1 = "UPDATE [dbo].[users]
        SET id_role=?
        WHERE id_user=?";
        $params1 = array($id_role, $id_user);
        $stmt1 = sqlsrv_query( $conn, $sql1, $params1);
        if( $stmt1 === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

        $sql2 = "SELECT id_employee
        FROM [dbo].[employees] 
        WHERE id_user=?";
        $params2 = array($id_user);
        $stmt2 = sqlsrv_query($conn, $sql2, $params2);

        if (!$stmt2) {
            die(print_r(sqlsrv_errors(), true));
        }
    
        $id_employee = sqlsrv_fetch_object($stmt2)->id_employee;

        $sql5 = "INSERT INTO [dbo].[managers] (id_employee)
        VALUES (?)";
        $params5 = array($id_employee);
        $stmt5 = sqlsrv_query( $conn, $sql5, $params5);
        if( $stmt5 === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

    }else if($id_role == 3 && $id_role != $id_role_vechi){
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?, SSN=?, address=?, phone_no=?, hourly_fee=?
        WHERE id_user=?";
        $params = array($name, $surname, $SSN, $address, $phone_no, $hourly_fee, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

        $sql1 = "UPDATE [dbo].[users]
        SET id_role=?
        WHERE id_user=?";
        $params1 = array($id_role, $id_user);
        $stmt1 = sqlsrv_query( $conn, $sql1, $params1);
        if( $stmt1 === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

        $sql2 = "SELECT id_employee
        FROM [dbo].[employees]
        WHERE id_user=?";
        $params2 = array($id_user);
        $stmt2 = sqlsrv_query($conn, $sql2, $params2);

        if (!$stmt2) {
            die(print_r(sqlsrv_errors(), true));
        }
    
        $id_employee = sqlsrv_fetch_object($stmt2)->id_employee;

        $sql5 = "DELETE FROM [dbo].[managers] WHERE id_employee = {$id_employee}";
        $stmt5 = sqlsrv_query( $conn, $sql5);
        if( $stmt5 === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

    }
    else{
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?, SSN=?, address=?, phone_no=?, hourly_fee=?
        WHERE id_user=?";
        $params = array($name, $surname, $SSN, $address, $phone_no, $hourly_fee, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }

    

}
?>