<?php

$titulo = 'TP1 - EJ7';

include_once '../../../estructura/cabecera_tp1.php';
include '../../../../control/1/control_ej7.php';

$control = new control_ej7();
$calculo = $control->realizarOperacion($_GET);
?>

<div class="container-main">
    <?php

    echo $calculo;

    ?>
</div>

<?php
include_once '../../../estructura/pie.php';
?>