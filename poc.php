<?php
  $d = json_encode($_SERVER);
  $l = __DIR__."/data.txt";
  file_put_contents($l, $d)
?>
