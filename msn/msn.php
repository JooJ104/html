<?php

include "db.php";

		$consulta = "SELECT * FROM tb_msn ORDER BY id DESC";
		$executar = $conexao->query($consulta);
		while($linha = $executar->fetch_array()):
		?>
				<div id="dados-msn">
			<span style= "color: black;"> <?php echo $linha['nome']; ?> </span>
			<span style= "color: black;"> <?php echo $linha['mensagem']; ?> </span>
			<span style= "float: right;"> <?php echo formatarData($linha['data']); ?> </span>
		</div>
		<?php endwhile; ?> 