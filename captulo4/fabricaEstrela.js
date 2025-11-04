let inNum=document.getElementById('inNum');
let res=document.getElementById('res')
let botao=document.getElementById('bot').addEventListener('click', fabricarEstrelas=>{
    let num=Number(inNum.value);

    if(num==0||isNaN(num)){
        alert('Insira um número para criarmos...')
        inNum.focus()
        return;
    }
    let estrelas=''

    for(let i=1 ; i<num ; i++){
        estrelas=estrelas + '*'.repeat(i)+ '\n';
    }
    res.textContent=estrelas

     
})