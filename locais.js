// Filtro por texto (busca)
document.querySelector('input[type="search"]').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  const locais = document.querySelectorAll('.local');

  locais.forEach(local => {
    const conteudo = local.textContent.toLowerCase();
    local.style.display = conteudo.includes(termo) ? 'block' : 'none';
  });
});

// Filtro por material e "aberto agora"
const checkboxes = document.querySelectorAll('.filtros input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', aplicarFiltros);
});

function aplicarFiltros() {
  const filtros = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.parentElement.textContent.trim().toLowerCase());

  document.querySelectorAll('.local').forEach(local => {
    const texto = local.textContent.toLowerCase();
    const visivel = filtros.every(filtro => texto.includes(filtro));
    local.style.display = visivel ? 'block' : 'none';
  });
}
