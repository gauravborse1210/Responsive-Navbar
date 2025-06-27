const ham_icon = document.querySelector(".ham-icon");
const sidebar = document.querySelector(".sidebar");

ham_icon.addEventListener("click", function () {
  sidebar.classList.toggle("hidden");
  
});
