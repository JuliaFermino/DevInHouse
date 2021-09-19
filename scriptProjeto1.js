
const inputElement = document.querySelector("input")
var insereTarefa = document.getElementById("lista")
var txt = document.getElementById("insereTarefa").value


/* função que verifica input sem texto */
function verifica() {
    if (document.getElementById("insereTarefa").value.length != 0) {
        adicionaTarefa()
    } else {
        alert("Insira uma tarefa!")
    }
}
/* função que adiciona as tarefas */
    function adicionaTarefa() {
        let tarefa = document.createElement("li")
        tarefa.innerHTML = document.getElementById("insereTarefa").value
        insereTarefa.appendChild(tarefa)

            removeTarefa(tarefa)
            checkItem(tarefa)
            salvaLocal (tarefa)
            inputElement.value = ""        
    }

/* função de remover as tarefas */
    function removeTarefa(tarefa) {
        let apagaItem = document.createElement("button")
        let x = document.createTextNode('\uD83D\uDDD1\uFE0F')
        apagaItem.className = "botaoDelete"
        apagaItem.appendChild(x)
        tarefa.appendChild(apagaItem)                
        apagaItem.addEventListener("click", function(){
            if (confirm("Você quer mesmo excluir este item?")) {
                tarefa.innerHTML = apagaItem.parentElement.style.display = "none";}})
        
}

/* função de dar check em um item */
    function checkItem(tarefa) {
        var check = document.createElement("input")
        check.setAttribute("type","checkbox")
        check.className = "botaoCheck"
        tarefa.appendChild(check)
        check.addEventListener("click", function() {
        if (tarefa.style.textDecoration != "line-through") {
        txt.innerHTML = tarefa.style.textDecoration = "line-through";
        } else {
            txt.innerHTML = tarefa.style.textDecoration = "none"
        }
})}
           
/* função de armazenar no localStorage */
function salvaLocal (tarefa) {
    localStorage.setItem('listaDeTarefas', JSON.stringify(tarefa))
}