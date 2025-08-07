const menu = document.getElementById("menu");
const bar_btn = document.getElementById("barbtn");
const menuhover = document.getElementsByClassName("menu-hover");

bar_btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

