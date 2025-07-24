document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navbarMenu = document.getElementById('navbar-menu');

    menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-container')) {
            navbarMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const menuLinks = navbarMenu.getElementsByTagName('a');
    for (let link of menuLinks) {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    }
}); 