let inNome=document.getElementById('inNome');
let btSaida=document.getElementById('btSaida');
let outSaida=document.getElementById('outSaida');

btSaida.addEventListener('click', gerarCitacao);

function gerarCitacao(){
    let nome=inNome.value;

    if(nome==''||nome.indexOf(' ')==-1){
        alert('Insira um nome e sobrenome para gerarmos');
        inNome.focus();
        return;
    }

    let ultEspaco=nome.lastIndexOf(" ");
    let final=nome.substr(ultEspaco);
    let partes=nome.split(' ')
    let tam=partes.length
    let res='';

    for(let i=0 ; i<tam-1; i++){
        res+=partes[i].charAt(0)+'. ';
    }

    outSaida.textContent=`Citação Bibliográfica: ${final}, ${res}`;

    
}