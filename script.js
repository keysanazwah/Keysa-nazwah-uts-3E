/* ==========================================================
   ISI DATA DIRI ANDA DI SINI
   ========================================================== */
const NAMA_SAYA  = "Keysa Nazwah Adzkia";   // <-- ganti dengan nama lengkap Anda
const KELAS_SAYA = "3E";

const NAMA_DEFAULT  = "Nama Mahasiswa";
const KELAS_DEFAULT = "SI-3X";

const menuLinks  = document.querySelectorAll(".nav a");
const elNama     = document.getElementById("nama");
const elKelas    = document.getElementById("kelas");
const panels     = document.querySelectorAll(".panel");

// Menu -> panel yang ikut menjadi lebih tua
const panelMenu = {
  aktifitas: "panel-aktifitas",
  statistik: "panel-statistik",
  dokumen:   "panel-dokumen",
};

function setAktif(link) {
  menuLinks.forEach(a => {
    a.classList.remove("active");
    a.removeAttribute("aria-current");
  });
  link.classList.add("active");
  link.setAttribute("aria-current", "page");
}

function setPanelFokus(id) {
  panels.forEach(p => p.classList.toggle("is-focus", p.id === id));
}

menuLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const menu = link.dataset.menu;

    // Sign Out tidak mengubah tampilan
    if (menu === "signout") return;

    setAktif(link);
    setPanelFokus(panelMenu[menu] || "");

    switch (menu) {
      case "home":        // kembali ke tampilan awal
        elNama.textContent  = NAMA_DEFAULT;
        elKelas.textContent = KELAS_DEFAULT;
        break;
      case "mahasiswa":   // nama diganti nama Anda
        elNama.textContent = NAMA_SAYA;
        break;
      case "kelas":       // SI-3X diganti 3E
        elKelas.textContent = KELAS_SAYA;
        break;
    }
  });
});

/* Pencarian sederhana: menyaring daftar progres, aktifitas, dan dokumen */
document.getElementById("cari").addEventListener("input", e => {
  const kata = e.target.value.trim().toLowerCase();
  document.querySelectorAll("[data-cari]").forEach(item => {
    item.hidden = kata !== "" && !item.textContent.toLowerCase().includes(kata);
  });
});