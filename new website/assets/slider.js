// TODO
// resizing on event

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


    var timer = 8000;

    // Auto-advance interval
    var nextInt;
    startInterval();

    var sliderObj = {
        slide1: {
            imageSrc: 'assets/img/muhammad-faiz-zulkeflee-ZzfHvRuYTZk-unsplash.webp',
            imageAlt: 'city skyline at night',
            headline: '2025 News Headline',
            subTitle: 'Subtitle of the first hero article - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            linkText: 'Explore the Foundation',
            linkAddy: 'undefined',
        },
        slide2: {
            imageSrc: 'assets/img/frames-for-your-heart-WwJEicqu9pI-unsplash.webp',
            imageAlt: 'convention attendees',
            headline: 'Vestibulum vel quam',
            subTitle: 'Sed id lorem imperdiet, tristique justo ut, dapibus diam. Suspendisse potenti. Nulla non scelerisque quam, id fermentum nisl. Etiam ultricies, erat quis sollicitudin lobortis, tellus nisl feugiat quam.',
            linkText: 'Access The Toolkit',
            linkAddy: 'undefined',
        },
        slide3: {
            imageSrc: 'assets/img/product-school-nOvIa_x_tfo-unsplash.webp',
            imageAlt: 'video camera taping speaker',
            headline: 'Phasellus mollis magna',
            subTitle: 'Nunc tristique dictum lorem, at aliquet purus imperdiet lacinia. Donec a maximus massa, facilisis varius libero. Ut augue mi, tincidunt at cursus et, luctus id nisi. Donec nec metus non erat placerat volutpat.',
            linkText: 'Get Your Tickets',
            linkAddy: 'undefined',
        },
    }

    var track = document.getElementById('hero-slide-track');
    var slidesKeys = Object.keys(sliderObj);
    // var slideDeck;
    // let currentIndex = 0;

    startSlider();

    const slider = document.querySelector('.center-slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
    const slidesToShow = 1; // Number of slides to show at once
    const totalSlides = slides.length;

    cloneSlides();

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // setInterval(nextSlide, 5000); // Auto slide every 5 seconds

    // Initialize slider position
    slider.style.transform = `translateX(${-(currentIndex + slidesToShow) * (100 / slidesToShow)}%)`;


    function screenChanges(type) {
        console.log(type);
        var style = type+'Screen';
        if (window.screenSizeStyleHeroSlider !== undefined) {
            if (window.screenSizeStyleHeroSlider !== style) {
                console.log(screenSizeStyleHeroSlider);
                window.screenSizeStyleHeroSlider = style;
                heroSliderReset();
            }
        } else {
            window.screenSizeStyleHeroSlider = style;
        }
    }

    
    function heroSliderReset() {
        console.log('resetting hero slider');
        track.replaceChildren();
        startSlider();
        cloneSlides();
    }

    function startSlider() {
        slideDeck = createSlides();
        slideDeck.forEach(slide => track.append(slide));
    }


    function createSlides() {
        var slideDeck = [];
        var firstSlide = slideCreator(0);
        firstSlide.classList.add('slide-visible');

        slideDeck.push(firstSlide);
        for (let i = 1; i < slidesKeys.length; i++) {
            slideDeck.push(slideCreator(i));
        }

        var firstClone = slideCreator(0, true);
        var lastClone = slideCreator(slidesKeys.length - 1, true);

        console.log(slideDeck);
        return slideDeck;
    }


    function slideCreator(n, clone) {
        var slideEl = document.createElement('div');
        slideEl.classList.add('slide');
        slideEl.setAttribute('id', 'slide-' + n);
        console.log(n);
        slideEl.style.backgroundImage = 'url(' + sliderObj[slidesKeys[n]].imageSrc + ')';
        var slideContent = slideContentCreator(n);
        var slideHeader = slideHeaderCreator(n);
        var slideSubHeader = slideSubHeaderCreator(n);
        var link = slideLinkCreator(n);
        slideContent.append(slideHeader);
        slideContent.append(slideSubHeader);
        slideContent.append(link);
        slideEl.append(slideContent);

        if (clone === true) {
            slideEl.classList.add('clone');
        }

        return slideEl;
    }


    function slideContentCreator(n) {
        var el = document.createElement('div');
        el.classList.add('slide-copy');
        return el;
    }


    function slideHeaderCreator(n) {
        var el = document.createElement('h2');
        el.classList.add('slide-header');
        var headline = sliderObj[slidesKeys[n]].headline;
        el.innerText = headline;
        return el;
    }


    function slideSubHeaderCreator(n) {
        var el = document.createElement('span');
        el.classList.add('slide-sub-header');
        var copy = sliderObj[slidesKeys[n]].subTitle;
        el.innerText = copy;
        return el;
    }


    function slideLinkCreator(n) {
        var el = document.createElement('a');
        el.classList.add('slide-link');
        var linkAddy = sliderObj[slidesKeys[n]].linkAddy;
        var linkText = sliderObj[slidesKeys[n]].linkText;
        el.href = linkAddy;
        el.innerText = linkText;
        el.role = 'link';
        return el;
    }


    function startInterval() {
        nextInt = setInterval(nextSlide, timer);
    }


    function getPosition(el) {
        console.log(el.getBoundingClientRect());
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
            clearInterval(nextInt);
            startInterval();
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
            clearInterval(nextInt);
            startInterval();
        }
    }

    console.log('SLIDER LOADED!');
    console.log('auto-advance slide timer: ' + timer + 'ms');

});
