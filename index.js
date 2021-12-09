"use strict";

const calcularIMC = (imc) =>{
  let altura = parseFloat(document.querySelector("#campo_altura").value);
  let peso = parseFloat(document.querySelector("#campo_peso").value);
  imc =  peso/(altura*altura);
  return imc;
}

function mostrarDados(){
  if(document.querySelector("#campo_altura").value == '' && document.querySelector("#campo_peso").value == ''){
    alert("Nenhum campo foi preenchido.")
  }else if(document.querySelector("#campo_altura").value == '' ){
    alert("Campo [Altura] não foi preenchido.");
  }else if(document.querySelector("#campo_peso").value == ''){
    alert("Campo [Peso] não foi preenchido")
  }else{
    document.querySelector("#campo_resultado").innerHTML = `SEU IMC: <br>${calcularIMC().toFixed(2)}`
    verificarTabela();
  }
}
function verificarTabela(){
  if(calcularIMC().toFixed(2) <18.5){
    limparTabela();
    $("#menor_18").addClass("tabela_selecao");
  }else if(calcularIMC().toFixed(2) < 24.9){
    limparTabela();
    $("#menor_25").addClass("tabela_selecao");
  }else if(calcularIMC().toFixed(2) < 29.9){
    limparTabela();
    $("#menor_30").addClass("tabela_selecao");
  }else if(calcularIMC().toFixed(2) < 39.9){
    limparTabela();
    $("#menor_40").addClass("tabela_selecao");
  }else if(calcularIMC().toFixed(2) > 40){
    limparTabela();
    $("#maior_40").addClass("tabela_selecao");
  }
}
const limparDados = () =>{
  document.querySelector("#campo_altura").value = '';
  document.querySelector("#campo_peso").value = '';
  document.querySelector("#campo_resultado").innerHTML = '';
  limparTabela();
}
const limparTabela = () =>{
  $("#menor_18").removeClass('tabela_selecao');
  $("#menor_25").removeClass('tabela_selecao');
  $("#menor_30").removeClass('tabela_selecao');
  $("#menor_40").removeClass('tabela_selecao');
  $("#maior_40").removeClass('tabela_selecao');
}
document.querySelector("#calcular").addEventListener("click", mostrarDados);
document.querySelector("#limpar").addEventListener("click", limparDados);
limparDados();



function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}


