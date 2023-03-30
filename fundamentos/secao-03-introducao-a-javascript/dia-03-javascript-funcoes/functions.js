//Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

//Adicione um valor ao saldo.

function adicionaSaldo(valor, saldo) {
    if (saldo >= 0 && valor >= 1) {
        saldo = saldo + valor;
        return ("Novo saldo: " + saldo);
    }
    else {
        return "Valor ou saldo invalidos";
    }
}

console.log(adicionaSaldo(350, 1000))

//Subtraia um valor do saldo.

function subtraiSaldo(valor, saldo) {
    if (saldo >= 0 && valor <= saldo) {
        saldo = saldo - valor;
        return ("Novo saldo: " + saldo);
    }
    else {
        return "Valor ou saldo invalidos";
    }
}

console.log(subtraiSaldo(200, 200));

//Multiplique o valor do saldo por uma taxa.

function multiplicaSaldo(valor, saldo) {
    if (saldo >= 0 && valor >= 1) {
        saldo = saldo * valor;
        return ("Novo saldo: " + saldo);
    }
    else {
        return "Valor ou saldo invalidos";
    }
}

console.log(multiplicaSaldo(2, 200));

//Divida o valor do saldo.

function divideSaldo(valor, saldo) {
    if (saldo > 0 && valor >= 1) {
        saldo = saldo / valor;
        return ("Novo saldo: " + saldo);
    }
    else {
        return "Valor ou saldo invalidos";
    }
}

console.log(divideSaldo(2, 200));
