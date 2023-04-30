
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: http://localhost:3000');

if ($conn) {
  $sql = "SELECT * FROM [dbo].[role] WHERE id_role>1";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $roles = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($roles, $row);
  }
  
  echo json_encode($roles);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
