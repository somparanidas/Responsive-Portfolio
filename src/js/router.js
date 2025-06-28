// Simple hash-based router for static portfolio

document.addEventListener("DOMContentLoaded", () => {
  const routes = ["home", "about", "skills", "work", "contact"];

  async function loadSection(section) {
    // Remove all dynamic sections
    document.querySelectorAll(".dynamic-section").forEach((el) => el.remove());
    let file = `src/js/pages/${section}.html`;
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("Not found");
      const html = await res.text();
      const temp = document.createElement("div");
      temp.innerHTML = html;
      const newSection = temp.querySelector("section");
      if (newSection) {
        newSection.classList.add("dynamic-section");
        document.querySelector("main.l-main")?.appendChild(newSection);
        document.title = newSection.dataset.title || "Portfolio";
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
        return;
      }
    } catch (e) {}
    // If not found, load 404
    const res = await fetch("src/js/pages/notfound.html");
    const html = await res.text();
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const notFoundSection = temp.querySelector("section");
    if (notFoundSection) {
      notFoundSection.classList.add("dynamic-section");
      document.querySelector("main.l-main")?.appendChild(notFoundSection);
      document.title = notFoundSection.dataset.title || "404 Not Found";
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    }
  }

  function router() {
    const hash = window.location.hash.replace("#/", "") || "home";
    if (routes.includes(hash)) {
      loadSection(hash);
    } else {
      loadSection("notfound");
    }
  }

  window.addEventListener("hashchange", router);
  router();
});
