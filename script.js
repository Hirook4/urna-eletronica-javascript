// Controle de Interface

let seuVoto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

// Variaveis do Ambiente

let etapaAtual = 0;
let numero = '';

// Funções

function iniciarEtapa() {
    let etapa = etapas[etapaAtual];

    numeroHtml = '';

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml = numeroHtml + '<div class="numero pisca"></div>';
        } else
            numeroHtml = numeroHtml + '<div class="numero"></div>';
    }

    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });

    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = ''
        for (let i in candidato.fotos) {
            fotosHtml = fotosHtml + `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt = "">${candidato.fotos[i].legenda}</div>`;
        }

        lateral.innerHTML = fotosHtml;
    }

    console.log(candidato);
}

function clicou(n) {
    let elemento = document.querySelector('.numero.pisca'); // Busca o numero piscando para ser preenchido
    if (elemento !== null) {
        elemento.innerHTML = n;
        numero = `${numero}${n}`;

        elemento.classList.remove('pisca');
        if (elemento.nextElementSibling !== null) {
            elemento.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }

    }
}

function branco() {
    alert("Clicou em branco")
}

function corrige() {
    alert("Clicou em corrige")
}

function confirma() {
    alert("Clicou em confirma")
}

iniciarEtapa();