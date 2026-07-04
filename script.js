// =============================================
//  INDEX — login falso + geração dos cards
// =============================================

// LOGIN FALSO
function abrirModal() {
    document.getElementById('login-modal').classList.add('aberto');
}

function fecharModal() {
    document.getElementById('login-modal').classList.remove('aberto');
}

function loginFalso(event) {
    event.preventDefault();
    const email = document.getElementById('modal-email').value;
    const nome = email.split('@')[0];
    fecharModal();
    const btn = document.querySelector('.btn-login');
    btn.textContent = 'Olá, ' + nome;
    btn.onclick = null;
    btn.style.cursor = 'default';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
});

// GERAR CARDS DOS QUIZZES DINAMICAMENTE
function renderizarCards() {
    const grid = document.getElementById('grid-quizzes');
    if (!grid || typeof QUIZZES === 'undefined') return;

    grid.innerHTML = '';

    QUIZZES.forEach(quiz => {
        const estrelas = gerarEstrelas(quiz.nota);

        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `
            <div class="quiz-card__poster">
                <img src="${quiz.cartaz}" alt="${quiz.titulo}">
                <div class="quiz-card__hover">
                    <button class="quiz-card__jogar">▶ Jogar</button>
                </div>
            </div>
            <div class="quiz-card__info">
                <p class="quiz-card__franquia">${quiz.franquia}</p>
                <div class="quiz-card__estrelas">
                    ${estrelas}
                    <span class="quiz-card__nota">${quiz.nota.toFixed(1)}</span>
                </div>
                <p class="quiz-card__sinopse">${quiz.sinopse}</p>
            </div>
        `;

        card.querySelector('.quiz-card__jogar').addEventListener('click', () => {
            window.location.href = `quiz.html?id=${quiz.id}`;
        });

        grid.appendChild(card);
    });
}

function gerarEstrelas(nota) {
    const total = 5;
    const cheias = Math.floor(nota / 2);
    const meia = (nota / 2) - cheias >= 0.5 ? 1 : 0;
    const vazias = total - cheias - meia;

    let html = '';
    for (let i = 0; i < cheias; i++)  html += '<i class="fa fa-star"></i>';
    if (meia)                          html += '<i class="fa fa-star-half-alt"></i>';
    for (let i = 0; i < vazias; i++)   html += '<i class="far fa-star"></i>';
    return html;
}

window.addEventListener('DOMContentLoaded', renderizarCards);
