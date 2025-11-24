const Key='visitas';
let mensagem=document.getElementById('mensagem');

let visitas=localStorage.getItem(Key);

if(visitas==null){
    visitas=1;
    mensagem.textContent='Muito Bem Vindo! Esta é a sua primeira visita ao nosso site.'
}else{
    visitas=Number(visitas)+1;
mensagem.textContent='Que bom que você voltou! Esta é a sua visita de número ' + visitas + ' ao nosso site.'
}

localStorage.setItem(Key, visitas)