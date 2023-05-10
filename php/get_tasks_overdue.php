<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT t.total_tasks, t.on_schedule_tasks, t.overdue_tasks, CONCAT(e.name, ' ', e.surname) as emp_name
  FROM (SELECT COUNT(CASE WHEN [ending_date] IS NOT NULL AND DATEDIFF(day, [ending_date], [target_date]) > 0 THEN 1 END) AS overdue_tasks,
        COUNT(CASE WHEN [ending_date] IS NOT NULL AND DATEDIFF(day, [ending_date], [target_date]) <= 0  THEN 1 END) AS on_schedule_tasks,
        COUNT(CASE WHEN [ending_date] IS NOT NULL THEN 1 END) AS total_tasks,
        id_employee
  FROM [dbo].[tasks]
  GROUP BY [id_employee]) as t
  LEFT JOIN [dbo].[employees] AS e
  ON E.id_employee=T.id_employee";
  
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