const header = document.querySelector("header");
const tombolmenu = document.querySelector("#tombol-menu");
const tombolTutupMenu = document.querySelector("#tombol-tutup-menu");

tombolmenu.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

tombolTutupMenu.addEventListener("click", () => tombolmenu.click());