const body = document.body;
const overlay = document.querySelector('#overlay');
const headerMenu = document.querySelector('.header__menu');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const barWrapper = document.querySelector('.bar-wrapper');
const navBar = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navTitles = document.querySelectorAll('.nav-title');
const subnavList = document.querySelector('.subnav-list');
const subnavTitles = document.querySelectorAll('.subnav-title');
const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const searchPanel = document.querySelector('.search-panel');


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
    menuOpen.classList.toggle('hide');
    menuClose.classList.toggle('hide');
    barWrapper.classList.toggle('active');
    navBar.classList.toggle('active');
    overlay.classList.add('active');
    body.classList.add('overlay-active');
    const panelActive = subnavList.querySelector('.has-panel.active');
    if (panelActive)
        panelActive.classList.remove('active');
};

/* ===== SHOW/HIDE SUBNAV ===== */
navTitles.forEach(item => {
    item.onclick = () => {
        const navItem = item.parentElement;
        const itemActive = navList.querySelector('.nav-item.active');
        const panelActive = subnavList.querySelector('.has-panel.active');

        if (itemActive && itemActive !== navItem)
            itemActive.classList.remove('active');
        
        if (panelActive) {
            panelActive.classList.remove('active');
        }

        navItem.classList.toggle('active');
    }
});

/* ===== SHOW/HIDE NAV PANEL ===== */
subnavTitles.forEach(item => {
    item.onclick = (e) => {
        const panelItem = item.parentElement;
        const panelActive = subnavList.querySelector('.has-panel.active');

        if (panelActive && panelActive !== panelItem) {
            panelActive.classList.remove('active');
        }

        panelItem.classList.toggle('active');
    }
});

/* ===== SHOW/HIDE SEARCH ===== */
searchBtn.onclick = () => {
    searchBtn.classList.toggle('active');
    searchBar.classList.toggle('active');
    searchPanel.classList.toggle('active');
    overlay.classList.add('active');
    body.classList.add('overlay-active');
};
    
/* ===== CLICK OUTSIDE ===== */
document.onclick = (e) => {
    if (!navBar.contains(e.target) && !headerMenu.contains(e.target)) {
        headerMenu.classList.remove('active');
        menuOpen.classList.remove('hide');
        menuClose.classList.add('hide');
        barWrapper.classList.remove('active');
        navBar.classList.remove('active');

        const panelActive = subnavList.querySelector('.has-panel.active');
        if (panelActive)
            panelActive.classList.remove('active');
    }
    
    if (!searchPanel.contains(e.target) && !searchBtn.contains(e.target)) {
        searchPanel.classList.remove('active');
        searchBtn.classList.remove('active');
        searchBar.classList.remove('active');
    }

    if (!(headerMenu.className + " " + searchPanel.className).includes('active')) {
        overlay.classList.remove('active');
        body.classList.remove('overlay-active');
    }
};

/* ===== PANEL SCROLL ===== */
const panelScrolls = document.querySelectorAll('.header__panel-scroll');

panelScrolls.forEach(panel => {
    panel.style.maxHeight = `${window.innerHeight - 100}px`;
});

window.onresize = () => {
    panelScrolls.forEach(panel => {
        panel.style.maxHeight = `${window.innerHeight - 100}px`;
    });
};

/* ===== MENU PANEL ===== */
const menuPanelItems = document.querySelectorAll('.menu-panel-item');
const menuPanelBg = document.querySelector('.header__panel-bg');

menuPanelItems.forEach(item => {
    item.onmouseover = () => {
        item.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('overlay-active');

        headerMenu.classList.remove('active');
        menuOpen.classList.remove('hide');
        menuClose.classList.add('hide');
        barWrapper.classList.remove('active');
        navBar.classList.remove('active');
        const panelActive = subnavList.querySelector('.has-panel.active');
        if (panelActive)
            panelActive.classList.remove('active');
            
        searchPanel.classList.remove('active');
        searchBtn.classList.remove('active');
        searchBar.classList.remove('active');

        const itemHeight = item.querySelector('.header__panel').offsetHeight;
        menuPanelBg.style.height = `${itemHeight}px`;
    }

    item.onmouseleave = () => {
        item.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('overlay-active');
        menuPanelBg.style.height = `0px`;
    }
});






