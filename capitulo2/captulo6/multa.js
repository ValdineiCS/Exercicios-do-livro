let inData=document.getElementById('inData');
let inValor=document.getElementById('inValor');
let btCalculo=document.getElementById('btCalculo');
let outData=document.getElementById('outData');
let outValor=document.getElementById('outValor')

btCalculo.addEventListener('click', calcularData);

function calcularData(){
    let data=Number(inData.value);
    let valor=Number(inValor.value);

    if(data==0||valor==0|| isNaN(data) || isNaN(valor)){
        alert('Insira uma data e um valor para fazermos o cálculo')
    }

    var hoje =new Date();
    var vencimento= new Date();

    var partes=data.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1])-4);
    vencimento.setFullYear(Number(partes[0]));

    alert(vencimento)
}