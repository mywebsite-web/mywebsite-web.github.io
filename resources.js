// Study Resources Page JavaScript
// Handles image zoom modal and mobile menu

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Image zoom modal functionality
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const zoomButtons = document.querySelectorAll('.image-zoom-btn');
    const modalClose = document.querySelector('.modal-close');
    
    // Open modal when zoom button is clicked
    zoomButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click event
            const resourceCard = button.closest('.resource-card');
            const image = resourceCard.querySelector('.resource-image');
            
            if (image && modalImage && imageModal) {
                modalImage.src = image.src;
                modalImage.alt = image.alt;
                imageModal.classList.add('active');
                imageModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });
    
    // Close modal when close button is clicked
    if (modalClose && imageModal) {
        modalClose.addEventListener('click', function() {
            imageModal.classList.remove('active');
            imageModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside the image
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.classList.remove('active');
                imageModal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
            imageModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });
});

