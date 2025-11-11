let inFruta=document.getElementById('inFruta');
let btDica=document.getElementById('btDica');
let outFruta=document.getElementById('outFruta');

btDica.addEventListener('click', montarDica);

function montarDica(){
    let fruta=inFruta.value;

    if(fruta==''){
        alert('Informe a fruta');
        inFruta.focus();
        return;
    }

    var resposta=fruta.charAt(0);
    var estrelas='*';
    var tam=fruta.length;

    for(let i=1 ; i<tam ; i++){
        if(fruta.charAt(i)==fruta.charAt(0)){
            resposta+=fruta.charAt(0);
        }else{
            resposta+=' - ';
        }
        estrelas+='*'
    }
    outDica.textContent=resposta;
    inFruta.value=estrelas;
}