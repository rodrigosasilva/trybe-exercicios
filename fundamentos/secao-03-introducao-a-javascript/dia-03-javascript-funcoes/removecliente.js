//Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function encontraCliente(cliente) {
  let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clienteEncontrado = true;
        return clienteEncontrado;
      }
    }
    if (clienteEncontrado === false) {
        return clienteEncontrado;
      }
}

function indexCliente(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
}

function removeCliente(cliente) {
  let existeCliente = encontraCliente(cliente);
  
  if (typeof cliente === 'string') {
    if (existeCliente === true) {
      let index = indexCliente(cliente);
      clientesTrybeBank.splice(index, 1);
      return 'Cliente excluída(o) com sucesso.';
    }
    if (existeCliente === false) {
      return 'Cliente não encontrado'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}


console.log(removeCliente('Gus'), clientesTrybeBank);