document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => {
    revealOnScroll.observe(element);
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.querySelector("i").className = "fa-solid fa-bars";
    });
  });

  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const quoteForm = document.getElementById("quoteForm");
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      businessName: document.getElementById("businessName").value.trim(),
      serviceNeeded: document.getElementById("serviceNeeded").value,
    };

    console.log("Cerso Blueprint Form Captured:", data);

    alert(
      `Thank you, ${data.name}! Your request concerning "${data.serviceNeeded}" for "${data.businessName}" has been received. We will respond shortly.`,
    );

    quoteForm.reset();
  });
});
