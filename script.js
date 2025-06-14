
    function toggleMenu() {
      document.getElementById('navMenu').classList.toggle('active');
    }

    function enviarFormulario(event) {
      event.preventDefault();
      alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mensagem").value = "";
      return false;
    }
  