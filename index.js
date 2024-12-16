document.addEventListener('DOMContentLoaded', function () {
    
  /
// Selecionando o formulario e os campos
  
  con


const form = document.getElementById('cadastro-form');
  

const nomeField = document.getElementById('nome');
  

const emailField = document.getElementById('email');
  const formContainer = document.getElementById('form-container');
  
  
const messageContainer = document.getElementById('message');

  

  /
// Funcso para validar os campos
  

function validateForm() {
      // Verifica se os campos estao vazios
      if (nomeField.value.trim() === '' || emailField.value.trim() === '') {
          
      
alert('Todos os campos devem ser preenchidos!');
          
          retur

          

    
return false;
      }
      
      }


      }

    

 
return true;
  }

  
  }

// Evento de envio do formulario
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio tradicional do formulario

      

 
// Valida os campos
      

if (validateForm()) {
          // Cria o objeto com os valores dos campos
          const formData = {
              
       
nome: nomeField.value,
              
     
email: emailField.value
          };

          // Exibe os dados no console
          console.log(formData);
