// Smooth scrolling for navigation links
document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // offset for fixed header
        behavior: "smooth",
      });
    }
  });
});

// Section animation on scroll
function revealOnScroll() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// Project card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
  });
});

// Disable scroll in iframe
document.querySelectorAll(".project-iframe").forEach((iframe) => {
  iframe.addEventListener("load", () => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iframeDoc?.body) {
        iframeDoc.body.style.overflow = "hidden";
        iframeDoc.documentElement.style.overflow = "hidden";
      }
    } catch (err) {
      // Ignore cross-origin errors
    }
  });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toast Notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <div class="timer"></div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Remove after 5s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 5000);
}

// Handle Netlify Form Submission
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.ok) {
          showToast("✅ Message sent successfully!", "success");
          form.reset();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((err) => {
        showToast("❌ Something went wrong. Please try again.", "error");
        console.error(err);
      });
  });
}
