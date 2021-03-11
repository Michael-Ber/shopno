const stars = (nodeSelector, starSelector, parentStarSelector) => {
    const parent = document.querySelectorAll(nodeSelector);
        
    parent.forEach(node => {
        const star = node.querySelectorAll(starSelector),
              stars = node.querySelector(parentStarSelector);
        star.forEach(item => {
            item.addEventListener('click', () => {
                stars.setAttribute('data-total-value',item.getAttribute('data-item-value'));
            });
        });
    });
};

export default stars;