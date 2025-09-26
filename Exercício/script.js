const form = document.getElementById('form-endereco');
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const numeroInput = document.getElementById('numero');
const ufInput = document.getElementById('uf');
const complementoInput = document.getElementById('complemento');

cepInput.addEventListener('input', (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    event.target.value = value;
});

ufInput.addEventListener('input', (event) => {
    event.target.value = event.target.value.toUpperCase();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepInput.value) {
        alert('O campo CEP é obrigatório.');
        return;
    }
    if (!cepRegex.test(cepInput.value)) {
        alert('CEP inválido. O formato deve ser 00000-000.');
        return;
    }

    if (!logradouroInput.value) {
        alert('O campo Logradouro é obrigatório.');
        return;
    }
    if (logradouroInput.value.trim().length < 5) {
        alert('Logradouro inválido. Deve ter no mínimo 5 caracteres.');
        return;
    }

    const numeroRegex = /^\d+$/;
    if (!numeroInput.value) {
        alert('O campo Número é obrigatório.');
        return;
    }
    if (!numeroRegex.test(numeroInput.value)) {
        alert('Número inválido. Deve conter apenas dígitos.');
        return;
    }

    const ufRegex = /^[A-Z]{2}$/;
    if (!ufInput.value) {
        alert('O campo UF é obrigatório.');
        return;
    }
    if (!ufRegex.test(ufInput.value)) {
        alert('UF inválida. Deve conter 2 letras maiúsculas.');
        return;
    }

    alert('Endereço cadastrado com sucesso');
});

