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
        titulo: "Letras em Metal com Relevo",
        descricao: "Valorize sua marca com letras metálicas em relevo que transmitem sofisticação, modernidade e alto padrão.",
    },
    {
        id: 4,
        titulo: "Cardápio Digital Interativo",
        descricao: "Modernize o atendimento do seu negócio com um cardápio digital prático e acessível via QR Code.",
    },
    {
        id: 5,
        titulo: "Cartão de visita em alto relevo",
        descricao: "Cartão de visita premium com acabamento em alto relevo que valoriza cada detalhe do seu design.",
    },

    {
        id: 6,
        titulo: "Cordões Personalizados com Crachá",
        descricao: "Cordões profissionais com impressão de alta qualidade, ideais para empresas e eventos. Oferecem resistência, praticidade e fortalecem a identidade visual da sua marca.",
    },
    {
        id: 7,
        titulo: "Cadernos personalizados",
        descricao: "Cadernos com design exclusivo e acabamento de qualidade, ideais para organização no dia a dia. Perfeitos para uso pessoal, escolar ou profissional, unindo praticidade e estilo.",
    },
    {
        id: 8,
        titulo: "Letreiros luminosos personalizados",
        descricao: "Soluções em iluminação com design moderno e acabamento profissional, ideais para eventos, empresas e ambientes comerciais. Destaque sua marca com impacto visual e sofisticação.",
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