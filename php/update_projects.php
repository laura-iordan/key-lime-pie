<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $id_proj = $_POST['id_project'];
    $proj_name = $_POST['project_name'];
    $budget = $_POST['budget'];
    $hours = $_POST['hours'];
    $id_manager = $_POST['id_manager'];

    if(!is_numeric($id_manager)){
        $sql = "UPDATE [dbo].[projects]
        SET project_name=?, budget=?, hours=?
        WHERE id_project=?";
        $params = array($proj_name, $budget, $hours, $id_proj);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }else{
        $sql = "UPDATE [dbo].[projects]
        SET project_name=?, budget=?, hours=?, id_manager=?
        WHERE id_project=?";
        $params = array($proj_name, $budget, $hours, $id_manager, $id_proj);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }
}

?>