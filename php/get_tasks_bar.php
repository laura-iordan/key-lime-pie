<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
    $id_user=$_GET['id_user'];
  $sql = "  SELECT t.task_no, CONCAT(e.name, ' ', e.surname) as emp_name, p.project_name
  FROM (SELECT count(id_task) as task_no, id_employee, id_project
  FROM [dbo].[tasks] 
  GROUP BY id_employee, id_project) AS t
  INNER JOIN (SELECT e.id_employee, e.name, e.surname, u.email, t.team_name 
  FROM  [dbo].[employees] AS e
  INNER JOIN [dbo].[users] AS u
  ON e.id_user=u.id_user 
  LEFT JOIN [dbo].[teams] AS t
  ON e.id_team=t.id_teams
  WHERE e.status=1 AND u.id_role <> 1 AND t.id_manager = (SELECT m.id_manager FROM [dbo].[employees] AS e
INNER JOIN [dbo].[managers] AS m
ON e.id_employee = m.id_employee
WHERE e.id_user=?)) AS e
  ON t.id_employee=e.id_employee
  INNER JOIN [dbo].[projects] AS p
  ON t.id_project=p.id_project";
  $params = array($id_user);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
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