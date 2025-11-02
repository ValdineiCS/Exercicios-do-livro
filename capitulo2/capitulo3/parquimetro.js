let inValor=document.getElementById('inVal');
let resTempo=document.getElementById('resTempo');
let resValor=document.getElementById("resTroco");
let botao=document.getElementById('bot');

botao.addEventListener('click', confirmarDeposito=>{
    let valor=Number(inValor.value);

    if(valor==0||isNaN(valor)){
        alert('Insra um valor válido para a verificação');
        return;
    }

        let tempo=0;
        let troco=0

    if(valor<1){
        resTempo.textContent='Valor minimo de R$1 para 30 min de estacionamento!'
        return;
    }
    else if(valor<1.75){
        tempo=30;
        troco=valor-1;
    }else if(valor<3){
        tempo=60;
        troco=valor-1.75
    }else{
        tempo=120;
        troco=valor-3
    }
    
    if(troco<=0){
        resTempo.textContent=`Tempo: ${tempo}`;
        resTroco.textContent=``
        return;
    }else{
        resTempo.textContent=`Tempo: ${tempo}`
        resTroco.textContent=`Troco R$: ${troco.toFixed(2)}`
        return;
    }


})