// TODO
// nav dot listener
// nav arrows
// card resizing

document.addEventListener('DOMContentLoaded', function () {



    window.addEventListener('resize', () => {
        const viewportWidth = window.innerWidth;
        console.log(`Viewport width: ${viewportWidth}px`);

        if (viewportWidth < 768) {
            screenChanges('tiny');
        } else if (viewportWidth < 1200) {
            screenChanges('small');
        } else {
            screenChanges('big');
        }
    });


    var sliderObj2 = {
        slide1: {
            imageSrc: 'assets/img/guido-coppa-FPHo-LzhDqQ-unsplash.jpg',
            imageAlt: 'city skyline at night',
            headline: 'Priorities',
            subTitle: 'Subtitle of the first hero article - Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            linkText: 'Read more.',
            linkAddy: 'undefined',
        },
        slide2: {
            imageSrc: 'assets/img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg',
            imageAlt: 'convention attendees',
            headline: 'Why EEWDF',
            subTitle: 'Sed id lorem imperdiet, tristique justo ut, dapibus diam...',
            linkText: 'Read more.',
            linkAddy: 'undefined',
        },
        slide3: {
            imageSrc: 'assets/img/peter-f-HJpISHFSkJo-unsplash.jpg',
            imageAlt: 'video camera taping speaker',
            headline: 'join',
            subTitle: 'Ut augue mi, tincidunt at cursus et, luctus id nisi...',
            linkText: 'Read more.',
            linkAddy: 'undefined',
        },
        slide4: {
            imageSrc: 'assets/img/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg',
            imageAlt: 'video camera taping speaker',
            headline: 'industry data',
            subTitle: 'Nunc tristique dictum lorem, at aliquet purus imperdiet lacinia. Donec a maximus massa...',
            linkText: 'Read more.',
            linkAddy: 'undefined',
        },
    }

    var slidesKeys = Object.keys(sliderObj2);
    var track = document.getElementById('smaller-slide-track');
    const ulEl = document.getElementById("small-slider-nav-bar");

    startSlider();

    const slider = document.querySelector('.center-slider-small');
    const slides = document.querySelectorAll('.card');
    const prevButton = document.getElementById('prev-small');
    const nextButton = document.getElementById('next-small');
    let currentIndex = 0;
    const slidesToShow = 4; // Number of slides to show at once
    const totalSlides = slides.length;

    cloneSlides();

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);


    // Initialize slider position
    slider.style.transform = `translateX(${-(currentIndex + slidesToShow) * (100 / slidesToShow)}%)`;







    function screenChanges(type) {
        console.log(type);
        var style = type+'Screen';
        if (window.screenSizeStyleSmallSlider !== undefined) {
            if (window.screenSizeStyleSmallSlider !== style) {
                console.log(screenSizeStyleSmallSlider);
                window.screenSizeStyleSmallSlider = style;
                smallSliderReset();
            }
        } else {
            window.screenSizeStyleSmallSlider = style;
        }
    }

    function smallSliderReset() {
        console.log('resetting small slider');
        track.replaceChildren();
        ulEl.replaceChildren();
        startSlider();
        cloneSlides();
    }

    function startSlider() {
        slideDeck = createSlides();
        slideDeck.forEach(slide => track.append(slide));
        var liElArr = liNavCreator();
        liElArr.forEach(li => ulEl.append(li));
    }


    function createSlides() {
        var slideDeck = [];
        var firstSlide = slideCreator(0);
        slideDeck.push(firstSlide);
        for (let i = 1; i < slidesKeys.length; i++) {
            slideDeck.push(slideCreator(i));
        }
        var firstClone = slideCreator(0, true);
        var lastClone = slideCreator(slidesKeys.length - 1, true);
        console.log(slideDeck);
        return slideDeck;
    }

    function liNavCreator() {
        var liElArr = [];
        if (window.innerWidth < 1200) {
            console.log('screen is < 1200 px');
            slidesKeys.forEach((slide, i) => {
                var liEl = document.createElement('li');
                liEl.setAttribute('role', 'presentation');
                var button = liNavButtonCreator(i);
                if (i === 0) {
                    liEl.classList.add('slick-active');
                }
                liEl.append(button);
                liElArr.push(liEl);
            });
        } else {
            // make one
            console.log('screen is >= 1200 px');
            var liEl = document.createElement('li');
            liEl.classList.add('slick-active');
            liEl.setAttribute('role', 'presentation');
            var button = liNavButtonCreator('x');
            liEl.append(button);
            liElArr.push(liEl);
        }
        return liElArr;
    }

    function liNavButtonCreator(n) {
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute('type', 'button');
        buttonEl.setAttribute('role', 'tab');
        buttonEl.setAttribute('role', 'tab');
        buttonEl.setAttribute('id', 'small-slider-nav-button-' + n);
        if (n < slidesKeys.length) {
            buttonEl.setAttribute('aria-label', n + 1 + ' of ' + slidesKeys.length);
        } else if (n == 'x') {
            buttonEl.setAttribute('aria-label', '1 of 1');
        }
        return buttonEl;
    }

    function slideCreator(n, clone) {
        var slideEl = document.createElement('div');
        slideEl.classList.add('card');
        slideEl.setAttribute('id', 'card-' + n);
        var imgContent = slideImageWrapperCreator(n);
        var slideContent = slideContentCreator(n);
        var slideHeader = slideHeaderCreator(n);
        var slideSubHeader = slideSubHeaderCreator(n);
        var link = slideLinkCreator(n);
        slideContent.append(slideHeader);
        slideContent.append(slideSubHeader);
        slideContent.append(link);
        slideEl.append(imgContent);
        slideEl.append(slideContent);

        if (clone === true) {
            slideEl.classList.add('clone');
        }

        return slideEl;
    }

    function slideImageWrapperCreator(n) {
        var imgWrapper = document.createElement('div');
        imgWrapper.classList.add('image-wrapper');
        var img = document.createElement('div');
        img.style.backgroundImage = 'url(' + sliderObj2[slidesKeys[n]].imageSrc + ')';
        img.classList.add('small-slider-image');
        imgWrapper.append(img);
        return imgWrapper;
    }


    function slideContentCreator(n) {
        var el = document.createElement('div');
        el.classList.add('slide-copy-2');
        return el;
    }


    function slideHeaderCreator(n) {
        var el = document.createElement('h2');
        el.classList.add('slide-header-2');
        var headline = sliderObj2[slidesKeys[n]].headline;
        el.innerText = headline;
        return el;
    }


    function slideSubHeaderCreator(n) {
        var el = document.createElement('span');
        el.classList.add('slide-sub-header-2');
        var copy = sliderObj2[slidesKeys[n]].subTitle;
        el.innerText = copy;
        return el;
    }


    function slideLinkCreator(n) {
        var el = document.createElement('a');
        el.classList.add('slide-link-2');
        var linkAddy = sliderObj2[slidesKeys[n]].linkAddy;
        var linkText = sliderObj2[slidesKeys[n]].linkText;
        el.href = linkAddy;
        el.innerText = linkText;
        el.role = 'link';
        return el;
    }


    function cloneSlides() {
        for (let i = 0; i < slidesToShow; i++) {
            let cloneFirst = slides[i].cloneNode(true);
            let cloneLast = slides[totalSlides - 1 - i].cloneNode(true);
            slider.appendChild(cloneFirst);
            slider.insertBefore(cloneLast, slider.firstChild);
        }
    }


    function updateSlider() {
        slider.style.transition = 'transform 0.4s ease-in-out';
        slider.style.transform = `translateX(${-(currentIndex + slidesToShow) * (100 / slidesToShow)}%)`;
    }


    function nextSlide() {
        if (currentIndex >= totalSlides) {
            slider.style.transition = 'none';
            currentIndex = 0;
            slider.style.transform = `translateX(${-(currentIndex + slidesToShow) * (100 / slidesToShow)}%)`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    currentIndex++;
                    updateSlider();
                });
            });
        } else {
            currentIndex++;
            updateSlider();
        }
    }


    function prevSlide() {
        if (currentIndex <= 0) {
            slider.style.transition = 'none';
            currentIndex = totalSlides;
            slider.style.transform = `translateX(${-(currentIndex + slidesToShow) * (100 / slidesToShow)}%)`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    currentIndex--;
                    updateSlider();
                });
            });
        } else {
            currentIndex--;
            updateSlider();
        }
    }

    console.log('SMALL SLIDER LOADED!');

});