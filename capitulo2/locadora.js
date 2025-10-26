let titulo=document.getElementById('inNome');
let duracao=document.getElementById('inMin');
let resTit=document.getElementById('resTit');
let resDur=document.getElementById('resDur');
 let botao=document.getElementById('bot');

 botao.addEventListener('click', calcularTempo);

 function calcularTempo(){
    var inTitulo=titulo.value;
    var inDuracao=Number(duracao.value);

    var horas = Math.floor(inDuracao/60);
    var minutos=inDuracao%60;

    resTit.textContent=inTitulo;
    resDur.textContent=horas + 'hora(s) ' + minutos +' minuto(s)';
 }