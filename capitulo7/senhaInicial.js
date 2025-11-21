var inNome=document.getElementById('inNome');
var outNome=document.getElementById('outSenha');
var btGerar=document.getElementById('btGerar');

btGerar.addEventListener('click', gerarSenha);

function gerarSenha(){
var nome=inNome.value;
    var validar=validarNome(nome);
    var sobreNome=obterSobrenome(nome);
    var vogais=contarVogais(nome);

    if(validar==true){
    outNome.textContent='Senha inicial: '+sobreNome+vogais;
    }else{
            alert('Para gerarmos sua senha, precisamos que insira um nome completo')
    }

}
function validarNome(nome){
    
    if(nome==''||nome.indexOf(" ")==-1){
        return false;
    }else{
        return true;
    }
}
function obterSobrenome(nome){
var partes=nome.split(' ')
var tam=partes[partes.length-1]
tam=tam.toLowerCase()
return tam;

}

function contarVogais(nome){

var nomeMinusculo=nome.toLowerCase()
var vogais=0

for(let i=0 ; i<nomeMinusculo.length ; i++){
    if(nomeMinusculo.charAt(i)=='a'||nomeMinusculo.charAt(i)=='e'||nomeMinusculo.charAt(i)=='i'||nomeMinusculo.charAt(i)=='o'|| nomeMinusculo.charAt(i)=='u'){
    vogais++
    }
}if(vogais<10){
        vogais='0'+vogais
    }

return vogais;
}