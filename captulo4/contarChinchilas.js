let inChin=document.getElementById('inChin');
let inNum=document.getElementById('inAnos');
let res=document.getElementById('res');
let botao=document.getElementById('bot')
botao.addEventListener('click', contarChinchilas=>{
    let chin=Number(inChin.value);
    let num=Number(inNum.value);

    if(chin<=1||isNaN(chin) || num==0|| isNaN(num)){
        alert('Preencha os campos para iniciarmos a contagem')
        inChin.focus()
        return
    }

    var resultado=num;
    var total=''
    for(let i=1 ; i<=num; i++){
        total+=`${i}º Ano: ${resultado} Chinchilas \n`;
        resultado*=3
    }
    res.textContent=total
})