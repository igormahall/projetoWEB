// comentário

const coresNeon = ['#00ffe7','#00bcd4','#00ffc3','#ff00cc','#39ff14','#f72585','#3f51b5'];

// Referência ao título

const titulo = document.getElementById('titulo');

// Muda para uma cor aleatória ao clicar no título

titulo.addEventListener('click', function(){
    const corAleatoria = coresNeon[Math.floor(Math.random() * coresNeon.length)];
    titulo.style.color = corAleatoria;
})

// Evento de envio de formulario

// Prevenindo que ele faça o POST
document.getElementById('formulario-contato').addEventListener('submit', function(event){
    event.preventDefault();

    //Vejo se os termos estão "checados"
    const termosAceitos = document.getElementById('termos').checked;

    //Emitir alerta
    if(!termosAceitos){
        alert('Você precisa aceitar os termos de uso para enviar o formulário.');
        return;
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(
        "✅ Formulário enviado com sucesso!\n\n" +
        "📨 Nome: " + nome + "\n" +
        "📧 Email: " + email + "\n" +
        "📌 Assunto: " + assunto + "\n" +
        "📝 Mensagem: " + mensagem + "\n" +
        "📋 Termos aceitos: " + (termosAceitos ? "Sim" : "Não")
    );
    this.reset(); // Limpa o formulário após envio
});

// Pega o ano do site e coloca o ano na data
document.getElementById('ano').textContent = new Date().getFullYear();