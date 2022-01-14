const body = document.body;
const overlay = document.querySelector('#overlay');
const headerMenu = document.querySelector('.header__menu');
const barWrapper = document.querySelector('.bar-wrapper');
const navBar = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const subnavList = document.querySelector('.subnav-list');
const navTitles = document.querySelectorAll('.nav-title');
const subnavTitles = document.querySelectorAll('.subnav-title');

/* ===== SHOW/HIDE HEADER ===== */
var lastScroll = 0;
const header = document.querySelector('.header');

window.onscroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > header.offsetHeight) {
        if (currentScroll < lastScroll) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    } else {
        header.className = "header active";
    }

    lastScroll = currentScroll;
}

/* ===== SHOW/HIDE NAVBAR ===== */
headerMenu.onclick = () => {
    headerMenu.classList.toggle('active');
    barWrapper.classList.toggle('active');
    navBar.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('overlay-active');
};

/* ===== SHOW/HIDE SUBNAV ===== */
navTitles.forEach(item => {
    item.onclick = () => {
        const navItem = item.parentElement;
        const itemActive = navList.querySelector('.nav-item.active');
        const subitemActive = subnavList.querySelector('.has-panel.active');

        if (itemActive && itemActive !== navItem)
            itemActive.classList.remove('active');
        
        if (subitemActive) {
            subitemActive.classList.remove('active');
        }

        navItem.classList.toggle('active');
    }
});

/* ===== SHOW/HIDE NAV PANEL ===== */
subnavTitles.forEach(item => {
    item.onclick = (e) => {
        const subnavItem = item.parentElement;
        const itemActive = subnavList.querySelector('.has-panel.active');

        if (itemActive && itemActive !== subnavItem) {
            itemActive.classList.remove('active');
        }

        subnavItem.classList.toggle('active');
    }
});






