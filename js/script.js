function linkHover(letterSelector, floatMenuSelector, headerSelector, color) {
  const letter = document.querySelector(letterSelector);
  const floatMenu = document.querySelector(floatMenuSelector);
  const header = document.querySelector(headerSelector);

  function activate() {
    if (letter) letter.style.color = color;
    if (floatMenu) {
      floatMenu.style.color = color;
      floatMenu.style.transform = "scale(1.2)";
    }
    if (header) header.style.color = color;
  }

  function deactivate() {
    if (letter) letter.style.color = "";
    if (floatMenu) {
      floatMenu.style.color = "";
      floatMenu.style.transform = "";
    }
    if (header) header.style.color = "";
  }

  [letter, floatMenu, header].forEach(el => {
    if (el) {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    }
  });
}

// About ↔ A
linkHover(".letter-a", ".float-menu.about", ".full-menu .about", "red");
// Project ↔ P
linkHover(".letter-p", ".float-menu.project", ".full-menu .project", "orange");
// Experience ↔ X
linkHover(".letter-x", ".float-menu.experience", ".full-menu .experience", "royalblue");
// Education ↔ E
linkHover(".letter-e", ".float-menu.education", ".full-menu .education", "green");
