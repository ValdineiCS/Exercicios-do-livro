let inChin=document.getElementById('inChin');
let inAnos=document.getElementById('inAnos');
let res=document.getElementById('res');
let botao=document.getElementById('bot').addEventListener('click', contarChinchilas=>{
    let chin=Number(inChin.value);
    let anos=Number(inAnos.value);

    if(chin<=0||isNaN(chin)||anos<=0||isNaN(anos)){
        alert('Preencha os campos corretamente pare seguirmos...')
    }
    let resultado=chin;
    let total='';

    for(let i=1;i<=anos;i++){
        total+=`${i} ano: ${resultado} Chinchilas \n`;
        resultado=resultado*3;
    }

    res.textContent=total
})