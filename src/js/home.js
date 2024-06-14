let welcomeMessage = document.getElementById('welcome-message');
let phrases = [
    "Seja Bem vindo! 🎉",
    "Eu sou o João Gabriel Barbosa",
    "Projeto final de semestre",
    "TA",
    "Desenvolvimento Web",
    "Banco de Dados",
    "Linguagem de Programação",
    "Ciência de Dados"
];
let currentPhraseIndex = 0;
let currentPhrase = phrases[currentPhraseIndex];
let index = 0;

function typeWriter() {
    if (index < currentPhrase.length) {
        welcomeMessage.innerHTML = currentPhrase.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (index >= 0) {
        welcomeMessage.innerHTML = currentPhrase.substring(0, index);
        index--;
        setTimeout(eraseText, 50);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        currentPhrase = phrases[currentPhraseIndex];
        index = 0;
        setTimeout(typeWriter, 500);
    }
}

typeWriter();

document.addEventListener('DOMContentLoaded', function() {
var button = document.querySelector('.observacao');
var popup = document.getElementById('popup');
var close = document.getElementById('close');

button.addEventListener('click', function() {
    popup.style.display = 'flex';
});

close.addEventListener('click', function() {
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
var button = document.querySelector('.observacao');
var popup = document.getElementById('popup');
var close = document.getElementById('close');

button.addEventListener('click', function() {
    popup.style.display = 'block';
    document.body.classList.add('blur-background'); // Adiciona o efeito de desfoque ao fundo
});

close.addEventListener('click', function() {
    popup.style.display = 'none';
    document.body.classList.remove('blur-background'); // Remove o efeito de desfoque ao fundo
});

window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
        document.body.classList.remove('blur-background'); // Remove o efeito de desfoque ao fundo
    }
});
});

function redrecionarGithub(){
var urlExterna = 'https://github.com/H4ckta';
window.open(urlExterna, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
var customToggler = document.querySelector('.custom-toggler');
var toggleIcon = document.getElementById('toggleIcon');
customToggler.addEventListener('click', function() {
    if (customToggler.classList.contains('collapsed')) {
        toggleIcon.innerHTML = '&times;'; // Troca de volta para o ícone "x" quando o toogle é fechado
    } else {
        toggleIcon.innerHTML = '&equiv;'; // Troca para o ícone padrão quando o toogle é aberto
    }
});
});


// Função para abrir o pop-up correspondente ao link clicado
function abrirPopup(containerId) {
    // Esconde todos os pop-ups
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Mostra o pop-up específico
    document.getElementById(containerId).style.display = 'block';
}

// Adiciona evento de clique para cada link do menu
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Obtém o ID do contêiner correspondente ao link clicado
        var containerId = event.target.getAttribute('href').slice(1);

        // Abre o pop-up correspondente
        abrirPopup('popup-' + containerId);
    });
});

// Função para fechar o pop-up
document.getElementById('close').addEventListener('click', function() {
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
    });
});

// Função para redirecionar para o GitHub
function github() {
    // Aqui você pode definir o URL do GitHub
    var githubURL = "https://github.com/H4ckta";
    window.open(githubURL, '_blank');
}

function colab() {
    // Aqui você pode definir o URL do GitHub
    var colabURL = "https://colab.research.google.com/drive/1nDS4FdFz8_oApn02wIyHluYtYpwFOYPS";
    window.open(colabURL, '_blank');
}







// Função para abrir o pop-up correspondente ao link clicado
function abrirPopup(containerId) {
    // Esconde todos os pop-ups
    document.querySelectorAll('.popup').forEach(function(popup) {
        popup.style.display = 'none';
    });

    // Mostra o pop-up específico
    document.getElementById(containerId).style.display = 'block';
}

// Adiciona evento de clique para cada link do menu
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Obtém o ID do contêiner correspondente ao link clicado
        var containerId = event.target.getAttribute('href').slice(1);

        // Abre o pop-up correspondente
        abrirPopup('popup-' + containerId);
    });
});

// Adiciona evento de clique para fechar o pop-up quando clicar no botão "X"
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        // Fecha o pop-up
        this.closest('.popup').style.display = 'none';
    });
});

// Função para redirecionar para o GitHub
function redrecionarGithub() {
    // Aqui você pode definir o URL do GitHub
    var githubURL = "https://github.com/seu-usuario";
    window.open(githubURL, '_blank');
}
