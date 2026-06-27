import { calculoFinal, calculoIdade, calculoIpva, calculoSeg } from './script_calculo.js'

const veiculos = []

const formVeiculo = document.querySelector('#form-veiculo')
const divLista = document.querySelector('#div-lista')

formVeiculo.addEventListener('submit', (evt)=>{
evt.preventDefault()

    const dadosForm = new FormData(formVeiculo)

    const veiculo = {
        modelo: dadosForm.get('modelo'),
        marca: dadosForm.get('marca'),
        placa: dadosForm.get('placa'),
        anofab: dadosForm.get('ano-fab'),
        valmerc: dadosForm.get('val-merc'),
        comb: dadosForm.get('comb'),
    }


    addVeiculo(veiculo)

    formVeiculo.reset()

})

const addVeiculo = (objVeiculo)=>{
    veiculos.push(objVeiculo)

    listVeiculo()
}

const listVeiculo = () => {
    divLista.innerHTML = ''

    veiculos.forEach((elem, i)=>{
        divLista.innerHTML += `<div class="div-lista-carros"> Veículo ${i + 1} <br> Modelo: ${elem.modelo} <br> Marca: ${elem.marca} <br> Placa: ${elem.placa} <br> Idade do Veículo: ${calculoIdade(elem)} <br> Valor do Seguro: ${calculoSeg(elem)} <br> Valor do IPVA: ${calculoIpva(elem)} <br> Valor Final: ${calculoFinal(elem)}. <p> </div>`
    })

}
