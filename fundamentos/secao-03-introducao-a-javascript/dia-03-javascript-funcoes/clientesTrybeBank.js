let clientesTrybeBank = ['Ada', 'John', 'Gus'];

//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

function adicionaCliente(newClient) {
    if (typeof newClient === 'string') {
        clientesTrybeBank.push(newClient);
        return ("Cliente "+newClient+" cadastrado com sucesso!");
    }
    else {
        return 'O parâmetro passado deve ser do tipo "string"';
    }
}

console.log(adicionaCliente('Rodrigo'));

//Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

function excluiCliente (cliente) {
    if (typeof cliente === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                return ("Cliente "+ cliente + " excluido com sucesso!");
            }
        }
    }
    else {
        return 'O parâmetro passado deve ser do tipo "string"';
    }
}

console.log(excluiCliente('John'), clientesTrybeBank);
