<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if($conn){
    $id_user = $_POST['id_user'];

        $sql = "UPDATE [dbo].[employees]
        SET status=2
        WHERE id_user=?";
        $params = array($id_user);
        $stmt = sqlsrv_query( $conn, $sql, $params);
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
    }
?>