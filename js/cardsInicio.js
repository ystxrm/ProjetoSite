const meusProdutos = [
    {
        id: 1,
        titulo: "Garrafas Térmicas",
        descricao: "Personalização exclusiva para a sua marca.",
    },
    {
        id: 2,
        titulo: "Cartão de Visita Personalizado",
        descricao: "Apresente sua empresa com profissionalismo e estilo através dos nossos cartões de visita personalizados.",
    },
    {
        id: 3,
        titulo: "Copos Stanley",
        descricao: "Mantenha sua bebida gelada por horas.",
    },
    {
        id: 4,
        titulo: "Copos Stanley",
        descricao: "Mantenha sua bebida gelada por horas.",
    },
    {
        id: 5,
        titulo: "Copos Stanley",
        descricao: "Mantenha sua bebida gelada por horas.",
    },

    {
        id: 6,
        titulo: "Copos Stanley",
        descricao: "Mantenha sua bebida gelada por horas.",
    },
    {
        id: 7,
        titulo: "Copos Stanley",
        descricao: "Mantenha sua bebida gelada por horas.",
    },
    {
        id: 8,
        titulo: "Copos Stanley",
        descricao: "Mantenha sua bebida gelada por horas.",
    },


]

function carregarProdutos() {
    const container = document.querySelector('.cards-container');

    container.innerHTML = "";

    meusProdutos.forEach(produto => {
        const cardHTML = `
            <div class="product-card">
                <div class="card-content">
                    <div class="card-image">
                        <img src="img/produtos/item${produto.id}.png" alt="${produto.titulo}">
                    </div>
                    <h2 class="card-title">${produto.titulo}</h2>
                    <p class="card-description">${produto.descricao}</p>
                    <a href="https://wa.me/5561986335974?text=Quero%20solicitar%20um%20orçamento!" target="_blank">
                        <button class="card-button">Entrar em contato!</button>
                    </a>
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
}

document.addEventListener('DOMContentLoaded', carregarProdutos);