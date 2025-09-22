// 중앙 로고 ↔ 메뉴 hover 동기화
function linkHover(letterSelector, menuSelector, color) {
  const letter = document.querySelector(letterSelector);
  const menu = document.querySelector(menuSelector);

  function activate() {
    letter.style.color = color;
    menu.style.color = color;
    menu.style.transform = "scale(1.2)";
  }
  function deactivate() {
    letter.style.color = "";
    menu.style.color = "";
    menu.style.transform = "";
  }

  if (letter && menu) {
    letter.addEventListener("mouseenter", activate);
    letter.addEventListener("mouseleave", deactivate);
    menu.addEventListener("mouseenter", activate);
    menu.addEventListener("mouseleave", deactivate);
  }
}

linkHover(".letter-a", ".about", "red");
linkHover(".letter-p", ".project", "orange");
linkHover(".letter-x", ".experience", "royalblue");
linkHover(".letter-e", ".education", "green");
