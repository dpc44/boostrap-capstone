const IndexScript = {
    init() {
        this.addEventScrollingDocument();
        this.setCounterAllElement();
    },
    addEventScrollingDocument() {
        const header = document.get('header.header');
        const carouselSection = document.get('section.carousel-section');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= 100) {
                header.addClass('minimum');
                carouselSection.addClass('minimum');
            } else {
                header.removeClass('minimum');
                carouselSection.removeClass('minimum');
            }
        });
    },
    setCounterAllElement() {
        const allCounter = document.getAll('[data-number-counter]');
        allCounter.forEach(el => {
            const numberCounter = parseInt(el.attr('data-number-counter'));
            this.counterNumberFromZero(el, numberCounter, 5000);
        })
    },
    counterNumberFromZero(el, numberFinish, timeRun = 3000) {
        const step = Math.ceil(numberFinish * 50 / timeRun);
        let number = 0;
        const interval = setInterval(() => {
            number += step;
            el.innerText = number;
            if (number > numberFinish) {
                clearInterval(interval);
                el.innerText = numberFinish;
            }
        }, 50);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    IndexScript.init();
});
