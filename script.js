// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close if it's the Projects link with dropdown
            const parentLi = link.parentElement;
            if (parentLi && parentLi.classList.contains('nav-item-dropdown')) {
                return;
            }

            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Dropdown menu toggle for mobile
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('a');

        link.addEventListener('click', (e) => {
            // On mobile, toggle dropdown instead of navigating
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');

                // Close other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });

    // Smooth scroll with offset for fixed navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.style.color = '');
                if (navLink) {
                    navLink.style.color = 'var(--primary-color)';
                }
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .skill-category, .project-card, .contact-method'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Handle resume PDF not found
    const resumeIframe = document.querySelector('.resume-viewer iframe');
    if (resumeIframe) {
        resumeIframe.addEventListener('error', () => {
            const resumeViewer = document.querySelector('.resume-viewer');
            resumeViewer.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 2rem; background-color: var(--bg-secondary); border-radius: 0.5rem;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-secondary); margin-bottom: 1rem;">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    <h3 style="color: var(--text-secondary); margin-bottom: 0.5rem;">Resume Not Found</h3>
                    <p style="color: var(--text-secondary); text-align: center;">
                        Please add your resume PDF as <code>assets/Casey Koppes Resume.pdf</code>
                    </p>
                </div>
            `;
        });
    }
});

// Parallax effect removed to prevent overlay with About section

// Copy resume link to clipboard
const copyLinkButton = document.getElementById('copy-resume-link');
if (copyLinkButton) {
    copyLinkButton.addEventListener('click', async () => {
        const url = copyLinkButton.getAttribute('data-url');
        try {
            await navigator.clipboard.writeText(url);
            const originalHTML = copyLinkButton.innerHTML;
            copyLinkButton.innerHTML = 'Link copied! <i class="fa-solid fa-check"></i>';
            setTimeout(() => {
                copyLinkButton.innerHTML = originalHTML;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    });
}

// Print console message
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in the code? Check out the source on GitHub!', 'font-size: 14px; color: #64748b;');

// Project card flip functionality
document.querySelectorAll('.project-card').forEach(card => {
    const imageUrl = card.getAttribute('data-image');
    const imageElement = card.querySelector('.project-image');

    // Set background image
    if (imageElement && imageUrl) {
        imageElement.style.backgroundImage = `url('${imageUrl}')`;
    }

    // Add click event to flip the card
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Projects carousel navigation
const projectsGrid = document.querySelector('.projects-grid');
const prevBtn = document.querySelector('.carousel-nav.prev');
const nextBtn = document.querySelector('.carousel-nav.next');

if (projectsGrid && prevBtn && nextBtn) {
    const cards = projectsGrid.querySelectorAll('.project-card');
    let currentIndex = 0;

    const getCardWidth = () => {
        if (cards.length === 0) return 0;
        const card = cards[0];
        const style = getComputedStyle(projectsGrid);
        const gap = parseFloat(style.gap) || 32; // Default 2rem = 32px
        return card.offsetWidth + gap;
    };

    const scrollToCard = (index) => {
        const cardWidth = getCardWidth();
        const scrollPosition = index * cardWidth;
        projectsGrid.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    };

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 1; // Loop to last card
        }
        scrollToCard(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0; // Loop to first card
        }
        scrollToCard(currentIndex);
    });
}
