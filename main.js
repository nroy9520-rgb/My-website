// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animated number counter for stats
const animateCounter = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
};

const formatNumber = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString();
};

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate stat numbers when visible
            if (entry.target.classList.contains('stat')) {
                const numberElement = entry.target.querySelector('.stat-number');
                const label = entry.target.querySelector('.stat-label').textContent;
                
                if (numberElement && !numberElement.dataset.animated) {
                    let targetValue;
                    if (label.includes('Users')) targetValue = 1000000;
                    else if (label.includes('ARR')) targetValue = 2000000;
                    else if (label.includes('Integrations')) targetValue = 40;
                    
                    if (targetValue) {
                        numberElement.dataset.animated = 'true';
                        animateCounter(numberElement, targetValue);
                    }
                }
            }
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
document.querySelectorAll('.feature-card, .story-card, .stat').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'var(--primary-bg)';
    });
});

// Button click animations
document.querySelectorAll('.btn-hero, .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Dynamic gradient background animation
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    let hue = 0;
    setInterval(() => {
        hue = (hue + 0.5) % 360;
        heroBackground.style.background = `
            radial-gradient(circle at 20% 50%, hsla(${hue}, 70%, 60%, 0.15), transparent 50%),
            radial-gradient(circle at 80% 50%, hsla(${(hue + 60) % 360}, 70%, 60%, 0.15), transparent 50%)
        `;
    }, 100);
}

// Console message
console.log('%cAnything Clone', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 12px; color: #a0a0a0;');
console.log('Ready to deploy on GitHub Pages! 🚀');
