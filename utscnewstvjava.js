// Fungsi untuk menggeser tabel ke kanan
function scrollRight() {
  const table = document.querySelector('table');
  table.scrollLeft += 200; // Sesuaikan nilai untuk mengatur jarak geser
}

// Fungsi untuk menggeser tabel ke kiri
function scrollLeft() {
  const table = document.querySelector('table');
  table.scrollLeft -= 200;
}

// Tambahkan tombol atau elemen lain untuk memicu fungsi scroll
// Contoh:
const rightButton = document.createElement('button');
rightButton.textContent = '>>';
rightButton.onclick = scrollRight;
document.body.appendChild(rightButton);

const leftButton = document.createElement('button');
leftButton.textContent = '<<';
leftButton.onclick = scrollLeft;
document.body.appendChild(leftButton);