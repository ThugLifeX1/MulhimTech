document.addEventListener('DOMContentLoaded', function () {

    // ===== MOBILE NAV TOGGLE =====
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
        });
        // Close nav when a link is clicked
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }

    // ===== SMOOTH SCROLL FOR ALL IN-PAGE LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id], .hero[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveLink() {
        const headerHeight = document.getElementById('header').offsetHeight;
        let currentSection = '';
        sections.forEach(function (section) {
            if (window.pageYOffset >= section.offsetTop - headerHeight - 20) {
                currentSection = '#' + section.id;
            }
        });
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === currentSection);
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    // ===== HEADER SHADOW ON SCROLL =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        header.style.boxShadow = window.pageYOffset > 10
            ? '0 4px 24px rgba(0,0,0,0.25)'
            : 'none';
    }, { passive: true });

    // ===== CONTACT FORM =====
    const form = document.getElementById('contactForm');
    const formNote = document.getElementById('formNote');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                formNote.textContent = 'يرجى تعبئة جميع الحقول المطلوبة.';
                formNote.className = 'form-note error';
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formNote.textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
                formNote.className = 'form-note error';
                return;
            }

            // Simulate successful submission
            formNote.textContent = 'شكراً! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.';
            formNote.className = 'form-note success';
            form.reset();

            setTimeout(function () {
                formNote.textContent = '';
                formNote.className = 'form-note';
            }, 6000);
        });
    }

    // ===== ANIMATE ELEMENTS ON SCROLL =====
    const animatedElements = document.querySelectorAll(
        '.service-card, .about-card, .portfolio-card, .stat'
    );

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
});
