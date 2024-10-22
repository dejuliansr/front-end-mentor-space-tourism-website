const content = [
  {
    title: "Launch vehicle",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    portraitImage: "../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg",
    landscapeImage: "../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
  },
  {
    title: "Spaceport",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    portraitImage: "../../starter-code/assets/technology/image-spaceport-portrait.jpg",
    landscapeImage: "../../starter-code/assets/technology/image-spaceport-landscape.jpg"
  },
  {
    title: "Space capsule",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    portraitImage: "../../starter-code/assets/technology/image-space-capsule-portrait.jpg",
    landscapeImage: "../../starter-code/assets/technology/image-space-capsule-landscape.jpg"
  }
];

// Set gambar yang responsif sesuai ukuran layar
function setResponsiveImage(index) {
  const viewportWidth = window.innerWidth;
  const imageElement = document.getElementById('rocket-image');
  
  // Cek apakah elemen gambar ada
  if (imageElement) {
    if (viewportWidth > 1200) {  // Untuk layar di atas 1200px
      imageElement.src = content[index].portraitImage;
    } else if (viewportWidth > 668) {  // Untuk layar di antara 768px dan 1200px
      imageElement.src = content[index].landscapeImage;
    } else {  // Untuk layar di bawah 768px
      imageElement.src = content[index].portraitImage;
    }
  }
}

// Event listener untuk circle button
document.querySelectorAll('.circle').forEach(circle => {
  circle.addEventListener('click', function() {
    const index = this.getAttribute('data-index') - 1;
    
    // Ganti teks dan deskripsi
    document.getElementById('title').textContent = content[index].title;
    document.getElementById('description').textContent = content[index].description;
    
    // Set gambar berdasarkan ukuran layar
    setResponsiveImage(index);
    
    // Hapus class 'active' dari semua circle dan tambahkan ke yang dipilih
    document.querySelectorAll('.circle').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
});

// Deteksi perubahan ukuran layar
window.addEventListener('resize', () => {
  const currentIndex = document.querySelector('.circle.active').getAttribute('data-index') - 1;
  setResponsiveImage(currentIndex);
});

// Set default tombol pertama aktif saat halaman dimuat
window.addEventListener('load', () => {
  document.querySelector('.circle[data-index="1"]').classList.add('active');
  setResponsiveImage(0);
});