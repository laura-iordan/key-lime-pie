<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT 100 * ROUND(CAST(COUNT(CASE WHEN ending_date IS NOT NULL AND DATEDIFF(day, ending_date, target_date) <= 0  THEN 1 END) AS float) / 
  CAST(COUNT(CASE WHEN ending_date IS NOT NULL THEN 1 END) AS float), 4) AS team_performance
  FROM tasks";
  
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
  die(print_r(sqlsrv_errors(), true));
}