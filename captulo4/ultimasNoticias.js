var noticias=[];

let inNoticia=document.getElementById('inNoticias');
let btAdicionar=document.getElementById('btAdicionar');
let btListar=document.getElementById('btListar');
let outNoticias=document.getElementById('outNoticias');
let ultNoticias=document.getElementById('ultimasNoticias');

btAdicionar.addEventListener('click', adicionarNoticia);

function adicionarNoticia(){
    let noticia=inNoticia.value;

    if(noticia==''){
        alert('Por favor insira uma noticia para adicionarmos');
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);
    console.log()

    let contador=0;

  

    outNoticias.textContent=`Notícias Cadastradas: ${noticias.length}`;
    inNoticia.value=''
    inNoticia.focus();
}

btListar.addEventListener('click', listarNoticias);

function listarNoticias(){
    if(noticias.length==0){
        alert('Não há noticias cadastradas.')
        inNoticia.focus();
        return;
    }

    let ustNoticias=Number(prompt('Insira o número de notícias que deseja ver'));

    if(ustNoticias==0||isNaN(ustNoticias)){
        alert('Necessário inserir o número de notícias.')
        return;
    }

    if(ustNoticias>noticias.length){
        alert(`No momento temos apenas ${noticias.length} disponíveis`);
        inNoticia.focus();
        return;
    };

    // cria uma cópia da array, e inverte ela
    const noticiaReversa=noticias.slice().reverse();

    const ultimas=noticiaReversa.slice(0, ustNoticias);

    let totalNoticias='';
    for(let i=0 ; i<ultimas.length ; i++){
        totalNoticias+=` ${i+1}) ${ultimas[i]} \n`
    }

    ultNoticias.textContent=`${ultimas.length} Últimas notícias\n------------------------------\n ${totalNoticias}`
    inNoticia.focus;

}
