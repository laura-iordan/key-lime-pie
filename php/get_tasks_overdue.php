<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $id_user=$_GET['id_user'];
  $sql = "    SELECT t.total_tasks, t.on_schedule_tasks, t.overdue_tasks, CONCAT(e.name, ' ', e.surname) as emp_name
  FROM (SELECT COUNT(CASE WHEN [ending_date] IS NOT NULL AND DATEDIFF(day, [ending_date], [target_date]) > 0 THEN 1 END) AS overdue_tasks,
        COUNT(CASE WHEN [ending_date] IS NOT NULL AND DATEDIFF(day, [ending_date], [target_date]) <= 0  THEN 1 END) AS on_schedule_tasks,
        COUNT(CASE WHEN [ending_date] IS NOT NULL THEN 1 END) AS total_tasks,
        id_employee
  FROM (SELECT t.id_task, t.task_name, t.id_employee, CONCAT(emp.name, ' ', emp.surname) AS employee_name, 
  t.id_project, p.project_name, CAST(t.starting_date AS varchar) AS starting_date, 
  CAST(t.target_date AS varchar) AS target_date, CAST(t.ending_date AS varchar) AS ending_date
  FROM tasks AS t
  LEFT JOIN [dbo].[employees] AS emp
  ON t.id_employee=emp.id_employee
  inner JOIN (SELECT p.id_project, p.project_name, p.budget, p.hours, 
  CONCAT(e.name, ' ',  e.surname) AS manager_name, CAST(p.starting_date AS varchar) AS starting_date, 
  CAST(p.target_date AS varchar) AS target_date 
  FROM [dbo].[projects] AS p
  INNER JOIN [dbo].[employees] AS e
  ON p.id_manager=e.id_employee
  WHERE e.id_user=?) AS p
  ON p.id_project=t.id_project) tasks
  GROUP BY [id_employee]) as t
  LEFT JOIN [dbo].[employees] AS e
  ON E.id_employee=T.id_employee";
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
  die(print_r(sqlsrv_errors(), true));
}