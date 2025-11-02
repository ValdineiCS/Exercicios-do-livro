let inNum=document.getElementById('inNum')
let res=document.getElementById('res');
let botao=document.getElementById('bot');

botao.addEventListener('click', decrescer=>{
    let num=Number(inNum.value);

    if(num==0||isNaN(num)){
        alert('Por favor insira um número maior que 1 para iniciarmos a contagem')
        inNum.focus();
        return;
    }

    let contador=''

    for(var i=num ; i>=1 ; i--){
        contador=`${contador} ${i},` ;
    }
    res.textContent=`Entre ${num} e 1: ${contador} ${i}.`

})