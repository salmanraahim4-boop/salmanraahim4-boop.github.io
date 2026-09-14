
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const menu = document.querySelector(".main-nav");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "✕" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

const setActiveLink = () => {
  let current = "home";
  const y = window.scrollY + 150;

  sections.forEach(section => {
    if (section.offsetTop <= y) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
};

window.addEventListener("scroll", setActiveLink, { passive:true });
setActiveLink();

document.getElementById("year").textContent = new Date().getFullYear();
