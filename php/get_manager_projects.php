
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: http://localhost:3000');

if ($conn) {
  $sql = "SELECT p.id_project, CONCAT(e.name,' ',e.surname) AS name, p.project_name, p.budget, p.hours, p.starting_date, p.ending_date
  FROM [dbo].[projects] AS p
  INNER JOIN  [dbo].[employees] AS e
  ON p.id_manager=e.id_employee
  WHERE id_manager = 4"; // 4 = id_manager logat
  
  $stmt = sqlsrv_query($conn, $sql);
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
