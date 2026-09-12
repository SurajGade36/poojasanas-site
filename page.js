// Navbar background styling on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainnavbar');
    if (!navbar) return;
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to Top Button visibility
window.addEventListener('scroll', function () {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;
    if (window.scrollY > 300) {
        backBtn.classList.add('show');
    } else {
        backBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Auto-close mobile navigation menu when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-nav-action');
    const navCollapse = document.getElementById('navbarNavDropdown');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navCollapse && navCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Active nav link highlight on scroll
    const sections = document.querySelectorAll('section[id], footer[id]');
    window.addEventListener('scroll', function () {
        let currentSection = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });
});