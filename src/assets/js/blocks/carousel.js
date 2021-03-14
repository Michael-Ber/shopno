const carousel = (parentSelector, trackSelector, itemSelector, dotsSelector, arrowsSelector, activeClass, arrows=false) => {
    const slider = document.querySelector(parentSelector),
          track = slider.querySelector(trackSelector),
          items = slider.querySelectorAll(itemSelector),
          dots = slider.querySelectorAll(dotsSelector);
          
    let offset = 0,
        slideIndex = 0,
        itemWidth,
        trackWidth;
    
    const init = () => {
        items.forEach(item => {
            item.style.minWidth = +window.getComputedStyle(slider).width.slice(0, -2) + 'px';
        });
        itemWidth = +window.getComputedStyle(items[0]).width.slice(0, -2);
        trackWidth = itemWidth * items.length;
        track.style.transform = `translateX(0px)`;
        dots.forEach(dot => {
            dot.classList.remove(activeClass);
        });
        dots[0].classList.add(activeClass);
    };
    init();
    // console.log('here');
    // const mediaQuery575 = window.matchMedia('(max-width: 575px)');
    // const mediaQuery767 = window.matchMedia('(max-width: 767px)');
    // const mediaQuery991 = window.matchMedia('(max-width: 991px)');
    // const mediaQuery1199 = window.matchMedia('(max-width: 1199px)');

    // function handleTabletChange(e) {
    //     if(e.matches) {
    //         items.forEach(item => {
    //             item.style.minWidth = +window.getComputedStyle(slider).width.slice(0, -2) + 'px';
    //         });
    //         itemWidth = +window.getComputedStyle(items[0]).width.slice(0, -2);
    //         trackWidth = itemWidth * items.length;
    //         // track.style.width = trackWidth + 'px';
    //     }
    // }

    // handleTabletChange(mediaQuery575);
    // handleTabletChange(mediaQuery767);
    // handleTabletChange(mediaQuery991);
    // handleTabletChange(mediaQuery1199);

    // console.log(itemWidth);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            dots.forEach(dot => {
                dot.classList.remove(activeClass);
            });
            this.classList.add(activeClass);
            slideIndex = i;
            offset = itemWidth * slideIndex;
            track.style.transform = `translateX(-${offset}px)`;
        });
    });

    if(arrows) {
        const prev = slider.querySelector(arrowsSelector).children[0],
              next = slider.querySelector(arrowsSelector).children[1];
        
        next.addEventListener('click', () => {
            if(offset >= trackWidth - itemWidth) {
                offset = 0;
                slideIndex = 0;
            }else {
                offset += itemWidth;
                slideIndex += 1;
            }
            track.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.classList.remove(activeClass);
            });
            dots[slideIndex].classList.add(activeClass);
        });
        prev.addEventListener('click', () => {
            if(offset <= 0) {
                offset = trackWidth - itemWidth;
                slideIndex = items.length - 1;
            }else {
                offset -= itemWidth;
                slideIndex -= 1;
            }
            track.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => {
                dot.classList.remove(activeClass);
            });
            dots[slideIndex].classList.add(activeClass);
        });
    }
};

export default carousel;