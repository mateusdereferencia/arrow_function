// Atividade 1//

// "Function dobra" vai dobrar os números
// "Const dobrar" vai definir os números
// "Let a " dobra os números da  lista e mostra o resultado

function dobra(a) {
    return a * 2;
}
const dobrar = () => {
    let numeros = [1,2,3,4,5] 

    let a = numeros.map((numero) =>dobra(numero)) 
    console.log(a) 

}

// Atividade 2//

// "Function ordenar e sort" ordena as palavras
// "Console.log" mostra o resultado
function ordenar() {
let palavras = ["jec", "joinville", "coelho", "tricolor"]
palavras.sort((a,b) => a.length - b.length)
console.log(palavras)
}

// Atividade 3//

// "Var Lista" mostra os números que serão usados
// "Var listaFiltrada" seleciona apenas os números pares
// "Return lista.filter" mostra a lista
function numeros(){
   var lista = [2, 3, 4, 5, 6] 
   var listaFiltrada = filtrarLista(lista)
   console.log(listaFiltrada)
}


const filtrarLista = (lista) => {
    return lista.filter((value) => value % 2 == 0)
};