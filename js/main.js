const arrow = document.querySelectorAll(".arrow");
const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".bx-menu");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;

    arrowParent.classList.toggle("showMenu");
  });
}

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
