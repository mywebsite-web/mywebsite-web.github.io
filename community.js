// Community Page JavaScript
// Handles review form submission and mobile menu

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
    
    // Review form submission
    const reviewForm = document.getElementById('reviewForm');
    const successMessage = document.getElementById('successMessage');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from actually submitting
            
            // Get form values
            const formData = new FormData(reviewForm);
            const name = formData.get('name') || 'Anonymous';
            const course = formData.get('course') || 'Not specified';
            const rating = formData.get('rating');
            const review = formData.get('review');
            
            // Validate review text
            if (!review || review.trim() === '') {
                alert('Please enter your review before submitting.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            console.log('Review submitted:', {
                name: name,
                course: course,
                rating: rating,
                review: review
            });
            
            // Show success message
            if (successMessage) {
                successMessage.classList.add('show');
                reviewForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.classList.remove('show');
                }, 5000);
            }
            
            // Scroll to success message
            if (successMessage) {
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }
});

