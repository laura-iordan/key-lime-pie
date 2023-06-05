
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
    $id_user=$_GET['id_user'];
  $sql = "SELECT p.id_project, p.project_name, p.budget, p.hours, 
  CONCAT(e.name, ' ',  e.surname) AS manager_name, CAST(p.starting_date AS varchar) AS starting_date, 
  CAST(p.target_date AS varchar) AS target_date 
  FROM [dbo].[projects] AS p
  INNER JOIN [dbo].[employees] AS e
  ON p.id_manager=e.id_employee
  WHERE e.id_user=?";
  $params = array($id_user);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $projects = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($projects, $row);
  }
  
  echo json_encode($projects);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>