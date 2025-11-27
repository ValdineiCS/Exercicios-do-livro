var qtProdutos=[]
var key='listarCompras';

const salvo=localStorage.getItem(key);
   if(salvo){
    qtProdutos=JSON.parse(salvo);
   }

var inProduto=document.getElementById('inProduto');
var btAdicionar=document.getElementById('btAdicionar');
var btLimpar=document.getElementById('btLimpar');
var outSaida=document.getElementById('outSaida');


btAdicionar.addEventListener('click', adicionar)

function adicionar(){
    var produto=inProduto.value;

    if(produto==''){
        alert('Por favor insira um produto para adicionarmos a lista')
        inProduto.focus();
        return;
    }

   qtProdutos.push(produto);
   qtProdutos.sort();

   localStorage.setItem(key, JSON.stringify(qtProdutos));
   
    outSaida.textContent=qtProdutos.join('\n');

   inProduto.value='';
   inProduto.focus();
}

function limpar(){
    qtProdutos=[]
    localStorage.removeItem(key);
    outSaida.textContent=''
}
btLimpar.addEventListener('click', limpar)
