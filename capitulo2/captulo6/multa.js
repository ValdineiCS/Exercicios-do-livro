let inData=document.getElementById('inData');
let inValor=document.getElementById('inValor');
let btCalculo=document.getElementById('btCalculo');
let outData=document.getElementById('outData');
let outValor=document.getElementById('outDesconto')

btCalculo.addEventListener('click', calcularData);

function calcularData(){
    let data=inData.value;
    let valor=Number(inValor.value);

    if(data==''||valor==0 || isNaN(valor)){
        alert('Insira uma data e um valor para fazermos o cálculo')
        inData.value;
        return
    }



    var partes=data.split("-");//Fui na var data e dividir ela em arrays a partir do '-'
   
    let ano=Number(partes[0]); //parte 0=Ano
    let mes=Number(partes[1]);//parte 1=mês
    let dia=Number(partes[2]);//parte2=dia

    let vencimento= new Date(ano, mes-1, dia); //criei a variavel vencimento com ano, mes e dia
    let limite=new Date(vencimento.getTime()); //criei a variavel limite para peger os itens da variavel vencimento
    limite.setDate(limite.getDate()+90) //Adicionei mais 90 dias a variavel limite

   let hoje=new Date()

    if(hoje>limite){
        outData.textContent=`Prazo para desconto expirado`
        outValor.textContent=`Valor a pagar: ${valor}`
    }

    else{
    let desconto=valor * (20/100); //Calculei o desconto em 20% do valor
    let valorFinal= valor-desconto; //o valor final é o valor digitado menos o desconto

    let formatoBr=limite.toLocaleDateString('pt-BT') //Converti a data para o formado brasileiro

    outData.textContent=`Data limite para pagamento com desconto: ${formatoBr}` //Exibi na tela 
    outValor.textContent=`Valor com Desconto: R$${valorFinal}`;//Também exibi na tela
}

    
}