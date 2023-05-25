<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $id_user = $_POST['id_user'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $id_team = $_POST['id_team'];

    if(!is_numeric($id_team)){
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?
        WHERE id_user=?";
        $params = array($name, $surname, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }else{
        $sql = "UPDATE [dbo].[employees]
        SET name=?, surname=?, id_team=?
        WHERE id_user=?";
        $params = array($name, $surname, $id_team, $id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }

}
?>