const knowMore = (itemsSelector, backsideSelector, mainContentSelector, triggerSelector, closeSelector) => {
    const items = document.querySelectorAll(itemsSelector);

    items.forEach(item => {
        const backside = item.querySelector(backsideSelector),
              mainContent = item.querySelector(mainContentSelector),
              moreBtn = item.querySelector(triggerSelector),
              close = item.querySelector(closeSelector);
        
        moreBtn.addEventListener('click', () => {
            backside.style.transform = `translateX(0%)`;
            mainContent.style.transform = `translateX(100%)`;
        });
        close.addEventListener('click', () => {
            backside.style.transform = `translateX(-100%)`;
            mainContent.style.transform = `translateX(0%)`;
        });
    });
};

export default knowMore;