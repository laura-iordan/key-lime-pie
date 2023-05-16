<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn) {
    $task_name = $_POST['task_name'];
    $id_employee = $_POST['id_employee'];
    $id_project = $_POST['id_project'];
    $starting_date = $_POST['starting_date'];
    $target_date = $_POST['target_date'];

    $ins = "INSERT INTO [dbo].[tasks](task_name, id_employee, id_project, starting_date, target_date) VALUES (?,?,?,?,?)";
    $param = array($task_name, $id_employee, $id_project, $starting_date, $target_date);
    $stmt = sqlsrv_query($conn, $ins, $param);
    if($stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
}

?>