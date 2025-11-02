let inLadoA=document.getElementById('inLadoA');
let inLadoB=document.getElementById('inLadoB');
let inLadoC=document.getElementById('inLadoC');
let resR=document.getElementById('resR');
let resT=document.getElementById('resT')

let botao=document.getElementById('bot');

botao.addEventListener('click', calcularTriangulo=>{
    let ladoA=Number(inLadoA.value);
    let ladoB=Number(inLadoB.value);
    let ladoC=Number(inLadoC.value);

    if(ladoA<=0 ||isNaN(ladoA)||ladoB<=0||isNaN(ladoB)||ladoC<=0||isNaN(ladoC)){
        alert('Preencha todos os campos para que o cálculo seja feito')
        return;
    }


    if(ladoA>ladoB+ladoC || ladoB>ladoA+ladoC || ladoC>ladoA+ladoB){
        resR.textContent='Os lados não podem formar um triângulo'
        resT.textContent=``
        return;
    }
    else if(ladoA==ladoB &&ladoA==ladoC){
        resR.textContent=`Lados podem formar um triângulo`
        resT.textContent=`Tipo: Equilátero`
        return;
    }else if(ladoA===ladoB||ladoB==ladoC|| ladoC===ladoA){
        resR.textContent=`Lados podem formar um triângulo`
        resT.textContent=`Tipo: Isóceles`
        return;
    }
    else{
        resR.textContent=`Lados podem formar um triângulo`;
        resT.textContent=`Tipo: Escaleno`
        return;
    }
})