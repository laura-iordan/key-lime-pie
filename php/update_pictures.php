<?php

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


    if ($conn) {
        echo $id_user = $_POST['id_user'];
        echo $picture_name = $_POST['picture_name'];
        $sql = "UPDATE [dbo].[employees] SET picture=? WHERE id_user=?";
        $params = array($picture_name, $id_user);
        $stmt = sqlsrv_query($conn, $sql, $params);
        if ($stmt === false) {
            die(print_r(sqlsrv_errors(), true));
        } else {
            echo "Numele pozei a fost actualizat în baza de date";
            // Poți adăuga orice acțiuni suplimentare după salvarea în baza de date
        }
    }



?>


