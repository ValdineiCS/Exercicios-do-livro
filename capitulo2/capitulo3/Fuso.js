let inHora=document.getElementById('inHora');
let res=document.getElementById('res');
let botao=document.getElementById('bot')

botao.addEventListener('click', gerarHora=>{

    var hora=Number(inHora.value);
    

    if(hora=='' || isNaN(hora) ){
        alert('Insira uma hora válida')
        inHora.focus();
        return;

    }
        var horaFranca=hora+4;
        if(horaFranca > 24){
            horaFranca = horaFranca - 24;
        }
        res.textContent=`Hora na França: ${horaFranca.toFixed(2)}h`
    
    })