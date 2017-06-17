<?php 
if (!empty($_POST['phone'])){


  //$mailto = '4avtoby@gmail.com,info@increase.by';     
  $mailto = 'tttt.sgsg@yandex.ru';     
  $theme = '=?utf-8?B?'. base64_encode('Письмо с сайта belan.by') .'?=';
  $eol = "\n";
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859-1';
  $headers[] = 'From: 4avto.by <info@4avto.by>';

  $name = htmlspecialchars(trim($_POST['name']));
  $phone = htmlspecialchars(trim($_POST['phone']));
  $area = htmlspecialchars(trim($_POST['area']));
  $region = htmlspecialchars(trim($_POST['region']));
  $valToSend = htmlspecialchars(trim($_POST['valToSend']));

  $calc_cost1 = htmlspecialchars(trim($_POST['calc-cost1']));
  $calc_cost2 = htmlspecialchars(trim($_POST['calc-cost2']));
  $calc_cost3 = htmlspecialchars(trim($_POST['calc-cost3']));
  $calc_cost4 = htmlspecialchars(trim($_POST['calc-cost4']));
  $calc_cost5 = htmlspecialchars(trim($_POST['calc-cost5']));
  $roof_color = htmlspecialchars(trim($_POST['roof-color']));

  $letter.=  "<html><body>";
  $letter.=  "<strong>Из формы:</strong> $valToSend<br/><br/>";

  if($name) {
    $letter.=  "<strong>Имя:</strong> $name<br/><br/>";
  }
  if($phone){
     $letter.=  "<strong>Телефон:</strong> $phone<br/><br/>";
  }
  if($area){
     $letter.=  "<strong>Площадь:</strong> $area<br/><br/>";
  }
  if($region){
     $letter.=  "<strong>Место доставки:</strong> $region<br/><br/>";
  }
  if($calc_cost1){
     $letter.=  "<strong>Цвет цокольного этажа:</strong> $calc_cost1<br/><br/>";
  }
  if($calc_cost2){
     $letter.=  "<strong>Цвет первого этажа:</strong> $calc_cost2<br/><br/>";
  }
  if($calc_cost3){
     $letter.=  "<strong>Цвет второго этажа:</strong> $calc_cost3<br/><br/>";
  }
  if($calc_cost4){
     $letter.=  "<strong>Цвет декора:</strong> $calc_cost4<br/><br/>";
  }
  if($calc_cost5){
     $letter.=  "<strong>Цвет дымохода:</strong> $calc_cost5<br/><br/>";
  }
  if($roof_color){
     $letter.=  "<strong>Цвет крыши:</strong> $roof_color<br/><br/>";
  }
  $letter.=  "</body></html>";

  if (mail($mailto, $theme, $letter, implode("\r\n", $headers))){
    echo "1";
  } else {
    echo "3";
  }
} else {
  echo "2";
}

?>