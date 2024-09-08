document.addEventListener('DOMContentLoaded', function () {
      const footer = document.querySelector('footer');
      const inputs = document.querySelectorAll('input, textarea');
  
      // Função para mostrar o footer
      function showFooter() {
          footer.classList.remove('footer-hidden');
      }
  
      // Função para esconder o footer
      function hideFooter() {
          footer.classList.add('footer-hidden');
      }
  
      // Adiciona eventos de foco e desfoco aos inputs
      inputs.forEach(input => {
          input.addEventListener('focus', showFooter);
          input.addEventListener('blur', hideFooter);
      });
  
      // Inicialmente esconde o footer
      hideFooter();
  });
  