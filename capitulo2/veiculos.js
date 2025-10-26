var inVeiculo=document.getElementById('inVeiculo');
var inPreco=document.getElementById('inPreco')
var outVeiculo=document.getElementById('outVeiculo');
var outParcela=document.getElementById('outParcela');
var outEntrada=document.getElementById('outEntrada');

var botao=document.getElementById('bot')
.addEventListener('click', revendaVeiculo =>{

    let veiculo=inVeiculo.value;
    let preco=Number(inPreco.value);

    outVeiculo.textContent="Promoção " + veiculo;
    outEntrada.textContent="Entrada de R$: "+ preco/2;
    outParcela.textContent="+ 12X de R$: " + (preco.toFixed(2) * 0.50)/12;

} )