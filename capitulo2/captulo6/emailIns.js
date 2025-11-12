let inFun=document.getElementById('inFun');
let btFun=document.getElementById('btFun');
let outFun=document.getElementById('outFun');

btFun.addEventListener('click', gerarCracha);

function gerarCracha(){
    let fun=inFun.value;

    if(fun=='' || fun.indexOf(' ')==-1){
        alert('Informe o nome completo do funcionáro')
        inFun.focus();
        return;
    }
    var partes=fun.split(' ');
    var email='';
    var tam=partes.length;

    for(let i=0 ; i<tam-1; i++){
        email+=partes[i].charAt(0);
    }

    email+=partes[tam-1] + '@empresa.com.br';

    outFun.textContent=`E-mail: ${email.toLowerCase()}`;
}