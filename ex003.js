let preco= Number(prompt('Insira o preço'));
let aVista=preco*0.10;
let cartao= preco/3;

alert(`Preço R$${preco} À Vista: R$${preco-aVista} ou 3X: R$${cartao}`);