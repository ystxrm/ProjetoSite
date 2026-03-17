// var Data = [
//     {
//         title: "Produto 1",
//         description: "Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas e brindes personalizados.",
//         image: "item1.png"
//     },
//     {
//         title: "Produto 2",
//         description: "Soluções completas em comunicação visual, impressão e personalização para destacar sua marca.",
//         image: "item2.png"
//     },
//     {
//         title: "Produto 3",
//         description: "Produção de placas e letreiros personalizados para empresas, com acabamento moderno e alta qualidade.",
//         image: "item3.png"
//     },
//     {
//         title: "Produto 4",
//         description: "Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas e brindes personalizados.",
//         image: "item4.png"
//     },
//     {
//         title: "Produto 5",
//         description: "Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas e brindes personalizados.",
//         image: "item5.png"
//     },
//     {
//         title: "Produto 6",
//         description: "Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas e brindes personalizados.",
//         image: "item6.png"
//     },
//     {
//         title: "Produto 7",
//         description: "Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas e brindes personalizados.",
//         image: "item7.png"
//     },
//     {
//         title: "Produto 8",
//         description: "Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas e brindes personalizados.",
//         image: "item8.png"
//     },
// ]

// document.addEventListener("DOMContentLoaded", function () {
//     const container = document.getElementById("card1");
//     let cards = "";
//     Data.forEach(c => {
// cards += ` 
// <img src="/img/item1.png" ${c.image}class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${c.title}Gravação em metal/aço</h5>
//             <p class="card-text">${c.description}Personalização em metal com gravação de alta precisão. Ideal para copos, cantis, placas
//                 e brindes personalizados.</p>
//             <a href="#" class="btn-btn-primary"> <button>Entrar em contato!</button> </a>
//         </div>
//     </div>
// `
// container.innerHTML = cards
//     });
// })