export const scrollToSection = (id) => {
  const container = document.getElementById("scroll-container");
  const section = document.getElementById(id);

  if (!container || !section) return;

  container.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
};
