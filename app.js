const botaoHamburger = document.getElementById('btn-hamburger');
const menu = document.getElementById('menu-principal');

botaoHamburger.addEventListener('click', function() {
    menu.classList.toggle('menu-ativo');
    
    const estaAberto = menu.classList.contains('menu-ativo');
    botaoHamburger.setAttribute('aria-expanded', estaAberto);
});
const form = document.getElementById('form-cadastro');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validaFormulario()) {
        alert('Cadastro enviado com sucesso! A ONG Driblando o Destino agradece!');
    }
});
function exibirErro(elementoInput, mensagem) {
    const divErro = document.createElement('div');
    divErro.classList.add('erro-validacao');
    divErro.style.color = 'red';
    divErro.style.marginTop = '5px';
    divErro.style.fontSize = 'var(--fonte-tamanho-sm)';
    divErro.textContent = mensagem;
    elementoInput.parentNode.insertBefore(divErro, elementoInput.nextSibling);
}
function validaFormulario() {
    let isValid = true;
    const msgsErro = document.querySelectorAll('.erro-validacao');
    msgsErro.forEach(msg => msg.remove());
    const cpfInput = document.getElementById('cpf');
    const cpfValor = cpfInput.value.replace(/\D/g, ''); 
    if (cpfValor.length !== 11) {
        exibirErro(cpfInput, 'O CPF deve ter 11 dígitos.');
        isValid = false;
    } 
const dataInput = document.getElementById('nascimento');
    const dataValor = new Date(dataInput.value);
    const dataMinima = new Date();
    dataMinima.setFullYear(dataMinima.getFullYear() - 5);
    if (dataValor >= dataMinima) {
        exibirErro(dataInput, 'Você precisa ter mais de 5 anos para se voluntariar.');
        isValid = false;
    }
    
    return isValid;
}