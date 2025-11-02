var numContas=0;
var valTotal=0;
var resposta='';

var inConta=document.getElementById('inConta');
var inValor=document.getElementById('inValor');
var outLista=document.getElementById('outLista');
var outContas=document.getElementById('outContas');
var botao=document.getElementById('bot');


botao.addEventListener('click', contaMes=>{
    
    var conta=inConta.value;
    var valor=Number(inValor.value)

    if(conta==''||valor==0||isNaN(valor)){
        alert('Informe os dados corretamente');
        inConta.focus();
        return;
}

numContas++;
valTotal=valTotal+valor;
resposta=`${resposta + conta} - R$ ${valor.toFixed(2)} \n`

outLista.textContent=`${resposta} -------------------------------`;
outContas.textContent=`${numContas} Conta(s) - Total R$ ${valTotal.toFixed(2)}`;

inConta.value=''
inValor.value=''
inConta.focus();

})