<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
//print_r($_POST['starting_date']);
//print_r(substr($_POST['starting_date'], 0, 10));

//die();
if($conn){
    echo $id_task = $_POST['id_task'];
    echo $task_name = $_POST['task_name'];
    echo $id_employee = $_POST['id_employee'];
    echo $id_project = $_POST['id_project'];
    echo $starting_date = substr($_POST['starting_date'], 0, 10);
    echo $target_date = substr($_POST['target_date'], 0, 10);
    //echo $ending_date=substr($_POST['ending_date'], 0, 10);
    //echo $starting_date=substr($starting_date, 0, 10);
    //echo $target_date=substr($target_date, 0, 10);
    //echo $starting_date=var_dump(json_decode($starting_date));


    if(!is_numeric($id_project)&&!is_numeric($id_employee)){
        $sql = "UPDATE [dbo].[tasks]
        SET task_name=?, starting_date=?, target_date=?
        WHERE id_task=?";
        $params = array($task_name, $starting_date, $target_date, $id_task);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }else if(!is_numeric($id_project)){
        $sql = "UPDATE [dbo].[tasks]
        SET task_name=?, id_employee=?, starting_date=?, target_date=?
        WHERE id_task=?";
        $params = array($task_name, $id_employee, $starting_date, $target_date, $id_task);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    } else if(!is_numeric($id_employee)){
        $sql = "UPDATE [dbo].[tasks]
        SET task_name=?, id_project=?, starting_date=?, target_date=?
        WHERE id_task=?";
        $params = array($task_name, $id_project, $starting_date, $target_date, $id_task);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    } else{
        $sql = "UPDATE [dbo].[tasks]
        SET task_name=?, id_employee=?, id_project=? starting_date=?, target_date=?
        WHERE id_task=?";
        $params = array($task_name, $id_employee, $id_project, $starting_date, $target_date, $id_task);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }



}
?>