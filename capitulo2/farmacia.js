let inMed=document.getElementById('inMed');
let inPreco=document.getElementById('inPreco');
let resM=document.getElementById('resM');
let resP=document.getElementById('resP');

botao=document.querySelector('#bot').addEventListener('click', mostrarPromocao=>{
    
   let med=(inMed.value)
   let preco=Number(inPreco.value)
    resM.textContent=`Promoção ${med}`;
    resP.textContent=`Leve 2 por apenas ${Math.floor(preco*2).toFixed(2)}`
})