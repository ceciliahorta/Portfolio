const textos = ["Front-end", "Criativa", "Apaixonada por código"];
let index = 0;
let letraIndex = 0;
const typingElement = document.getElementById('typing');

function digitar() {
    if (letraIndex < textos[index].length) {
        typingElement.textContent += textos[index][letraIndex];
        letraIndex++;
        setTimeout(digitar, 100);
    } else {
        setTimeout(apagar, 500)
    }
};

function apagar() {
    if (letraIndex > 0) {
        typingElement.textContent = textos[index].substring(0, letraIndex - 1);
        letraIndex--;
        setTimeout(apagar, 100);
    } else {
        index = (index + 1) % textos.length;
        setTimeout(digitar, 500);
    }
}

digitar();

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

fetch('projetos.json') 
    .then(response => response.json())
    .then(projetos => {
        const grid = document.querySelector(".grid-projetos");

        projetos.forEach(projeto => {
            const card = document.createElement('article');
            card.classList.add('card');
            card.innerHTML = `
            <img src="./img/${projeto.imagem}" alt="${projeto.alt}">
            <h3>${projeto.titulo}</h3>
            <p>Tecnologias: ${projeto.tecnologias}</p>
            <a href="${projeto.projeto}" target="_blank">Ver projeto</a>
            `;
            grid.appendChild(card);
        });
    });