
let input = document.querySelector('input');
let form = document.querySelector('form');
let btnForm = document.querySelector('form button');
let ulLista = document.querySelector('ul');
let btnMarcarTodas = document.getElementById('btn-marcar-todas')

function marcarTodas() {
    let todasTarefas = document.querySelectorAll('li');
    todasTarefas.forEach(function (itemli) {
        let desmarcarTodas = itemli.classList.toggle('marcado')
        btnMarcarTodas.innerHTML = `${desmarcarTodas ? "Desmarcar todas" : "Marcar todas"}`;
    })
}

btnMarcarTodas.addEventListener('click',marcarTodas)

function marcarTarefa(e) {
    //e.target é o elemento que recebeu o evento
    e.target.classList.toggle('marcado');
}
function deletarTarefa(e) {
   ulLista.removeChild(e.target.parentElement);
}

function adicionarTarefa(e) {
    e.preventDefault();

    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = input.value;
    ulLista.appendChild(itemDaLista);
    itemDaLista.addEventListener('click', marcarTarefa)
    
    let btnDeletarTarefa = document.createElement('button');
    itemDaLista.appendChild(btnDeletarTarefa);
    btnDeletarTarefa.addEventListener('click', deletarTarefa)

    
    
    


}
form.addEventListener('submit', adicionarTarefa);



