// 중앙 로고 ↔ 메인 메뉴 hover 연동
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

// 연결 설정 (중앙 로고 ↔ 메인 메뉴만)
linkHover(".letter-a", ".float-menu.about", "red");
linkHover(".letter-p", ".float-menu.project", "orange");
linkHover(".letter-x", ".float-menu.experience", "royalblue");
linkHover(".letter-e", ".float-menu.education", "green");
