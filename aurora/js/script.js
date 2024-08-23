document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Função para alternar a visibilidade do menu
    function toggleDropdown() {
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    }

    // Adiciona um clique no botão de dropdown para alternar o menu
    dropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que o clique no dropdown feche o menu
        toggleDropdown();
    });

    // Adiciona um clique no documento para fechar o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});