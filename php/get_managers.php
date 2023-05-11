<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn) {
    $sel = "SELECT m.id_manager, e.id_employee, CONCAT(e.name, ' ', e.surname) AS manager_name FROM [dbo].[managers] AS m
    LEFT JOIN [dbo].[employees] AS e
    ON m.id_employee=e.id_employee";

    $stmt = sqlsrv_query($conn, $sel);
    if($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    $managers = array();
    while($rez = sqlsrv_fetch_object($stmt)) {
        array_push($managers, $rez);
    }

    echo json_encode($managers);
} else {
    die(print_r(sqlsrv_errors(), true));
}


?>
