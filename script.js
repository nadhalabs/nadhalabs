const hero = document.querySelector(".hero");
const header = document.querySelector(".site-header");

function updateHeaderTone() {
  if (!hero || !header) return;

  const heroRect = hero.getBoundingClientRect();
  header.classList.toggle("on-light", heroRect.bottom <= 80);
}

window.addEventListener("scroll", updateHeaderTone, { passive: true });
updateHeaderTone();
