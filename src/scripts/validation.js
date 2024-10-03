function validaçãoCampos(email, senha) {
  if (email.length < 1) {
    document.getElementById(msgemail).innerHTML ==
      "<font color='red'>E-mail inválido </font>";
  } else if (senha.length < 1) {
    return 2;
  } else {
    return 0;
  }
}

export default validaçãoCampos;
