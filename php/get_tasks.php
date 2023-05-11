<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT t.task_no, CONCAT(e.name, ' ', e.surname) as emp_name, p.project_name
  FROM (SELECT count(id_task) as task_no, id_employee, id_project
  FROM [dbo].[tasks] 
  GROUP BY id_employee, id_project) AS t
  INNER JOIN [dbo].[employees] AS e
  ON t.id_employee=e.id_employee
  INNER JOIN [dbo].[projects] AS p
  ON t.id_project=p.id_project";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $users = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($users, $row);
  }
  
  echo json_encode($users);
} else {
  die(print_r(sqlsrv_errors(), true));
}