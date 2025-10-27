let inNome=document.getElementById('inNome');
let inAltura=document.getElementById('inAltura')
let sexM=document.getElementById('sexM')
let sexF=document.getElementById('sexF')
let res=document.getElementById('res')

let botaoCalcular=document.getElementById('bP');
let botaoLimpar=document.getElementById('bC');

botaoCalcular.addEventListener('click', calcular)

function calcular(){
    
    var nome=inNome.value;
    var masculino=sexM.checked;
    var feminio=sexF.checked;
    var altura=Number(inAltura.value);

    if(nome==''|| masculino==false&& feminio==false){
        alert('Por favor insira um nome e escolha o sexo...')
        inNome.focus();
    }else if(altura==0||isNaN(altura)){
        alert('Por favor, informe a açtura corretamente...')
        inAltura.focus();
        
    }else{
        if(masculino){
            var peso=22*Math.pow(altura, 2).toFixed(2);
        }else{
            var peso=21*Math.pow(altura, 2).toFixed(2);
        }
    }
    res.textContent=`${nome}: Seu peso ideal é ${peso.toFixed(2)}kg`
}

botaoLimpar.addEventListener('click', limpar =>{
inNome.value=""
sexM.checked=false;
sexF.checked=false;
inAltura.value=""
res.textContent=""
inNome.focus()

})
