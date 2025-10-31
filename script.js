const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('ativo');
  menuToggle.classList.toggle('ativo');
});


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // evita envio real do formulário

  // Checa se todos os campos obrigatórios estão preenchidos
  if (form.checkValidity()) {
    // Cria o container da mensagem
    const mensagem = document.createElement('div');
    mensagem.style.position = 'fixed';
    mensagem.style.top = '50%';
    mensagem.style.left = '50%';
    mensagem.style.transform = 'translate(-50%, -50%)';
    mensagem.style.backgroundColor = '#ffffb3';
    mensagem.style.color = '#1b2626';
    mensagem.style.padding = '2rem';
    mensagem.style.borderRadius = '10px';
    mensagem.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    mensagem.style.textAlign = 'center';
    mensagem.style.zIndex = '10000';

    mensagem.innerHTML = `
      <p><strong>Formulário enviado!</strong></p>
      <button id="voltar">Voltar para a página inicial</button>
    `;

    document.body.appendChild(mensagem);

    // Redireciona ao clicar no botão
    document.getElementById('voltar').addEventListener('click', () => {
      window.location.href = 'index.html';
    });

    // Opcional: limpar formulário
    form.reset();
  } else {
    form.reportValidity(); // mostra mensagem de campos obrigatórios
  }
});