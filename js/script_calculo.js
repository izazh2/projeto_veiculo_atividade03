const taxaIpva = {
    gasolina: 0.20,
    etanol: 0.15,
    bicombustivel: 0.10,
    hibrido: 0.08,
    eletrico: 0.02
}

export function calcularIpva(valor, combustivel, ano){
    const anoAtual = new
    Date().getFullYear()
    const idade = anoAtual - ano

    if (idade > 20){
        return "Inseto"
    }

    const taxa = taxaIpva[combustivel]
    return valor * taxa
}


