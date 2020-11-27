<?php

    require_once "conexao.php";

    $sql = "SELECT produtos.categoria, produtos.descricao, produtos.imagem, preco.preco, preco.preco_venda
            FROM produtos JOIN preco ON produtos.codigo = preco.idpreco";

    $result = $conn->query($sql);

    $array = [];

    while($rows = $result->fetch_assoc()) {
        array_push($array, $rows);
    }

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");

    echo json_encode($array);
?>