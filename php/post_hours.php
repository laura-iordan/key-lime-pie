<?php
require_once('dbsqlconnection.php');

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
$json = file_get_contents('php://input');
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

$conn->close();
?>
