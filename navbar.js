export function initNavbar() {
  const hamburgerBtn = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const contentWrapper = document.querySelector(".content-wrapper");

  if (!hamburgerBtn || !sidebar || !contentWrapper) return;

  const hamburgerIcon = hamburgerBtn.querySelector("i");
  const navLinks = sidebar.querySelectorAll("li");

  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");

    const isOpen = sidebar.classList.contains("show");

    hamburgerIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    hamburgerIcon.style.color = "var(--primary)";

    hamburgerBtn.setAttribute("aria-expanded", isOpen);
    sidebar.setAttribute("aria-hidden", !isOpen);

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

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("show");
      hamburgerIcon.className = "fas fa-bars";
      contentWrapper.classList.remove("blur");
      hamburgerBtn.setAttribute("aria-expanded", false);
      sidebar.setAttribute("aria-hidden", true);
    });
  });
}
