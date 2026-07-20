// ===== MENU MOBILE =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

// abre e fecha o menu no celular
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("ativo");
});

// fecha o menu quando clica em algum link (no celular)
const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("ativo");
  });
});

// ===== ANO NO RODAPÉ =====
const anoSpan = document.getElementById("ano");
anoSpan.textContent = new Date().getFullYear();

// ===== EFEITO "MÁQUINA DE ESCREVER" NO CARGO =====
// vai escrevendo cada palavra letra por letra e depois apaga
const palavras = ["Desenvolvedor Full Stack", "Dev React & Node.js", "Aprendendo todo dia"];
const textoAnimado = document.getElementById("textoAnimado");

let palavraAtual = 0;
let letraAtual = 0;
let apagando = false;

function escrever() {
  const palavra = palavras[palavraAtual];

  if (!apagando) {
    // escrevendo a palavra
    letraAtual++;
    textoAnimado.textContent = palavra.substring(0, letraAtual);

    if (letraAtual === palavra.length) {
      apagando = true;
      // espera um pouco antes de começar a apagar
      setTimeout(escrever, 1500);
      return;
    }
  } else {
    // apagando a palavra
    letraAtual--;
    textoAnimado.textContent = palavra.substring(0, letraAtual);

    if (letraAtual === 0) {
      apagando = false;
      palavraAtual = (palavraAtual + 1) % palavras.length;
    }
  }

  const velocidade = apagando ? 40 : 90;
  setTimeout(escrever, velocidade);
}

escrever();

// ===== ANIMAÇÃO AO ROLAR A PÁGINA =====
// observa os elementos com a classe "reveal" e adiciona
// a classe "mostrar" quando eles entram na tela
const elementosReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("mostrar");
      }
    });
  },
  { threshold: 0.15 }
);

elementosReveal.forEach((elemento) => {
  observer.observe(elemento);
});
