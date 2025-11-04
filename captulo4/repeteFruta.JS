let inFruta=document.getElementById('inFruta');
let inNum=document.getElementById('inNum');
let res=document.getElementById('res');
let botao=document.querySelector('#bot');

botao.addEventListener('click', repeteFruta=>{
    
    let fruta=inFruta.value;
    let num=Number(inNum.value);

    if(fruta==''||num==0||isNaN(num)){
        alert('Por favor preencha os campos para verificação...')
        inFruta.focus();
        return;
    }

    let contarFruta=''


    for(let i=0 ; i<=num ; i++){
        contarFruta=contarFruta+fruta +' * '
         
    }

    res.textContent=`${contarFruta}`
})