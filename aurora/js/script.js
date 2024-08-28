document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    
    function toggleDropdown() {
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    }

  
    dropdownToggle.addEventListener('click', function(event) {
        event.stopPropagation(); 
        toggleDropdown();
    });


    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});


//voltar para cima 

const scrollToTopLink = document.querySelector('.cima');

function toggleScrollToTopLink() {
    if (window.scrollY > 200) { 
        scrollToTopLink.classList.add('show');
    } else {
        scrollToTopLink.classList.remove('show');
    }
}


window.addEventListener('scroll', toggleScrollToTopLink);


scrollToTopLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});

