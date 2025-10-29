let inNum=document.getElementById('inNum');
let res1=document.getElementById('res100')
let res2=document.getElementById("res50");
let res3=document.getElementById('res10');

let botao=document.getElementById('bot').addEventListener('click', exibirNotas=>{
    res1.textContent=''
    res2.textContent=''
    res3.textContent=''

    let saque=Number(inNum.value);

    if(saque==""||isNaN(saque)){
        alert('Informe um valor correto para saque')
        inNum.focus();
        return;
    }if(saque%10!=0){
        alert('Valor inválido para notas disponíveis(R$ 10, 50, 100)');
        inNum.focus();
        return;
    }

    var notasCem=Math.floor(saque/100);
    var resto=saque%100;
    var notasCinquenta=Math.floor(saque/50);
    resto=resto%50;
    var notasDez=Math.floor(resto/10);

    if(notasCem>0){
        res1.textContent=`Notas de R$100: ${notasCem}`;
    }
    if(notasCinquenta>0){
        res2.textContent=`Notas de R$50: ${notasCinquenta}`;
    }
    if(notasDez>0){
        res3.textContent=`Notas de R$10: ${notasDez}`
    }
    inNum.focus()
})