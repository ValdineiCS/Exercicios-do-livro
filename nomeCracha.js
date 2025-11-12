let inNome=document.getElementById('inNome');
let btGerar=document.getElementById('btGerar');
let outSaida=document.getElementById('outSaida');

btGerar.addEventListener('click', gerarCracha);

function gerarCracha(){

   
    let nome = inNome.value;

    if(nome=="" || nome.indexOf(' ')== -1){
        alert('Informe o nome completo do funcionário.');
        inNome.focus();
        return;
    }
    var priEspaco=nome.indexOf(' ');
    var ultEspaco=nome.lastIndexOf(' ');
    
    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    outSaida.textContent='Crachá: ' + cracha;

} 