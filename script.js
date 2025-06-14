document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  // Validação obrigatória do PDF
  if (email === "admin@fortes.com.br" && senha === "123456") {
    window.location.href = "admin.html";
  } else if (email === "cooperativas@fortes.com.br" && senha === "123456") {
    window.location.href = "cooperado.html";
  } else {
    alert("Email ou senha inválidos. Tente novamente.");
  }
});
