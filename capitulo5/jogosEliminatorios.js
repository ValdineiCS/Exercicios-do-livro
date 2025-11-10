var clubes=[];

let inClube=document.getElementById('inClube');
let inAdicionar=document.getElementById('inAdicionar');
let inListar=document.getElementById('inListar');
let inMontar=document.getElementById('inMontar');
let outSaida=document.getElementById('outSaida');

inAdicionar.addEventListener('click', adicionarClube);

function adicionarClube(){

  
    var clube=inClube.value;

    if(clube==''){
        alert('Insira um time para darmos inicio...')
        inClube.focus();
        return;
    }

    clubes.push(clube);

    inClube.value=''
    inClube.focus();


    listarClubes();
}



inListar.addEventListener('click', listarClubes);

function listarClubes(){
    if(clubes.length==0){
        alert('Não há clubes a serem listados')
        inClube.focus()
        return;
    }

    let listar='';

    for(let i=0 ; i< clubes.length ; i++){
        listar+=`${i+1}. ${clubes[i]} \n`
    }
        outSaida.textContent=listar;
}


inMontar.addEventListener('click', montarConfrontos)

function montarConfrontos(){
var clube=inClube.value;

    if(clubes.length %2 !=0 && clube==''){
        alert('São necessários ao menos 2 clubes e que o total forme pares para definirmos confrontos')
        inClube.focus();
        return;
    }
    else{
        let confrontos=''

        for(let i=0 ; i< clubes.length / 2 ; i++){
            confrontos+=` ${clubes[i]} X ${clubes[clubes.length-1-i]}`
           
        }

        outSaida.textContent=confrontos;
    }
}