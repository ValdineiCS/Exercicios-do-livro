var inValor=document.getElementById('inValor');
var convenioSim=document.getElementById('convenioSim');
var convenioNao=document.getElementById('convenioNao');
var opConvenio=document.getElementById('opConvenio')
var saude=document.getElementById('saude');
var amigo=document.getElementById('amigo');
var btCalcular=document.getElementById('btCalcular');
var outValor=document.getElementById('outValor');
var outDesconto=document.getElementById('outDesconto')

convenioSim.addEventListener('change', trocarItem)
convenioNao.addEventListener('change', trocarItem)
function trocarItem(){
      if(convenioSim.checked){
        opConvenio.className='exibe'
    }else{
        opConvenio.className='oculta'
    }
}

btCalcular.addEventListener('click', calcular);

function calcular(){
    var valor=Number(inValor.value);
    
    if(valor<=0){
        alert('Insira o valor da vacina')
        return;
    }

    

    var taxa=0.10
    if(convenioSim.checked){
        const convenio=(opConvenio.value||'').toString()
    if(convenio=='saude'){
        taxa=0.50;
        
    }else if(convenio=='amigo'){
        taxa=0.20;
        
    }else{
        taxa=0.10
      
    }}

  var resultado= calcularDesconto(valor, taxa)
    outDesconto.textContent=`Desconto R$: ${resultado}`; 
    outValor.textContent=`Total a pagar R$: ${valor-resultado}`;

}

function calcularDesconto(valor, taxa){
    return valor*taxa
}