
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

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