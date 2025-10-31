
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('ativo');
  menuToggle.classList.toggle('ativo');
});




function aplicarMascaraCPF(input) {
  let valor = input.value.replace(/\D/g, '');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  input.value = valor;
}

function aplicarMascaraTelefone(input) {
  let valor = input.value.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d{5})(\d{4})$/, '$1-$2');
  input.value = valor;
}

function aplicarMascaraCEP(input) {
  let valor = input.value.replace(/\D/g, '');
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
  input.value = valor;
}


const inputCPF = document.getElementById('cpf');
const inputTelefone = document.getElementById('telefone');
const inputCEP = document.getElementById('cep');

if(inputCPF) inputCPF.addEventListener('input', () => aplicarMascaraCPF(inputCPF));
if(inputTelefone) inputTelefone.addEventListener('input', () => aplicarMascaraTelefone(inputTelefone));
if(inputCEP) inputCEP.addEventListener('input', () => aplicarMascaraCEP(inputCEP));



const form = document.getElementById('formCadastro');

form.addEventListener('submit', function(event) {
  event.preventDefault();


  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '2000';

  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#ffffff';
  modalContent.style.padding = '2rem';
  modalContent.style.borderRadius = '8px';
  modalContent.style.textAlign = 'center';
  modalContent.innerHTML = `
    <h2>Formulário enviado!</h2>
    <p>Obrigado por se cadastrar como voluntário da GreenMove.</p>
    <button id="btnRedirecionar">Ir para a página inicial</button>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

 
  document.getElementById('btnRedirecionar').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});
