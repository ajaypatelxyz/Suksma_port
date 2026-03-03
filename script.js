
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
