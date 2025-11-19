var inNome=document.getElementById('inNome');
var inIdade=document.getElementById('inIdade');
var btCategoria=document.getElementById('btCategoria');
var outNome=document.getElementById('outNome');
var outCategotia=document.getElementById('outCategoria');

btCategoria.addEventListener('click', mostrarDados);

function mostrarDados(){
 var nome=inNome.value;
 var idade=inIdade.value;
 if(nome==''||idade<=0|| isNaN(idade)){
    alert('Por favor insira o nome e idade do atleta')
    inNome.focus();
    return;
 }
 
 let tracos=rettornarTracos(nome);
 var categoria=categorizarAluno(idade)


 outNome.textContent=`${nome} \n ${tracos}`
outCategotia.textContent=`Categoria: ${categoria}`

}

function rettornarTracos(nome){

var linha=''
 for(let i=0; i<=nome.length-1; i++){
    if(nome.charAt(i)==' '){
        linha+=" "
    }else{
        linha+='-'
    }
        
 }
 return linha;
}

function categorizarAluno(idade){
  
    if(idade<=12){
        return 'Infantil'
    }else if(idade >=13 && idade <= 18){
        return 'Juvenil'
    }else{
        return 'Adulto'
    }
}

