function buscarEndereco() {
    let cep = document.getElementById('cep').value;
    let urlAPI = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(urlAPI)
        .then(response => response.json())  // Corrigido o nome da variável para 'response'
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro;
            document.getElementById('bairro').value = dados.bairro;
            document.getElementById('cidade').value = dados.localidade;
            document.getElementById('uf').value = dados.uf;
            document.getElementById('complemento').value = dados.complemento;
        })
        .catch(error => console.error('Erro ao buscar o endereço:', error));
}



function TestaCPF(cpf) {
    cpf = document.getElementById('CPF').value
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica formato
    console.log(cpf)

    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
}
   
