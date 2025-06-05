function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item_button==return');
        botao.textContent = 'Alugar';
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
         botao.classList.add('dashboard__item_button==return');
    }
 alerta();
    console.log(`Status do jogo ${id} alterado.`);
}
function alerta(){
    //não funcionou
    if (confirm("Tem certeza que deseja mudar o status este item?")) {
    console.log("Status alterado com sucesso.");
    alert("Status alterado com sucesso.");
} else {
    console.log("Ação cancelada pelo usuário.");
    alert("Ação cancelada pelo usuário.");
}
}
alugados = 1;
function totalAlugados(alugados) {
    console.log(alugados);
}