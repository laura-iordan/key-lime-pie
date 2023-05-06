
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT t.id_teams, t.team_name, CONCAT(e.name, ' ',  e.surname) AS manager_name
  FROM [dbo].[teams] AS t
  INNER JOIN [dbo].[employees] AS e
  ON t.id_manager=e.id_employee";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $teams = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($teams, $row);
  }
  
  echo json_encode($teams);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
