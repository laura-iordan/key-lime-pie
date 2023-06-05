<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $id_user=$_GET['id_user'];
  $sql = "SELECT COUNT(CASE WHEN task.[ending_date] IS NOT NULL AND DATEDIFF(day, task.[ending_date], task.[target_date]) <= 0  THEN 1 END) AS on_schedule_tasks
  FROM (SELECT t.ending_date AS ending_date, T.target_date AS target_date, t.starting_date AS starting_date FROM [dbo].[tasks] AS t
INNER JOIN (
SELECT* FROM  [dbo].[projects]
where id_manager = (  SELECT m.id_employee FROM [dbo].[employees] AS e
INNER JOIN [dbo].[managers] AS m
ON e.id_employee = m.id_employee
WHERE e.id_user=?)) AS p
ON t.id_project = p.id_project) AS task";
$params = array($id_user);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  echo json_encode(sqlsrv_fetch_object($stmt));
  } else {
  die(print_r(sqlsrv_errors(), true));
}