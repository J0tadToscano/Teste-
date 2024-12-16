document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro');
    const mensagem = document.getElementById('mensagem');
    const formContainer = document.getElementById('form-container');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar o envio do formulario e recarregamento da pagina
  
      // Obter os valores dos campos
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
  
      // Verificar se algum campo esta vazio
      if (!nome || !email || !telefone) {
        alert('Todos os campos sao obrigatorios!');
        return;
      }
  
      // Criar um objeto com os dados
      const usuario = {
        nome: nome,
        email: email,
        telefone: telefone
      };
  
      // Exibir o objeto no console
      console.log(usuario);
  
      // Ocultar o formulario e mostrar a mensagem de agradecimento
      formContainer.style.display = 'none';
      mensagem.style.display = 'block';
    });
  });