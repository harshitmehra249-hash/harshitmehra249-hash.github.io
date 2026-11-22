const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const photo = document.getElementById("profilePhoto");
const fallback = document.getElementById("portraitFallback");
photo.addEventListener("error", () => {
  photo.style.display = "none";
  fallback.style.display = "grid";
});
fallback.style.display = "none";

document.getElementById("year").textContent = new Date().getFullYear();