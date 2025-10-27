let inProduto=document.querySelector("#inProduto");
let inPreco=document.querySelector('#inPreco');
let res=document.querySelector("#resP");
let resF=document.querySelector("#res2");

const botao=document.getElementById('bot');
botao.addEventListener('click', verPromocao=>{
    const produto=inProduto.value;
    const preco=Number(inPreco.value);

    const precoF=(preco/2).toFixed(2);

    res.textContent=`${produto} - Promoção: Leve 3 por R$${preco*3-precoF}`

    resF.textContent=`O terceiro produto custa apenas R$:${precoF}`

})