const burgerIcon = document.getElementById('burger-icon');
const closeIcon = document.getElementById('close-icon');
const logo = document.getElementById('logo');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

burgerIcon.addEventListener('click', () => {
  navMenu.classList.add('active');
  burgerIcon.style.display = 'none'; // Sembunyikan ikon burger
  closeIcon.style.display = 'block'; // Tampilkan ikon close
  logo.style.display = 'block';
  overlay.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  navMenu.classList.remove('active');
  burgerIcon.style.display = 'block'; // Tampilkan ikon burger kembali
  closeIcon.style.display = 'none'; // Sembunyikan ikon close
  logo.style.display = 'none'; 
  overlay.style.display = 'none'
});

// Ambil semua link di dalam menu navigasi
const navLinks = document.querySelectorAll('.nav-menu li a');

// Dapatkan URL halaman saat ini
const currentPage = window.location.pathname;

// Loop melalui link untuk mencocokkan dengan URL halaman saat ini
navLinks.forEach(link => {
  // Ambil URL dari href dan buat jadi path absolut
  const linkPath = new URL(link.href).pathname;

  // Jika URL cocok, tambahkan kelas active ke li
  if (linkPath === currentPage) {
    link.parentElement.classList.add('active'); // Tambahkan kelas 'active' ke elemen <li>
  }
});
