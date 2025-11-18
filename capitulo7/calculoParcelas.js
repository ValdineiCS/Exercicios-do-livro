let inPreco=document.getElementById('inPreco');
let btPagamento=document.getElementById('btPagamento');
let outRes=document.getElementById('outParcelas');

btPagamento.addEventListener('click', function(){
    
   let preco= Number(inPreco.value);

   if(preco<=0 || isNaN(preco)){
    alert('Por favor insira o valor para calcularmos...')
}

let res='';

for( let i=1; i<=10; i++){
    res+=`${i}X de R$: ${(preco/i).toFixed(2)} \n`

}
outRes.textContent=res;

})