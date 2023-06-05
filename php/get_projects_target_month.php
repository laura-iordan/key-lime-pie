<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT 
  COUNT(CASE WHEN ending_date IS NULL AND MONTH(target_date) = MONTH(getdate()) AND YEAR(target_date) = YEAR(getdate()) THEN 1 END) AS projects_target_month 
  FROM projects";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  echo json_encode(sqlsrv_fetch_object($stmt));
  } else {
  die(print_r(sqlsrv_errors(), true));
}