
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT u.id_user, e.name, e.surname, u.email, e.status, t.team_name 
  FROM  [dbo].[employees] AS e
  INNER JOIN [dbo].[users] AS u
  ON e.id_user=u.id_user 
  LEFT JOIN [dbo].[teams] AS t
  ON e.id_team=t.id_teams";
  
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

?>
