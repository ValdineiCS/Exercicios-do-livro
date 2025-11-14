let inFrase=document.getElementById('inFrase');
let outSaida=document.getElementById('outSaida');

let btVerificar=document.getElementById('btVerificar').addEventListener('click', ()=>{
    let frase=inFrase.value;

    if(frase==''){
        alert('Por favor insira uma frase para verificarmos')
    }

    

    var tam=frase.length;
    var inverso=''

    for(let i=tam-1; i>=0 ; i--){
        inverso+=frase.charAt(i).toUpperCase();
        
    }
    let copia=inverso.replace(/ /g,"")

    if(copia==frase.toUpperCase().replace(/ /g,"")){
        outSaida.textContent=`${frase } é um palíndromo`
    }else{
        outSaida.textContent=`${frase.toUpperCase()} não é um palíndromo`
    }
    console.log(inverso)
})