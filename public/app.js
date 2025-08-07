const menu = document.getElementById("menu");
const bar_btn = document.getElementById("barbtn");
const bar_icon = document.getElementById("bar-icon"); // آیکن داخل دکمه
const menu_links = document.querySelectorAll("#menu a");
const menuhover = document.getElementsByClassName("menu-hover");

// باز و بسته کردن منو با آیکن متغیر
bar_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");

    // تغییر آیکن
    if (menu.classList.contains("active")) {
        bar_icon.classList.remove("fa-bars");
        bar_icon.classList.add("fa-xmark");
    } else {
        bar_icon.classList.remove("fa-xmark");
        bar_icon.classList.add("fa-bars");
    }
});

// بستن منو هنگام کلیک بیرون
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !bar_btn.contains(e.target)) {
        closeMenu();
    }
});

// بستن منو هنگام کلیک روی هر لینک
menu_links.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

// تابع بستن منو
function closeMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        bar_icon.classList.remove("fa-xmark");
        bar_icon.classList.add("fa-bars");
    }
}

// بخش تب‌ها
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