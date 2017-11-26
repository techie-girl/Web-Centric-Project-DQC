<?php
$con = mysqli_connect("127.0.0.1","root","root","styleequalsawesome");
//mysql_select_db("styleequalsawesome");
// Check connection
if (!$con)
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  else{
  	echo "It worked!";
  }
 echo "You should read this either way";
?>