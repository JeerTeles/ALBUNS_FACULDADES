document.addEventListener('DOMContentLoaded', function() {
    // Lógica para o menu responsivo (mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um item (apenas para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

    // Animação de scroll suave para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica para adicionar classe 'active' ao link do menu conforme o scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) { // Ajuste para melhor ativação
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Tratamento básico para o formulário de contato (apenas feedback visual)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio real do formulário
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            contactForm.reset(); // Limpa o formulário
            // Em um projeto real, aqui você faria uma requisição AJAX para um backend
        });
    }
});