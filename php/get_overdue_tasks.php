<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT COUNT(CASE WHEN [ending_date] IS NOT NULL AND DATEDIFF(day, [ending_date], [target_date]) > 0 THEN 1 END) AS overdue_tasks
  FROM tasks";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  echo json_encode(sqlsrv_fetch_object($stmt));
} else {
die(print_r(sqlsrv_errors(), true));
}