const hamburger = (hamburgerSelector, menuSelector, activeClass) => {
    const hamburger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector);
    hamburger.addEventListener('click', () => {
        const lines = Array.prototype.slice.call(hamburger.children); // IE
        if(!menu.classList.contains(activeClass)) {
            menu.classList.add(activeClass);
            lines[0].style.transform = `rotate(45deg) translateY(75%)`;
            lines[0].style.marginBottom = 0;
            lines[2].style.transform = `rotate(-45deg) translateY(-75%)`;
            lines[1].style.display = 'none';
        }else {
            menu.classList.remove(activeClass);
            lines[0].style.transform = 'none';
            lines[0].style.marginBottom = '0.25rem';
            lines[2].style.transform = 'none';
            lines[1].style.display = 'flex';
        }
    });
};

export default hamburger;