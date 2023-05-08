
<?php
include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

if ($conn) {
  $sql = "SELECT [project_name], [budget] FROM [dbo].[projects]";
  
  $stmt = sqlsrv_query($conn, $sql);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  $projects = array();
  while ($row = sqlsrv_fetch_object($stmt)) {
    array_push($projects, $row);
  }
  
  echo json_encode($projects);
} else {
  die(print_r(sqlsrv_errors(), true));
}

?>
