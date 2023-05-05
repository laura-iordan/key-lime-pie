<?php
require_once('dbsqlconnection.php');

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');

if($conn){
    echo $id_project = $_POST['id_project'];
    echo $date = $_POST['date'];
    echo $hours = $_POST['hours'];
    echo $id_user = $_POST['id_user'];


    $sql = "INSERT INTO [dbo].[project_clockings] (id_employee, id_project, date, hours) VALUES (?, ?, ?, ?)";
    $params = array($id_user, $id_project, strtotime($date), $hours);
    $stmt = sqlsrv_query( $conn, $sql, $params);
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }



}


/*$json = file_get_contents('php://input');
$data = json_decode($json, true);


if(isset($data['id_project'], $data['date'], $data['hours'])) {

    $id_employee = 1; 
    $id_project = $data['id_project'];
    $date = date('Y-m-d', strtotime($data['date']));
    $hours = $data['hours'];
    
    $stmt = $conn->prepare("INSERT INTO [dbo].[project_clockings] (id_employee, id_project, date, hours) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("iisi", $id_employee, $id_project, $date, $hours);
    $stmt->execute();
    
    if ($stmt->affected_rows > 0) {
        echo "Orele de lucru au fost adăugate cu succes.";
    } else {
        echo "Nu s-au putut adăuga orele de lucru.";
    }

} else {
    echo "Nu s-au primit datele necesare.";
}

$conn->close();*/
?>
