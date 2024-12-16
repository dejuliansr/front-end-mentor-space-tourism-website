document.addEventListener('DOMContentLoaded', function() {
  const destinations = {
    moon: {
      name: "MOON",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
      image: "../../starter-code/assets/destination/image-moon.png"
    },
    mars: {
      name: "MARS",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
      image: "../../starter-code/assets/destination/image-mars.png"
    },
    europa: {
      name: "EUROPA",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
      image: "../../starter-code/assets/destination/image-europa.png"
    },
    titan: {
      name: "TITAN",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
      image: "../../starter-code/assets/destination/image-titan.png"
    }
  };

  const links = document.querySelectorAll('.tabs a');
  const planetInfo = document.getElementById('planet-info');
  const planetImage = document.getElementById('planet-image');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      // Hapus kelas "active" dari semua link dan tambahkan ke link yang diklik
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
  
      const destination = this.getAttribute('data-destination');
      const info = destinations[destination];
  
      // Tambahkan animasi "slide-out" ke info lama
      planetInfo.classList.add('slide-out');
      planetImage.classList.add('slide-out');
  
      // Tunggu sampai animasi selesai sebelum mengganti konten
      setTimeout(() => {
        // Update informasi destinasi
        planetInfo.querySelector('h2').textContent = info.name;
        planetInfo.querySelector('h4').textContent = info.description;
        planetInfo.querySelector('.distance p').textContent = info.distance;
        planetInfo.querySelector('.travel-time p').textContent = info.travelTime;
        planetImage.src = info.image;
  
        // Hapus animasi "slide-out" dan tambahkan animasi "slide-in"
        planetInfo.classList.remove('slide-out');
        planetImage.classList.remove('slide-out');
        planetInfo.classList.add('slide-in');
        planetImage.classList.add('slide-in');
      }, 500); // Durasi animasi "slide-out" (0.5s)
      
      // Hapus kelas "slide-in" setelah animasi selesai untuk memungkinkan animasi dimainkan ulang
      setTimeout(() => {
        planetInfo.classList.remove('slide-in');
        planetImage.classList.remove('slide-in');
      }, 1000); // Total durasi animasi (slide-out + slide-in)
    });
  });
});
