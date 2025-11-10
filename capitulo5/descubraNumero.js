var erros=[];
var sorteado=Math.floor(Math.random() * 100)+1;

const chances=6;

var inNum=document.getElementById('inNum');
let erro=document.getElementById('erro');
let chance=document.getElementById('chance');
let outdica=document.getElementById('dica');
let btJogar=document.getElementById('btJogar')
let btApostar=document.getElementById('btApostar')

btApostar.addEventListener('click', descubraNumero=>{


    
    
    const num=Number(inNum.value);
    if(num<=0||num>100||isNaN(num)){
        alert('Insira um numero entre 1 e 100 para jogar... ')
        inNum.focus()
        return;
    }
    
    if(num==sorteado){
        alert('Parabéns!! Você acertou!!!');
        btApostar.disabled =true;
        btJogar.className='exibe'
        dica.textContent=`Parabéns! Número sorteado: ${sorteado}`
    }
    
    else{
        if(erros.indexOf(num)>=0){
            alert(`Você já apostou o número ${num} tente outro...`)
        }
        
        
        else{
            erros.push(num);
            var numErros=erros.length;

            var numChances=chances-numErros;

            erro.textContent=`Erros: ${numErros} ( ${erros.join(', ')} )`
            chance.textContent=`Chances: ${numChances} `;


            if(numChances==0){
               btApostar.disabled=true;
               btJogar.className='exibe';
               outdica.textContent=`Game over!! Número sorteado ${sorteado}`;
            }else{
                
                var dica=num < sorteado ? "maior" : "menor";
                outdica.textContent=`Dica: tente um número ${dica} que ${num}`
                
            }
        }
    }
    inNum.value='';
    inNum.focus();
})



btJogar.addEventListener('click', jogarNovamente=>{
    location.reload()
})