let InNum=document.getElementById('inNum');
let res=document.getElementById('res');
let botao=document.getElementById('bot').addEventListener('click', parOuImpar=>{
   
    let numero=Number(InNum.value);
    if(numero==0||isNaN(numero)){
        alert('Por favor insira um número válido')
    }
    if(numero%2==0){
        res.textContent=`Resposta: ${numero} é par`
    }else{
        res.textContent=`Resposta: ${numero} é Ímpar`
    }
})