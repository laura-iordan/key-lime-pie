<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    echo $id_teams = $_POST['id_teams'];
    echo $id_manager = $_POST['id_manager'];
    echo $team_name = $_POST['team_name'];

    if(!is_numeric($id_manager)){
        $sql = "UPDATE [dbo].[teams]
        SET team_name=?
        WHERE id_teams=?";
        $params = array($team_name, $id_teams);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    } else{
        $sql = "UPDATE [dbo].[teams]
        SET team_name=?, id_manager=?
        WHERE id_teams=?";
        $params = array($team_name, $id_manager, $id_teams);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }



}
?>