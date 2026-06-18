// ==================== */
// Portfolio JavaScript */
// ==================== */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    initializeSmoothScroll();
    
    // Contact form handling
    initializeContactForm();
    
    // Mobile menu handling (if needed)
    initializeMobileMenu();
});

// ==================== */
// Smooth Scroll Function */
// ==================== */

function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== */
// Contact Form Handler */
// ==================== */

function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Log form data (replace with actual submission logic)
            console.log({
                name: name,
                email: email,
                message: message
            });
            
            // Show success message
            showAlert('Message sent successfully!', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ==================== */
// Alert Function */
// ==================== */

function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    
    document.body.appendChild(alertDiv);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }, 3000);
}

// ==================== */
// Mobile Menu Handler */
// ==================== */

function initializeMobileMenu() {
    // Add responsive menu toggle if needed in the future
    // This is a placeholder for mobile menu functionality
}

// ==================== */
// Animation Styles */
// ==================== */

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
