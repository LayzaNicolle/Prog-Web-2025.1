function gravarDados() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("endereco", document.getElementById("endereco").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("telefone", document.getElementById("telefone").value);
    alert("Dados gravados com sucesso!");
  }
  
  function exibirDados() {
    const nome = localStorage.getItem("nome") || "";
    const endereco = localStorage.getItem("endereco") || "";
    const email = localStorage.getItem("email") || "";
    const telefone = localStorage.getItem("telefone") || "";
  
    document.getElementById("resultado").innerHTML = `
      <strong>Nome:</strong> ${nome}<br>
      <strong>Endereço:</strong> ${endereco}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Telefone:</strong> ${telefone}
    `;
  }
  
  function enviarWhatsApp() {
    const nome = localStorage.getItem("nome") || "";
    const endereco = localStorage.getItem("endereco") || "";
    const email = localStorage.getItem("email") || "";
    const telefone = localStorage.getItem("telefone") || "";
  
    const telefoneDestino = document.getElementById("telefoneDestino").value;
  
    if (!telefoneDestino) {
      alert("Digite um número de telefone para enviar!");
      return;
    }
  
    const mensagem = `Nome: ${nome}, Endereço: ${endereco}, Email: ${email}, Telefone: ${telefone}`;
    const url = `https://api.whatsapp.com/send?phone=${telefoneDestino}&text=${encodeURIComponent(mensagem)}`;
  
    window.open(url, "_blank");
  }
  