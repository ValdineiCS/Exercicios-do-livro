let inNum=document.getElementById('inNum');
let res1=document.querySelector('#res1');
let res2=document.getElementById('res2');
let bot=document.getElementById('bot').addEventListener('click', numeroPerfeito)

function numeroPerfeito(){
    
    let num=Number(inNum.value);
    
    if(num==0||isNaN(num)){
        alert('Insira um número valido para verificarmos...')
        inNum.focus()
        return
    }
    let soma=0;
    let divisores=''

    for(let i=0; i<num; i++){
        if(num%i===0){
            soma+=i;
            divisores+=i+ ', '
        }
    }

    if(soma==num){
        res1.textContent=`Divisores do ${num}: ${divisores} (Soma: ${num})`
        res2.textContent=`${num}: É um número perfeito`
    }else{
        res1.textContent=`Divisores do ${num}: ${divisores} (Soma: ${num})`
        res2.textContent=`${num}: Não é um número perfeito`
    }

}