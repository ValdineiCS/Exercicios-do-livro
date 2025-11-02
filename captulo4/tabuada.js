let inNum=document.getElementById('inNum');
let res=document.getElementById('res');
let botao=document.getElementById('bot');

botao.addEventListener('click', gerarTabuada=>{
    
    let num=Number(inNum.value);
   

    if(num==0 || isNaN(num)){
        alert('Por favor insira um número para iniciarmos a contagem')
        return;
    }
    let contagem=''

    for(let i=1 ; i<=10 ; i++){
        contagem=`${contagem} ${num} X ${i} = ${num*i} \n`
        
    };
    res.textContent=contagem;
   
})