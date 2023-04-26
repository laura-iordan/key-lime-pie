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
  $sql = "SELECT * FROM users WHERE username=? AND password=?";
  $params = array($_GET['username'], $_GET['password']);
  
  $stmt = sqlsrv_prepare($conn, $sql, $params);
  if (!$stmt) {
    die(print_r(sqlsrv_errors(), true));
  }
  
  if (sqlsrv_execute($stmt)) {
    $row = sqlsrv_fetch_object($stmt);
    if ($row) {
     echo json_encode($row);
    } else {
      print "Invalid username or password.";
    }
  } else {
    die(print_r(sqlsrv_errors(), true));
  }
}

?>