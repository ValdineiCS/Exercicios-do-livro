let inNum=document.getElementById('inNum');
let botao=document.getElementById('bot');
let outNum=document.getElementById('outNum');

botao.addEventListener('click', numPrimo=>{
    let num=Number(inNum.value)
    
    if(num==0||isNaN(num)){
        alert('Por favor insira um número válido para verificarmos')
        inNum.focus()
        return;
    }

    var numDivisores=0;

    for(var i=1; i<=num; i++){
        if(num % i==0){
            numDivisores++
        }
    }
    if(numDivisores==2){
        outNum.textContent=num + " É primo";

    }else{
        outNum.textContent= num + ' Não é primo'
    }
})