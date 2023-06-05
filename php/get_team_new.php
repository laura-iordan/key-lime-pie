
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
    $id_user=$_GET['id_user'];
  $sql = "SELECT e.id_employee, e.name, e.surname, u.email, t.team_name 
  FROM  [dbo].[employees] AS e
  INNER JOIN [dbo].[users] AS u
  ON e.id_user=u.id_user 
  LEFT JOIN [dbo].[teams] AS t
  ON e.id_team=t.id_teams
  WHERE e.status=1 AND u.id_role <> 1 AND t.id_manager = (SELECT m.id_manager FROM [dbo].[employees] AS e
INNER JOIN [dbo].[managers] AS m
ON e.id_employee = m.id_employee
WHERE e.id_user=?)";
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

?>
