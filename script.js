
// --- MOBILE MENU ---
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));

// --- NAVBAR SCROLL EFFECT ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- GSAP ANIMATIONS ---

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial Load Animation (Wait for DOM)
document.addEventListener("DOMContentLoaded", (event) => {

    // Abstract shapes floating animation
    gsap.to('.shape-1', {
        y: 50,
        x: 30,
        rotation: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-2', {
        y: -40,
        x: -20,
        rotation: -15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-3', {
        y: 60,
        x: -40,
        rotation: 20,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Hero entrance — no sequential delay, everything visible instantly

    // Floating effect for cards
    gsap.to('.gs-float', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.gs-float-delay', {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
    });

    // Universal ScrollReveal Classes
    const revealElements = document.querySelectorAll('.gs-reveal-up');

    revealElements.forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%", // Animation starts when top of element hits 85% of viewport height
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Staggered list animations (for About/Projects pages)
    const staggerContainers = document.querySelectorAll('.gs-stagger-container');

    staggerContainers.forEach((container) => {
        const items = container.querySelectorAll('.gs-stagger-item');

        gsap.from(items, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // Delay between each item
            ease: "power3.out"
        });
    });
});

// --- CONTACT FORM VALIDATION & SUCCESS MODAL ---
function submitContactForm(btn) {
    const form = btn.closest('.contact-form');
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.error-msg').forEach(e => e.remove());
    form.querySelectorAll('.error').forEach(e => e.classList.remove('error'));

    inputs.forEach(input => {
        const value = input.value.trim();
        let errorMessage = '';

        if (input.hasAttribute('required') && !value) {
            errorMessage = 'This field is required';
        } else if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMessage = 'Please enter a valid email';
        } else if (input.type === 'tel' && value && !/^[\d\s\+\-()]{7,15}$/.test(value)) {
            errorMessage = 'Please enter a valid phone number';
        } else if (input.tagName === 'SELECT' && !value) {
            errorMessage = 'Please select an option';
        }

        if (errorMessage) {
            isValid = false;
            input.classList.add('error');
            const msg = document.createElement('span');
            msg.className = 'error-msg';
            msg.textContent = errorMessage;
            input.parentElement.appendChild(msg);
        }
    });

    if (isValid) {
        // Show success modal
        const modal = document.getElementById('successModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset form
        form.reset();
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('success-modal-overlay')) {
        closeSuccessModal();
    }
});
