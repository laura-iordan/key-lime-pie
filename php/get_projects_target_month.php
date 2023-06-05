<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $id_user=$_GET['id_user'];
  $sql = "SELECT 
  COUNT(CASE WHEN projects.ending_date IS NULL AND MONTH(projects.target_date) = MONTH(getdate()) AND YEAR(projects.target_date) = YEAR(getdate()) THEN 1 END) AS projects_target_month 
  FROM (SELECT p.id_project, p.ending_date, p.budget, p.hours, 
  CONCAT(e.name, ' ',  e.surname) AS manager_name, CAST(p.starting_date AS varchar) AS starting_date, 
  CAST(p.target_date AS varchar) AS target_date 
  FROM [dbo].[projects] AS p
  INNER JOIN [dbo].[employees] AS e
  ON p.id_manager=e.id_employee
  WHERE e.id_user=?) AS projects";
  $params = array($id_user);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  echo json_encode(sqlsrv_fetch_object($stmt));
  } else {
  die(print_r(sqlsrv_errors(), true));
}