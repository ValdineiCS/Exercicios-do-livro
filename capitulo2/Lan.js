let inValor = document.getElementById('inValor');
let inTempo=document.getElementById("inTempo");
let res=document.getElementById('res');
let botao=document.getElementById('bot');

botao.addEventListener('click', calcularValor);

function calcularValor(){
   const valor=Number(inValor.value);
   const tempo=Number(inTempo.value);

   const valorF= Math.ceil(tempo/15)*valor;

   res.textContent=`Valor a pagar R$:${valorF}`

}