function redirecionar(tempoRestante) {
    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = "Você será redirecionado em " + tempoRestante + " segundos";
    
    if (tempoRestante <= 0) {
        window.location.href = "./src/home.html";
    } else {
        setTimeout(function() {
            redirecionar(tempoRestante - 1);
        }, 1000);
    }
}
redirecionar(7);