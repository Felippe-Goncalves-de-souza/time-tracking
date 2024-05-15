const work_dia     = document.getElementById("trabalho_dia");
const work_semana  = document.getElementById("trabalho_semana");
const work_mes     = document.getElementById("trabalho_mes");

const play_dia     = document.getElementById("jogo_dia");
const play_semana  = document.getElementById("jogo_semana");
const play_mes     = document.getElementById("jogo_mes");

const estudo_dia     = document.getElementById("estudo_dia");
const estudo_semana  = document.getElementById("estudo_semana");
const estudo_mes     = document.getElementById("estudo_mes");

const exercicio_dia     = document.getElementById("exercicio_dia");
const exercicio_semana  = document.getElementById("exercicio_semana");
const exercicio_mes     = document.getElementById("exercicio_mes");

const social_dia     = document.getElementById("social_dia");
const social_semana  = document.getElementById("social_semana");
const social_mes     = document.getElementById("social_mes");

const autocuidado_dia     = document.getElementById("autocuidado_dia");
const autocuidado_semana  = document.getElementById("autocuidado_semana");
const autocuidado_mes     = document.getElementById("autocuidado_mes");

const botao_dia    = document.getElementById("botao_dia");
const botao_semana = document.getElementById("botao_semana");
const botao_mes    = document.getElementById("botao_mes");


botao_dia.addEventListener("click", ()=>{
    descelescionar_mes();
    descelescionar_semana();
    dia_visivel();
})

botao_semana.addEventListener("click", ()=>{
    descelescionar_dia();
    descelescionar_mes();
    work_semana.classList.add("visivel");
    play_semana.classList.add("visivel");
    estudo_semana.classList.add("visivel");
    exercicio_semana.classList.add("visivel");
    social_semana.classList.add("visivel");
    autocuidado_semana.classList.add("visivel");

    work_dia.classList.add("invisivel");
    play_dia.classList.add("invisivel");
    estudo_dia.classList.add("invisivel");
    exercicio_dia.classList.add("invisivel");
    social_dia.classList.add("invisivel");
    autocuidado_dia.classList.add("invisivel");
})

botao_mes.addEventListener("click", ()=>{
    descelescionar_dia();
    descelescionar_semana();
    work_mes.classList.add("visivel");
    play_mes.classList.add("visivel");
    estudo_mes.classList.add("visivel");
    exercicio_mes.classList.add("visivel");
    social_mes.classList.add("visivel");
    autocuidado_mes.classList.add("visivel");

    work_dia.classList.add("invisivel");
    play_dia.classList.add("invisivel");
    estudo_dia.classList.add("invisivel");
    exercicio_dia.classList.add("invisivel");
    social_dia.classList.add("invisivel");
    autocuidado_dia.classList.add("invisivel");
})

function descelescionar_semana(){
  work_semana.classList.remove("visivel");
  play_semana.classList.remove("visivel");
  estudo_semana.classList.remove("visivel");
  exercicio_semana.classList.remove("visivel");
  social_semana.classList.remove("visivel");
  autocuidado_semana.classList.remove("visivel");
};

function descelescionar_dia(){
    work_dia.classList.remove("visivel");
    play_dia.classList.remove("visivel");
    estudo_dia.classList.remove("visivel");
    exercicio_dia.classList.remove("visivel");
    social_dia.classList.remove("visivel");
    autocuidado_dia.classList.remove("visivel");


  };

  function descelescionar_mes(){
    work_mes.classList.remove("visivel");
    play_mes.classList.remove("visivel");
    estudo_mes.classList.remove("visivel");
    exercicio_mes.classList.remove("visivel");
    social_mes.classList.remove("visivel");
    autocuidado_mes.classList.remove("visivel");
  };

   function dia_visivel(){
    work_dia.classList.remove("invisivel");
    play_dia.classList.remove("invisivel");
    estudo_dia.classList.remove("invisivel");
    exercicio_dia.classList.remove("invisivel");
    social_dia.classList.remove("invisivel");
    autocuidado_dia.classList.remove("invisivel");

    work_dia.classList.add("visivel");
    play_dia.classList.add("visivel");
    estudo_dia.classList.add("visivel");
    exercicio_dia.classList.add("visivel");
    social_dia.classList.add("visivel");
    autocuidado_dia.classList.add("visivel");

   }