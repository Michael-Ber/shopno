const stars = (starSelector, parentSelector) => {
    const star = document.querySelectorAll(starSelector),
          stars = document.querySelector(parentSelector);
    
    star.forEach(item => {
        item.addEventListener('click', () => {
            stars.setAttribute('data-total-value',item.getAttribute('data-item-value'));
        });
    });
};

export default stars;