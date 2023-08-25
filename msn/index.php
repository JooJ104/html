
<?php
include "db.php";
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title> ATEZAPI</title>
	<link rel="stylesheet" href="estilo.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">

<script type="text/javascript">
	function ajax(){
		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState == 4 && req.status == 200){
				document.getElementById('msn').innerHTML = req.responseText;
			}
		}
		req.open('GET', 'msn.php', true);
		req.send();
	}
	setInterval(function(){ajax();}, 1000)
</script>

 <title>ATEZAPI³</title>

</head>

<body onload="ajax();">

<div id="conteudo">
		<div id="caixa-msn">
	<div id="msn">
		
	</div>	
</div>

	<form method="POST" action="index.php">
		<input type="text" name="nome" placeholder="Preencha seu nome">
		<textarea name="mensagem" placeholder="Insira uma mensagem"></textarea>
		<input type="submit" name="enviar" value="Enviar">
	</form>

	<?php



	if(isset($_POST['enviar'])){
		$nome = $_POST['nome'];
		$mensagem = $_POST['mensagem'];
		$consulta = "INSERT INTO tb_msn (nome, mensagem) VALUES ('$nome' , '$mensagem')";
		$executar = $conexao->query($consulta);
		if($executar){
			echo "<embed loop='false' src='som2.mp3' hidden='true' autoplay='true'>";
		}
	}

	?>

</div>	

</body>
</html>