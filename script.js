// This function runs when the page is fully loaded
window.addEventListener('load', () => {
    // Add the 'visible' class to the body to trigger the fade-in animation
    document.body.classList.add('visible');
});

// This function handles the fade-out effect when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a, .cta-button'); // Select all navigation & cta links

    navLinks.forEach(link => {
        // Check if the link is for downloading, if so, skip the animation
        if (link.hasAttribute('download')) {
            return;
        }

        link.addEventListener('click', function(event) {
            const href = this.href;

            // Only apply fade-out for internal links
            if (href && (href.startsWith(window.location.origin) || href.startsWith('.'))) {
                event.preventDefault(); // Stop the browser from navigating instantly

                // Remove the 'visible' class to trigger the fade-out animation
                document.body.classList.remove('visible');

                // Wait for the animation to finish, then navigate
                setTimeout(() => {
                    window.location.href = href;
                }, 1000); // This duration must match the CSS transition duration
            }
        });
    });
});