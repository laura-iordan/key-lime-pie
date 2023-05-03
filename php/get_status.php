
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: http://localhost:3000');

if ($conn) {
  $sql = "SELECT * FROM [dbo].[status]";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $status = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($status, $row);
  }
  
  echo json_encode($status);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>