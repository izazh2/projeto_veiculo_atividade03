import { calcularIpva } from "./script_calculo"

const form = document.querySelector("form")

const lista = document.querySelector("#lista-veiculo")

form.addEventListener("submit", function(evt){
    evt.preventDefault()
    
    const modelo = document.querySelector('#modelo').value
    const marca = document.querySelector('#marca').value
    const placa = document.querySelector('#placa').value
    const ano = document.querySelector('#ano').value
    const valor = document.querySelector('#valor').value

    const combustivel = document.querySelector("input[name = 'combustivel']: checked").value
})