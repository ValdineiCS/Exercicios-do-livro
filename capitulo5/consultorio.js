var pacientes=[];


let inPacientes=document.getElementById('inPacientes');
let outLista=document.getElementById('outLista')
let outAtendimento=document.getElementById('outAtendimento')
let btAdicionar=document.getElementById('btAdicionar');
let btUrgencia=document.getElementById('btUrgencia');
let btAtender=document.getElementById('btAtender');

btAdicionar.addEventListener('click', adicionarPacientes=>{
    var nome=inPacientes.value;

    if(nome==''){
        alert('Informe nome do paciente');
        inPacientes.focus()
        return;
    }
    pacientes.push(nome);
var lista=''

    for(let i=0; i<pacientes.length; i++){
        lista+=(i+1)+' . '+ pacientes[i] + "\n"
    }

    outLista.textContent=lista;
    inPacientes.value='';
    inPacientes.focus();
})

btUrgencia.addEventListener('click', Urgencia=>{
    var nome=inPacientes.value;

    if(nome==''){
        alert('Informe nome do paciente');
        inPacientes.focus()
        return;
    }
    pacientes.unshift(nome);

    
var lista=''
    for(let i=0; i<pacientes.length; i++){
        lista+=(i+1)+' . '+ pacientes[i] + "\n"
    }

    outLista.textContent=lista;
    inPacientes.value='';
    inPacientes.focus();
})

btAtender.addEventListener('click', atenderPaciente=>{
    if(pacientes.length==0){
        alert('Não há clientes para atender na lista')
        inPacientes.focus()
        return;
    }

var atender=pacientes.shift();
outAtendimento.textContent=`Em atendimento: ${atender}`;


atender=''

for(let i=0; i<pacientes.length; i++){
    lista+=(i+1) +' . '+ pacientes[i] + '\n'
}
outLista.textContent=lista;

})