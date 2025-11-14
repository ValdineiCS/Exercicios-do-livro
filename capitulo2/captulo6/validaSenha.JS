var erros=[]

let inSenha=document.getElementById('inSenha');
let btVerificar=document.getElementById('btVerificar');
let outSenha=document.getElementById('outResposta');

btVerificar.addEventListener('click', verificarSenha);

function verificarSenha(){
    var senha=inSenha.value;

    if(senha.length<8||senha.length>15){
        erros.push('possuir entre 8 e 15 caracteres');
    }
    if(senha.match(/[a-z]/g)==null){
        erros.push('possuir letras minusculas')
    }
    if(senha.match(/[A-Z]/g)==null){
        erros.push('possuir letras maiúsculas')
    };
    if(senha.match(/[0-9]/g)==null){
        erros.push('possuir números');
    }
    if(senha.match(/\W|_/g)==null){
        erros.push('possuir caracteres especiais')
    };
    if(erros.length==0){
        outSenha.textContent='Ok! Senha válida'
    }else{
        outSenha.textContent='Erro... A senha deve ' + erros.join(', ');
    }
    inSenha.value='';
    inSenha.focus()
}