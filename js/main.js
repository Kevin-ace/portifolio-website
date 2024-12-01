document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Initialize theme toggle
    new ThemeToggle();
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to set active link based on scroll position
    const setActiveLinkOnScroll = () => {
        const sections = document.querySelectorAll('section'); // Assuming each section has the tag <section>
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            // Check if the current scroll position is within the section
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = sectionId;
            }
        });

        // Remove active class from all links and add it to the current section link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    // Call the setActiveLinkOnScroll function on scroll
    window.addEventListener('scroll', setActiveLinkOnScroll);

    // Initial call to set active link on page load
    setActiveLinkOnScroll();
});

