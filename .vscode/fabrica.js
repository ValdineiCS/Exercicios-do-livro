let inNum=document.getElementById('inNum');
let res=document.getElementById('res');
let botao=document.getElementById('bot').addEventListener('click', preencherEstrelas=>{
    num=Number(inNum.value);
    if(num==0||isNaN(num)){
        alert('Número inválido');
        inNum.focus();
        return;
    }

    var estrelas='';

    for(let i=1; i<=num; i++){
        if(i%2==0){
            estrelas=`${estrelas} *`
        }else{
            estrelas=`${estrelas} -`;
        }
    }
    res.textContent=estrelasstrelas;
})