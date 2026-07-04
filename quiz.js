// =============================================
//  MOTOR DO QUIZ
// =============================================

let quizAtual = null;
let perguntaAtual = 0;
let pontuacao = [];

// Pega o id do quiz pela URL: quiz.html?id=harry-potter
function getIdDaURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function iniciarQuiz() {
    const id = getIdDaURL();
    quizAtual = QUIZZES.find(q => q.id === id);

    if (!quizAtual) {
        document.body.innerHTML = '<p style="color:white;padding:40px">Quiz não encontrado.</p>';
        return;
    }

    document.title = quizAtual.titulo + ' — Cineverse';
    perguntaAtual = 0;
    pontuacao = new Array(quizAtual.personagens.length).fill(0);

    document.getElementById('quiz-franquia').textContent = quizAtual.franquia;
    document.getElementById('quiz-titulo').textContent = quizAtual.titulo;

    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = quizAtual.perguntas[perguntaAtual];
    const total = quizAtual.perguntas.length;
    const progresso = ((perguntaAtual) / total) * 100;

    document.getElementById('progresso-fill').style.width = progresso + '%';
    document.getElementById('progresso-texto').textContent =
        `Pergunta ${perguntaAtual + 1} de ${total}`;

    document.getElementById('pergunta-texto').textContent = pergunta.texto;

    const container = document.getElementById('alternativas');
    container.innerHTML = '';

    pergunta.alternativas.forEach((alt, i) => {
        const btn = document.createElement('button');
        btn.className = 'alternativa';
        btn.textContent = alt.texto;
        btn.onclick = () => responder(i);
        container.appendChild(btn);
    });
}

function responder(indice) {
    const alt = quizAtual.perguntas[perguntaAtual].alternativas[indice];

    // Soma pontos
    alt.pontos.forEach((p, i) => { pontuacao[i] += p; });

    // Destaca visualmente a escolha
    const botoes = document.querySelectorAll('.alternativa');
    botoes.forEach(b => b.disabled = true);
    botoes[indice].classList.add('selecionada');

    setTimeout(() => {
        perguntaAtual++;
        if (perguntaAtual < quizAtual.perguntas.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }, 400);
}

function mostrarResultado() {
    // Encontra o personagem com mais pontos
    const maxIdx = pontuacao.indexOf(Math.max(...pontuacao));
    const personagem = quizAtual.personagens[maxIdx];

    document.getElementById('tela-quiz').classList.add('escondido');
    const telaResultado = document.getElementById('tela-resultado');
    telaResultado.classList.remove('escondido');

    document.getElementById('resultado-img').src = personagem.imagem;
    document.getElementById('resultado-img').alt = personagem.nome;
    document.getElementById('resultado-nome').textContent = personagem.nome;
    document.getElementById('resultado-desc').textContent = personagem.descricao;

    // Barra de progresso em 100%
    document.getElementById('progresso-fill').style.width = '100%';
}

function reiniciarQuiz() {
    document.getElementById('tela-resultado').classList.add('escondido');
    document.getElementById('tela-quiz').classList.remove('escondido');
    iniciarQuiz();
}

// Inicia ao carregar a página
window.addEventListener('DOMContentLoaded', iniciarQuiz);
