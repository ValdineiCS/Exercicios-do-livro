let numeros=[];

let inNum=document.getElementById('inNum');
let btAdicionar=document.getElementById('inAdicionar');
let btOrdem=document.getElementById('inOrdem');
let btOrdenar=document.getElementById('ordenar')
let outNum=document.getElementById('outNum');
let outAtencao=document.getElementById('outAtencao')

btAdicionar.addEventListener('click', adicionarNumero)

function adicionarNumero(){
    let num=inNum.value;

    if(num==''||numeros.indexOf(num)!=-1){
        alert('É necessário que insira numeros validos e não repetidos');
        inNum.focus();
        return;
    }
numeros.push(num);

let total=0
        total=numeros.join(', ')


   outNum.textContent= total;
   outAtencao.textContent=''
   inNum.focus();
   inNum.value='';


    
}

btOrdem.addEventListener('click', verificarOrdem);

function verificarOrdem(){

if(numeros.length==0){
    alert('Não há numeros para verificar')
}



let resultado=''

for(let i=0 ; i<numeros.length-1 ; i++){
    if(numeros[i]>numeros[i+1]){
resultado='Atenção... Números não estão em ordem crescente'
btOrdenar.className='exibe'
break;
    }else{
        resultado='Números em ordem crescente'
    }
}
outAtencao.textContent=resultado;

}



btOrdenar.addEventListener('click', ordenar);

function ordenar(){
   if(numeros.length==0){
    alert('Não há numeros a serem ordenados')
    inNum.focus();
    return;
   }

   numeros.sort(function(a,b) {return a-b});

   let total=''
   total=numeros.join(', ')

   outNum.textContent=total;
   outAtencao.textContent='Números em ordem crescente'
   
   
}