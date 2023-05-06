
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT t.id_teams, CONCAT(e.name, ' ',  e.surname) AS employee_name, e.id_employee AS id_emp
  FROM [dbo].[teams] AS t
  INNER JOIN [dbo].[employees] AS e
  ON t.id_teams = e.id_team
  WHERE t.id_manager = 4"; // 4 - id manager logat
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $team = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($team, $row);
  }
  
  echo json_encode($team);
  
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
