var carros=[];
 
let inModelo=document.getElementById('inModelo');
let inPreco=document.getElementById('inPreco');
let btAdicionar=document.getElementById('btAdicionar');
let btFiltrar=document.getElementById('btFiltrar');
let btListar=document.getElementById('btListar');
let outLista=document.getElementById('outLista')

btAdicionar.addEventListener('click', adicionarCarro);

function adicionarCarro(){
   let modelo=inModelo.value;
   let preco=Number(inPreco.value);

   if(modelo==''||preco==''||isNaN(preco)){
    alert('Prencha todos os campos corretamente para adicionarmos.')
    inModelo.focus()
    return;
}

carros.push({modelo: modelo,
    preco:preco
})

inModelo.value=''
inPreco.value=''
inModelo.focus()


listarCarros();
}


btListar.addEventListener('click', listarCarros);

function listarCarros(){

    if(carros.length==0){
        alert('Não há carros para serem listados');
        inModelo.focus();
        return;
    }

    var lista=''

    for(let i=0 ; i<carros.length ; i++){
        lista+=carros[i].modelo + ' - R$:' + carros[i].preco.toFixed(2) + '\n';
    
    }

    outLista.textContent=lista;
}

btFiltrar.addEventListener('click', filtrarCarros)

function filtrarCarros(){
    var maximo=Number(prompt('Insira até quanto o cliente deseja pagar'));

    if(maximo==''||isNaN(maximo)){
        alert('Não foi inserido um valor para filtro.')
        return;
    }

    var lista=''

    for(let i=0;i<carros.length;i++){
        if(carros[i].preco<=maximo){
            lista+=carros[i].modelo + ' - '+ 'R$: '+ carros[i].preco.toFixed(2) + '\n'
            console.log(lista)
        }
    }

    if(lista==''){
        outLista.textContent='Não há carros até: R$ ' + maximo.toFixed(2);
    }
    
    else{
        outLista.textContent= 'Carros até R$ ' + maximo.toFixed(2) + '\n--------------------------------------\n' + lista;
        
}

}