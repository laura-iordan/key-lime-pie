<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $project_name = $_POST['project_name'];
    $budget = $_POST['budget'];
    $hours = $_POST['hours'];
    $id_manager = $_POST['id_manager'];
    $starting_date = $_POST['starting_date'];
    $target_date = $_POST['target_date'];

    $sql = "INSERT INTO [dbo].[projects] (project_name, budget, hours, id_manager, starting_date, target_date)
    VALUES (?, ?, ?, ?, ?, ?)";
        $params = array($project_name, $budget, $hours, $id_manager, $starting_date, $target_date);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
}
?>