<?php

$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "msn";


$conexao = new mysqli($servidor,$usuario,$password,$bd);

function formatarData($data){
	return date('H:i:s',strtotime($data));

}

?>