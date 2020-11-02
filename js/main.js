// animação só ocorre ao clicar

const card = document.querySelectorAll('.card');

// laço de repetição pra constante
card.forEach((card) => {
    card.addEventListener('click', () => {
        // add nome na classe (?)
        card.classList.toggle('is-flipped');
    });
});