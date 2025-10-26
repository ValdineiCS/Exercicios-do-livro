let inValor=document.getElementById('inValor');
let inConsumo=document.getElementById('inConsumo');
let outValor=document.getElementById('outValor');
let botao=document.getElementById('bot');

botao.addEventListener('click', calcularPreco=>{
   let valor=Number(inValor.value);
   let consumo=Number(inConsumo.value);
   
   let vQuilo=(valor/1000)*consumo;
   
   outValor.textContent='Valor a pagar R$: '+vQuilo;
})