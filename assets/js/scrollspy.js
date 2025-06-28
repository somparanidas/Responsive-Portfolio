// Scrollspy: update hash as you scroll through sections

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main.l-main > section");
  const navLinks = document.querySelectorAll(".nav__link");

  function onScroll() {
    let scrollPos = window.scrollY || window.pageYOffset;
    let found = false;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (
        scrollPos >= top - 100 &&
        scrollPos < top + section.offsetHeight - 100
      ) {
        const id = section.id.replace("-section", "");
        if (window.location.hash !== `#${id}`) {
          history.replaceState(null, "", `#${id}`);
        }
        navLinks.forEach((link) => link.classList.remove("active-link"));
        document
          .querySelectorAll(`.nav__link[href="#${id}"]`)
          .forEach((link) => link.classList.add("active-link"));
        found = true;
      }
    });
    if (!found) {
      history.replaceState(null, "", "#");
      navLinks.forEach((link) => link.classList.remove("active-link"));
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.getElementById(
          href.replace("#", "") + "-section"
        );
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

// === EmailJS Contact Form Handler ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact__form");
  if (form) {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // <-- Replace with your EmailJS user ID
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form).then(
        function () {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("Failed to send message. Please try again.");
        }
      );
    });
  }
});
