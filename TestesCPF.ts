function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    function somarDigito(baseCPF, pesoInicial) {
        let soma = 0;
        for (let i = 0; i < baseCPF.length; i++) {
            soma += parseInt(baseCPF[i]) * pesoInicial;
            pesoInicial--;
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    const primeiroDigito = somarDigito(cpf.slice(0, 9), 10);
    const segundoDigito = somarDigito(cpf.slice(0, 10), 11);

    return primeiroDigito === parseInt(cpf[9]) && segundoDigito === parseInt(cpf[10]);
}


console.log(validarCPF("123.456.789-09"));
console.log(validarCPF("111.444.777-35")); 
