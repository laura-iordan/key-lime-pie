
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {


  $id_user = $_GET['id_user'];
  $sql = "SELECT u.username, u.email, u.id_role, e.name, e.surname, e.SSN, e.address, e.phone_no, e.hourly_fee, e.status 
  FROM  [dbo].[employees] AS e
  LEFT JOIN [dbo].[users] AS u
  ON e.id_user=u.id_user 
  WHERE u.id_user = ?";
  $params = array($id_user);
  
  $stmt = sqlsrv_query($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  /*$users = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($users, $row);
  }*/
  
  echo json_encode($row = sqlsrv_fetch_object($stmt));
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
