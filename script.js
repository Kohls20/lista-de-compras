
let texto = document.querySelector("input#entrada")
let lista = document.querySelector("ul#lista")
let valores = [""]

function inLista(n, l) {
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {

    if (!inLista(texto.value, valores)) {
        valores.push(texto.value)
        let item = document.createElement('li')
        item.innerHTML = `${texto.value}`
        lista.appendChild(item)
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    texto.value = ""
    texto.focus()
}

function limpar() {
    valores = [""]
    lista.innerHTML = ""
}
