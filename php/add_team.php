<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn) {
    $team = $_POST['team_name'];
    $manager = $_POST['manager'];

    $ins = "INSERT INTO [dbo].[teams](team_name, id_manager) VALUES (?,?)";
    $param = array($team, $manager);
    $stmt = sqlsrv_query($conn, $ins, $param);
    if($stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
}

?>