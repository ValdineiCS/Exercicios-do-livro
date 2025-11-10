var criancas=[];

let inNome=document.getElementById('inNome');
let inIdade=document.getElementById('inIdade');
let btAdicionar=document.getElementById('btAdicionar');
let btListar=document.getElementById('btListar');
let btResumir=document.getElementById('btResumir');
let outRes=document.getElementById('outRes');


btAdicionar.addEventListener('click', adicionarCrianca)
function adicionarCrianca(){

    let nome=inNome.value;
    let idade=Number(inIdade.value);

    if(nome=='' || idade==0 || isNaN(idade)){
        alert('Informe os dados corretamente.');
        inNome.focus();
        return;
    }

    criancas.push({nome:nome,
        idade:idade
    })

    inNome.value=''
    inIdade.value=''
    inNome.focus();

listarCriancas()

}

btListar.addEventListener('click', listarCriancas)

function listarCriancas(){
    
    if(criancas.length==0){
        alert('Não há crianças na lista');
        return;
    }

    var lista='';

    for(let i=0 ; i<criancas.length ; i++){
        lista+=`${criancas[i].nome} - ${criancas[i].idade} anos \n`
    }

    outRes.textContent=lista;
}

btResumir.addEventListener('click', resumirLista)

function resumirLista(){
    if(criancas.length==0){
        alert('Não há crianças na lista')
        return;
    }

    var copia=criancas.slice();

    copia.sort(function(a,b) {return a.idade - b.idade});
    var resumo='';
    var aux=copia[0].idade;
    var nome=[];

    for(let i=0; i<copia.length; i++){
        if(copia[i].idade==aux){
            nome.push(copia[i].nome);
        }else{
            resumo+=`${aux} ano(s): ${nome.length} crianças(s) -`;
            resumo+=`${(nome.length/copia.length *100).toFixed(2)} %\n`
            resumo+=`( ${nome.join(', ')} )\n\n`;
            aux=copia[i].idade;
            nome=[];
            nome.push(copia[i].nome);
        }
    }

    resumo+=`${aux} ano(s): ${nome.length} criança(s) -`;
    resumo+=(nome.length/copia.length*100).toFixed(2) +'%\n';
    resumo+='('+nome.join(', ') + '\n\n';

    outRes.textContent=resumo;
}


