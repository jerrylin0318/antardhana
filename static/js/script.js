// Initialize Google Maps
function initMap() {
    // Coordinates for Belvedere Tower, Ortigas
    const location = { lat: 14.5858, lng: 121.0608 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"lightness": -80}]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#746855"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#d59563"}]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Antardhana Holdings Corp.'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '<div style="padding: 10px;"><strong>Antardhana Holdings Corp.</strong><br>Belvedere Tower<br>San Miguel Ave., Ortigas Center<br>Pasig, Manila</div>'
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the form data to your server
        // For now, we'll just show a success message
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-dark');
    } else {
        document.querySelector('.navbar').classList.remove('bg-dark');
    }
}); 