<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
    $id_task = $_GET['id_task'];
  $sql = "SELECT t.task_no, CONCAT(e.name, ' ', e.surname) as emp_name, p.project_name
  FROM (SELECT count(id_task) as task_no, id_employee, id_project
  FROM [dbo].[tasks] 
  GROUP BY id_employee, id_project) AS t
  INNER JOIN [dbo].[employees] AS e
  ON t.id_employee=e.id_employee
  INNER JOIN [dbo].[projects] AS p
  ON t.id_project=p.id_project
  WHERE t.id_task=?";
  $params = array($id_task);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  echo json_encode($row = sqlsrv_fetch_object($stmt));
} else {
  die(print_r(sqlsrv_errors(), true));
}