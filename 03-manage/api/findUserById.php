<?php 
    header('Content-Type:application/json;charset=utf-8');

    require 'db.php';

    $id = $_GET['id'];
  
    $sql="select * from user where id = ". $id;

    $result = mysql_query($sql);

    $list = array();
    $total = 0;
    while($row = mysql_fetch_array($result)){
        $item = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'sex' => $row['sex'],
            'academy' => $row['academy'],
            'introduce' => $row['introduce'],
            'createTime' => $row['createTime'],
        );
        echo json_encode($item);
    }

    mysql_close($con);

?>