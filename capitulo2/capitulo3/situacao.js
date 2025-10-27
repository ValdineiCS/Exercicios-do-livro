let inNome=document.getElementById('inNome');
let inN1=document.getElementById('n1');
let inN2=document.getElementById('n2');
let res1=document.querySelector('#res1');
let res2=document.querySelector('#res2');

let botao=document.querySelector('.bot');
botao.addEventListener('click', calcularMedia)

function calcularMedia(){
    let nome=inNome.value;
    let n1=Number(inN1.value);
    let n2=Number(inN2.value);

    let resultado=(n1+n2)/2;

    if(resultado<7){
        res1.textContent=`Média das Notas: ${resultado}`
        res2.textContent=`Sinto muito ${nome}! Você foi repovado(a)`
    }else{
        res1.textContent=`Média das Notas: ${resultado}`
        res2.textContent=`Parabéms ${nome}! Você foi apovado(a)`
    }

}