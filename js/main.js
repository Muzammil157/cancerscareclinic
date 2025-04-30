// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current page in navigation
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-links a');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}

// Doctor Profile Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const viewProfileBtns = document.querySelectorAll('.view-profile-btn');
    const doctorProfiles = document.querySelectorAll('.doctor-profile');

    // Open modal when View Profile button is clicked
    viewProfileBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const doctorId = this.getAttribute('data-doctor');
            
            // Hide all profiles first
            doctorProfiles.forEach(profile => {
                profile.style.display = 'none';
            });
            
            // Show the selected doctor's profile
            const selectedProfile = document.getElementById(`profile-${doctorId}`);
            if (selectedProfile) {
                selectedProfile.style.display = 'block';
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when close button is clicked
    closeModalBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Handle Book Appointment buttons
    const bookAppointmentBtns = document.querySelectorAll('.book-appointment-btn');
    bookAppointmentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    });
}); 