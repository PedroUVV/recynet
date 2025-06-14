let graficoBarras, graficoLinha;

const dadosPorMes = {
  "2025": {
    "0": [120, 70, 60, 40, 30],
    "1": [100, 50, 50, 25, 25],
    "2": [90, 60, 45, 22, 18],
    "3": [110, 65, 55, 30, 20],
    "4": [80, 40, 50, 30, 15],
    "5": [95, 45, 40, 20, 10]
  },
  "2024": {
    "0": [80, 40, 30, 15, 10],
    "1": [60, 35, 25, 10, 8],
    "2": [70, 30, 20, 12, 5],
    "3": [90, 50, 40, 18, 12],
    "4": [100, 60, 55, 22, 16],
    "5": [75, 40, 38, 14, 9]
  }
};

const mesesLinha = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
const totaisLinha = [270, 250, 235, 280, 215, 210];

function criarGraficos(mes = "1", ano = "2025") {
  const ctxBarra = document.getElementById("graficoBarras").getContext("2d");
  const ctxLinha = document.getElementById("graficoLinha").getContext("2d");

  const dados = dadosPorMes[ano][mes];

  if (graficoBarras) graficoBarras.destroy();
  if (graficoLinha) graficoLinha.destroy();

  graficoBarras = new Chart(ctxBarra, {
    type: 'bar',
    data: {
      labels: ['Plástico', 'Papel', 'Eletrônicos', 'Vidro', 'Metal'],
      datasets: [{
        label: 'Kg reciclados',
        data: dados,
        backgroundColor: '#7cbf64',
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });

  graficoLinha = new Chart(ctxLinha, {
    type: 'line',
    data: {
      labels: mesesLinha,
      datasets: [{
        label: 'Total por mês (kg)',
        data: totaisLinha,
        borderColor: '#4c9141',
        backgroundColor: 'rgba(124,191,100,0.2)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      animation: { duration: 1000 },
      scales: { y: { beginAtZero: true } }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const mesSelect = document.getElementById("mes");
  const anoSelect = document.getElementById("ano");

  criarGraficos(mesSelect.value, anoSelect.value);

  mesSelect.addEventListener("change", () => {
    criarGraficos(mesSelect.value, anoSelect.value);
  });

  anoSelect.addEventListener("change", () => {
    criarGraficos(mesSelect.value, anoSelect.value);
  });

  document.getElementById("btnBaixar").addEventListener("click", () => {
    window.print();
  });
});