export function initNavbar() {
  const hamburgerBtn = document.querySelector(".hamburger");
  const hamburgerIcon = hamburgerBtn.querySelector("i");
  const sidebar = document.querySelector(".sidebar");
  const navLinks = sidebar.querySelectorAll("li");
  const contentWrapper = document.querySelector(".content-wrapper");

  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");

    const isOpen = sidebar.classList.contains("show");
    hamburgerIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    hamburgerIcon.style.color = "var(--primary)";

    // ✅ Fix: Toggle blur on content-wrapper
    contentWrapper.classList.toggle("blur", isOpen);

    // Reset and trigger animations
    if (isOpen) {
      navLinks.forEach((link, i) => {
        link.style.animation = "none";
        link.offsetHeight; // force reflow
        link.style.animation = `slideInRight 0.4s ease forwards`;
        link.style.animationDelay = `${0.1 * i}s`;
      });
    }
  });
}
