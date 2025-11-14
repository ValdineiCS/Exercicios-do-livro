var mensagemF=[]

let inMensagem=document.getElementById('inMensagem');
let btCriptografar=document.getElementById('btCripto');
let btdescriptografar=document.getElementById('btDescripto')
let outSaida=document.getElementById('outSaida')

btCriptografar.addEventListener('click', criptografar);

function criptografar(){
    let mensagem=inMensagem.value;

    if(mensagem==''){
        alert('Insira uma mensagem para ser criptografada')
        inMensagem.focus();
        return
    };

mensagemF.push(mensagem);

    let pares='';
    let impares='';

    for(let i=0;i<mensagem.length;i++){
        if(i%2==0){
            pares+=mensagem.charAt(i)
        }else{
            impares+=mensagem.charAt(i);
        }
    }

    let mensagemTotal=impares+pares
    outSaida.textContent=`${mensagemTotal}`;
    inMensagem.value='';
    inMensagem.focus()
    return;
}

btdescriptografar.addEventListener('click', descriptografar);

function descriptografar(){
    if(mensagemF.length==0){
        alert("Não há mensagem para ser descriptografada")
        inMensagem.focus();
        return;
    }else{
        let copia=mensagemF.slice()
        let res=copia
        outSaida.textContent=res
    }
    mensagemF=[];

    
}