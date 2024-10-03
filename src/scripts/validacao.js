function validacaoCampos(email, senha) {
  let isValid = true;

  const spanMessagemEmail = document.getElementById("msgemail");
  const spanMessagemSenha = document.getElementById("msgsenha");

  email.style.border = "";
  spanMessagemEmail.innerHTML = "";
  senha.style.border = "";
  spanMessagemSenha.innerHTML = "";

  if (email.value.length < 1) {
    spanMessagemEmail.innerHTML =
      "<font color='red'>E-mail é obrigatório</font>";
    email.style.border = "2px solid red";
    isValid = false;
  }

  if (senha.value.length < 1) {
    spanMessagemSenha.innerHTML =
      "<font color='red'>Senha é obrigatória</font>";
    senha.style.border = "2px solid red";
    isValid = false;
  }

  return isValid;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const senha = document.getElementById("password");

    const isValid = validacaoCampos(email, senha);

    if (isValid) {
      email.value = "";
      senha.value = "";
      alert("Formulário enviado com sucesso!");
    }
  });
});
