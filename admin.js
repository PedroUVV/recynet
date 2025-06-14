const dados = {
  cooperativas: 36,
  locaisColeta: 64,
  pontos: 1583200,
  usuarios: 978,
  materiais: {
    Papel: 1200,
    Plástico: 860,
    Vidro: 450,
    Metal: 320,
    Eletrônicos: 610,
  }
};

function formatarNumero(valor) {
  return valor.toLocaleString('pt-BR');
}

function atualizarDashboard() {
  const cards = document.querySelectorAll('.card');

  cards[0].querySelector("p").textContent = `${formatarNumero(dados.cooperativas)} cooperativas`;
  cards[1].querySelector("p").textContent = `${formatarNumero(dados.locaisColeta)} locais`;
  cards[2].querySelector("p").textContent = `${formatarNumero(dados.pontos)} pts acumulados`;
  cards[3].querySelector("p").textContent = `${formatarNumero(dados.usuarios)} usuários`;

  const barras = document.querySelectorAll('.bar');
  const valores = Object.values(dados.materiais);
  const max = Math.max(...valores);

  barras.forEach((bar, i) => {
    const altura = (valores[i] / max) * 100;
    bar.style.height = `${altura}%`;
    bar.setAttribute("title", `${valores[i]} kg`);
    bar.querySelector("span").textContent = `${Object.keys(dados.materiais)[i]}`;
  });
}

function exibirDataAtual() {
  const agora = new Date();
  const dataFormatada = agora.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
  const topo = document.querySelector(".header p");
  topo.innerHTML = `  ${dataFormatada}`;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarDashboard();
  exibirDataAtual();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  atualizarDashboard();
  exibirDataAtual();
});