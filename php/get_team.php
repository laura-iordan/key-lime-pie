
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {


  $id_team = $_GET['id_team'];
  $sql = "SELECT t.team_name, t.id_manager, CONCAT(e.name, ' ', e.surname) AS manager_name
  FROM [dbo].[teams] AS t
  LEFT JOIN [dbo].[managers] AS m
  ON t.[id_manager]= m.id_manager
  LEFT JOIN [dbo].[employees] AS e
  ON m.id_employee=e.id_employee
  WHERE id_teams=?";
  $params = array($id_team);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  echo json_encode($row = sqlsrv_fetch_object($stmt));
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
