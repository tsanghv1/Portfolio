document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to sections
    document.querySelectorAll('section > div').forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate form submission
            const button = contactForm.querySelector('button');
            const originalText = button.innerText;

            button.innerText = 'Sending...';
            button.disabled = true;
            button.classList.add('opacity-75');

            setTimeout(() => {
                button.innerText = 'Message Sent!';
                button.classList.remove('bg-accent', 'text-primary');
                button.classList.add('bg-green-500', 'text-white');

                // Reset form
                contactForm.reset();

                setTimeout(() => {
                    button.innerText = originalText;
                    button.disabled = false;
                    button.classList.remove('opacity-75', 'bg-green-500', 'text-white');
                    button.classList.add('bg-accent', 'text-primary');
                }, 3000);
            }, 1500);
        });
    }
});
