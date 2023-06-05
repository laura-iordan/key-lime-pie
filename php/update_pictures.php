<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


    if ($conn) {
        $id_user = $_POST['id_user'];
        $picture_name = $_POST['picture_name'];
        $sql = "UPDATE [dbo].[employees] SET picture=? WHERE id_user=?";
        $params = array($picture_name, $id_user);
        $stmt = sqlsrv_query($conn, $sql, $params);
        if ($stmt === false) {
            die(print_r(sqlsrv_errors(), true));
        } 
    }



?>


