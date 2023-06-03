<?php 
/*$servername = "LAP-ILK-G3\SQLEXPRESS";
$username = "sa";
$password = "";

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";*/

/*$server_name = "LAP-ILK-G3\SQLEXPRESS";
$connection = array("Database"=>"dashboard", "UID"=>"sa", "PWD"=>"laura");
$conn = sqlsrv_connect($server_name, $connection);

if($conn){
	echo "Connection establish!";
} else{
	echo "Connection could not be established";
	die(print_r(sqlsrv_errors(), true));
}*/

/*$conn = new PDO('sqlsrv:Server=LAP-ILK-G3\SQLEXPRESS;  Database=dashboard', 'laura', '1234');

if ($conn)
{
    echo "Connection established";
}
else {
    echo "Connection not established";
}*/

$serverName = "DESKTOP-1CCJF25\SQLEXPRESS"; //serverName\instanceName

// Since UID and PWD are not specified in the $connectionInfo array,
// The connection will be attempted using Windows Authentication.
$connectionInfo = array( "Database"=>"dashboard");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
     //echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}

?>