document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .about-content, .timeline-item, .skill-category, .education-card, .contact-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Timeline Show More
    const showMoreBtn = document.getElementById('show-more-btn');
    const timelineMore = document.getElementById('timeline-more');

    if (showMoreBtn && timelineMore) {
        showMoreBtn.addEventListener('click', () => {
            timelineMore.classList.toggle('show');
            const isShowing = timelineMore.classList.contains('show');
            showMoreBtn.innerHTML = isShowing
                ? 'Show Less <i class="fas fa-chevron-up"></i>'
                : 'Show More Experience <i class="fas fa-chevron-down"></i>';
        });
    }

    // Timeline Expandable Details
    document.querySelectorAll('.timeline-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.parentElement;
            content.classList.toggle('expanded');
        });
    });

    // Add animation class styles dynamically
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(styleSheet);
});
