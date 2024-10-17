const img = document.getElementById("rimg");
var counter = 0;
img.onclick = moveImg;

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

function moveImg() {
    img.style.right = `${counter}px`;
    counter += 10;
}
