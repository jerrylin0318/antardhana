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

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // 在實際應用中，你可以將這裡改為發送到你的郵件服務或其他後端服務
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // 顯示成功消息
    const lang = document.documentElement.lang;
    const successMessage = lang === 'zh' 
        ? '感謝您的留言！我們會盡快回覆您。'
        : 'Thank you for your message! We will get back to you soon.';
    
    alert(successMessage);
    form.reset();
    return false;
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('bg-dark');
    } else {
        document.querySelector('.navbar').classList.remove('bg-dark');
    }
}); 