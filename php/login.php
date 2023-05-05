<?php
/**include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: http://localhost:3000');

if($conn){
    //$username = $_POST['username'];
    //$password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='laura'";

    //$sql = "INSERT INTO users(username, email, password) VALUES(?, ?, ?)";
    //$params = array($username, $email, $password);
    $method=$_SERVER['REQUEST_METHOD'];
    switch($method){
        case "GET":
            $stmt = sqlsrv_query( $conn, $sql);
            if( $stmt === false) {
                die( print_r( sqlsrv_errors(), true) );
            }
        
            print json_encode(sqlsrv_fetch_object( $stmt));

    }
   
    
}*/

include "dbsqlconnection.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: http://localhost:3000');

if ($conn) {
  echo $username = $_POST['username'];
  $sql = "SELECT * FROM users WHERE username=?";
  $params = array($username);
  
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