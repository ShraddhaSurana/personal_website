(function () {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const currentPage = document.body.getAttribute("data-page");
  if (currentPage) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("data-page") === currentPage) {
        link.classList.add("active");
      }
    });
  }

  const revealNodes = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealNodes.length > 0) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealNodes.forEach(function (node) {
      observer.observe(node);
    });
  } else {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const statusNode = document.querySelector("[data-form-status]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.querySelector("#contact-name").value.trim();
      const email = form.querySelector("#contact-email").value.trim();
      const subject = form.querySelector("#contact-subject").value.trim();
      const message = form.querySelector("#contact-message").value.trim();

      if (!name || !email || !subject || !message) {
        if (statusNode) {
          statusNode.textContent = "Please fill in all fields before sending.";
        }
        return;
      }

      const body = [
        "Name: " + name,
        "Email: " + email,
        "",
        message,
      ].join("\n");

      const mailto =
        "mailto:shraddha.surana@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailto;

      if (statusNode) {
        statusNode.textContent =
          "Opening your mail app. If it does not open, email shraddha.surana@gmail.com directly.";
      }
    });
  }
})();
