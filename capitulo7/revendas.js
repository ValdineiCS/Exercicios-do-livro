let inModelo=document.getElementById('inModelo');
let inAno=document.getElementById('inAno');
let inPreco=document.getElementById('inPreco');
let btCalcular=document.getElementById('btCalcular');
let outModelo=document.getElementById('outModelo');
let outPreco=document.getElementById('outPreco');

btCalcular.addEventListener('click', mostrarDados);

function mostrarDados(){
    var modelo=inModelo.value;
    var ano=Number(inAno.value);
    var preco=Number(inPreco.value);

    if(modelo==''|| ano<=0|| preco<=0||isNaN(ano)||isNaN(preco)){
        alert('Preencha os campos corretamente para seguirmos com o classificado');
        inModelo.focus();
        return;
    }

    var classificacao=claassificarVeiculo(ano);
    var precoVenda=calcularVenda(preco, classificacao);

    outModelo.textContent=`${modelo}: - ${classificacao}`
    outPreco.textContent=`Preço de Venda R$: ${precoVenda.toFixed(2)}`
}

function claassificarVeiculo(ano){
    var anoAtual=new Date().getFullYear();
    var classif;

    if(ano==anoAtual){
        classif='Novo'
    }else if(ano==anoAtual-1||ano==anoAtual-2){
        classif='Seminovo';
    }else{
        classif='Usado';
    }
    return classif;
}

function calcularVenda( valor, status){
    var prVenda=(status=='Novo')? valor * 1.08 : valor * 1.10;
    return prVenda;
}