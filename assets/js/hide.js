function openNav(id) {
    document.getElementById(id).style.height = "95%";
    document.getElementById('main').style.filter = "blur(4px)";
    document.getElementById('header').style.filter = "blur(4px)";
    document.getElementById('main').style.pointerEvents = "none";
    document.getElementById('header').style.pointerEvents = "none";
    document.getElementById('headerToggle').style.display = "none";
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}

function closeNav(id) {
    document.getElementById(id).style.height = "0%";
    document.getElementById('main').style.filter = 'none';
    document.getElementById('header').style.filter = 'none';
    document.getElementById('main').style.pointerEvents = "auto";
    document.getElementById('header').style.pointerEvents = "auto";
    document.getElementById('headerToggle').style.display = "block";
    document.documentElement.style.overflowY = 'scroll';
    document.body.scroll = "yes";
}