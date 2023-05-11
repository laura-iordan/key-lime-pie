
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT status.status, COUNT(employees.id_employee) AS count
  FROM status
  LEFT JOIN employees ON status.id_status = employees.status
  GROUP BY status.status";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $activ = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($activ, $row);
  }
  
  echo json_encode($activ);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
