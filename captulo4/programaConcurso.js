var candidatos=[];

let inCandidato=document.getElementById('inCandidato');
let inNum=document.getElementById('inNum');
let btAdicionar=document.getElementById('btAdicionar');
let btListar=document.getElementById('btListar');
let btAprovar=document.getElementById('btAprovar');
let outSaida=document.getElementById('outSaida');




btAdicionar.addEventListener('click', adicionar)


function adicionar(){

let candidato=inCandidato.value;
    let num=Number(inNum.value);


     if(candidato=='' || num==0 || isNaN(num)){
        alert('Por favor preencha todos os campos para seguirmos...')
        inCandidato.focus();
        return;
    }


    candidatos.push({
        candidato: candidato, num:num
    });

  listarTodos()

}

btListar.addEventListener('click', listarTodos);

function listarTodos(){

    if(candidatos.length==0){
        alert('Não há candidatos a serem listados')
        inCandidato.focus;
        return;
    }

      var resultados='';

    for(let i=0 ; i<candidatos.length ; i++){
    resultados+=`${candidatos[i].candidato} - ${candidatos[i].num} acertos \n`
  }

  outSaida.textContent=resultados;
  inCandidato.value='';
  inNum.value='';
  inCandidato.focus()
    
}


btAprovar.addEventListener('click', aprovar);

function aprovar(){
    if(candidatos.length==0){
        alert('Não há candidatos ainda...')
    }
else{
    let acertos=Number(prompt('Número de acertos para a aprovação'))
    
    if(acertos==0||isNaN(acertos)){
    alert('Não foi inserido a quantidade de acertos para verificar os aprovados.')
        return;
    }

    candidatos.sort(function (a , b) {return a.num - b.num});

    let aprovados='';
    for(let i=0 ; i<candidatos.length ; i++){
        if(acertos<=candidatos[i].num){
            aprovados+=candidatos[i].candidato + ' - ' + candidatos[i].num + '\n'
        }
    }
        outSaida.textContent=aprovados;
        if(aprovados==''){
            outSaida.textContent='Não houve candidatos aprovados';
        }
}

}
