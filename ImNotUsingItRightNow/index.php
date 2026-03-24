<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - Miolo</title>
    <link rel="stylesheet" href="cards.css">
</head>

<body>

    <div class="cards-container">
        <?php
        $sql = "SELECT * FROM produtos";
        $busca = $conn->query($sql);

        while ($produto = $busca->fetch_assoc()) {
            ?>
            <div class="product-card">
                <div class="card-image">
                    <img src="<?php echo $produto['imagem']; ?>" alt="<?php echo $produto['titulo']; ?>">
                </div>
                <div class="card-content">
                    <h2 class="card-title"><?php echo $produto['titulo']; ?></h2>
                    <p class="card-description"><?php echo $produto['descricao']; ?></p>
                    <a href="<?php echo $produto['link_botao']; ?>" style="text-decoration: none;">
                        <button class="card-button">Entrar em contato!</button>
                    </a>
                </div>
            </div>
        <?php } ?>
    </div>

    <script src="script.js"></script>
</body>

</html>