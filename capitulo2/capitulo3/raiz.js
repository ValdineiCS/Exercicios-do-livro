var inNum=document.getElementById('inNum');
let res=document.getElementById('res');
let botao=document.getElementById('bot');

botao.addEventListener('click', calcularRaiz=>{
    let numero=Number(inNum.value);
    if(numero==0||isNaN(numero)){
        alert('Por favor insira um número para o cálculo')
        inNum.focus()
        return;
    }

    var raiz=Math.sqrt(numero);

    if(raiz==Math.floor(raiz)){
        res.textContent=`Raiz: ${raiz}`;
    }else{
        res.textContent=`Não há raiz exata para ${numero}`
    }
})