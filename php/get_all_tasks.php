
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT t.id_task, t.task_name, t.id_employee, CONCAT(e.name, ' ', e.surname) AS employee_name, t.id_project, p.project_name, t.starting_date, t.target_date, t.ending_date
  FROM [dbo].[tasks] AS t
  LEFT JOIN [dbo].[employees] AS e
  ON t.id_employee=e.id_employee
  LEFT JOIN [dbo].[projects] AS p
  ON p.id_project=t.id_project";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $tasks = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($tasks, $row);
  }
  
  echo json_encode($tasks);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
