var  items=[];

var inPizza=document.getElementById('inPizza');
var inBebida=document.getElementById('inBebida');
var rbPizza=document.getElementById('rbPizza');
var rbBebida=document.getElementById('rbBebida');
var outPedido=document.getElementById('outPedido')

rbBebida.addEventListener('change', trocarItem);
rbPizza.addEventListener('change', trocarItem);


function trocarItem(){
   

    if(rbPizza.checked){
        inBebida.className='oculta';
        inPizza.className='exibe';
    }else{
        inPizza.className='oculta';
        inBebida.className='exibe'
    }
}


function mostrarNumSabores(){
if(rbPizza.checked){

    var pizza=inPizza.value;
   var num=(pizza=="pequena") ? 2 : (pizza=="media")?3 : 4;
   inDetalhes.placeholder="Até " + num + ' sabores';}

}

var inDetalhes=document.getElementById('inDetalhes')
inDetalhes.addEventListener('focus', mostrarNumSabores);

inDetalhes.addEventListener('blur', function(){
    inDetalhes.placeholder="";
})

inDetalhes.addEventListener('keypress', function(e){
if(e.key=="Enter"||'click'){
    adicionarItem()
}
})

function adicionarItem(){
    if(rbPizza.checked){
        var num =inPizza.selectedIndex;
        var produto=inPizza.options[num].text;
    }else{
        var num=inBebida.selectedIndex;
        var produto=inBebida.options[num].text;
    }
    var detalhes=inDetalhes.value;
    items.push(produto+'(' + detalhes + ')');
    outPedido.textContent=items.join('\n');
    limparCampos();
}
function limparCampos(){
    rbPizza.checked=true;
    inBebida.className='oculta';
    inPizza.className='exibe';
    inPizza.selectedIndex=0;
    inDetalhes.value='';
    rbPizza.focus();
}