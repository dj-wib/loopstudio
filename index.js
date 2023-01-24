const btnMenu = document.querySelector('.toggle-menu');
console.log(btnMenu);
const menu = document.querySelector('#menu');
console.log(menu)

function toggleMenu() {
    // const attributesOfBtn = btnMenu.attributes;
    // console.log(attributesOfBtn)
    const valueOfAriaExpended = btnMenu.getAttribute('aria-expanded');
    console.log("en string: ", valueOfAriaExpended);
    const openValue = JSON.parse(valueOfAriaExpended);
    console.log("une fois parse : ", openValue);
    btnMenu.setAttribute('aria-expanded', !openValue);
    console.log(menu.hidden);
    menu.hidden = !menu.hidden;
}

btnMenu.addEventListener('click', toggleMenu);