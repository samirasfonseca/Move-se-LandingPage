 const toggle = document.getElementById("menu-toggle");
  const links = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    links.classList.toggle("show");
  });

