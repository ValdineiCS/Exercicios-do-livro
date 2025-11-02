var inVelocidadeP=document.getElementById('inVelP');
var inVelocidadeC=document.getElementById('inVelC');
var res=document.getElementById('res');
var botao=document.getElementById('bot');

botao.addEventListener('click', ()=>{
    let velocidadeP=Number(inVelocidadeP.value);
    let velocidadeC=Number(inVelocidadeC.value);

    limiteLeve=velocidadeP*1.2;

    if(velocidadeC==0||velocidadeP==0|| isNaN(velocidadeC)||isNaN(velocidadeP)){
        alert('Insira as velocidades corretamente')
        return;
    }

    if(velocidadeC<=velocidadeP){
        res.textContent=`Situação: Sem Multa`
    }else if(velocidadeC<=limiteLeve){
        res.textContent='Situação: Multa leve'
    }else{
        res.textContent="Multa grave"
    }
    
})