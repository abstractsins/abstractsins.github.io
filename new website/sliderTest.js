var heroSliderEl = document.getElementById('hero-slider');
// var timer = heroSliderEl.getAttribute('data-timer');
var timer = 4000;
var auto = true;

var arrows = Array.from(document.getElementsByClassName('slick-arrow'));
arrows.forEach(arrow => {
  arrow.addEventListener('click', navButtonHandler);
})

// Auto-advance interval
var nextInt; 
// startInterval();
var intCount = 0;

var sliderObj = {
    slide1: {
        imageSrc: 'assets/img/muhammad-faiz-zulkeflee-ZzfHvRuYTZk-unsplash.jpg',
        imageAlt: 'city skyline at night',
        headline: '2025 News Headline',
        subTitle: 'Subtitle of the first hero article - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        linkText: 'Explore the Foundation',
        linkAddy: 'undefined',
    },
    slide2: {
        imageSrc: 'assets/img/frames-for-your-heart-WwJEicqu9pI-unsplash.jpg',
        imageAlt: 'convention attendees',
        headline: 'Vestibulum vel quam eget purus',
        subTitle: 'Sed id lorem imperdiet, tristique justo ut, dapibus diam. Suspendisse potenti. Nulla non scelerisque quam, id fermentum nisl. Etiam ultricies, erat quis sollicitudin lobortis, tellus nisl feugiat quam.',
        linkText: 'Access The Toolkit',
        linkAddy: 'undefined',
    },
    slide3: {
        imageSrc: 'assets/img/product-school-nOvIa_x_tfo-unsplash.jpg',
        imageAlt: 'video camera taping speaker',
        headline: 'Phasellus mollis magna in ex fermentum',
        subTitle: 'Nunc tristique dictum lorem, at aliquet purus imperdiet lacinia. Donec a maximus massa, facilisis varius libero. Ut augue mi, tincidunt at cursus et, luctus id nisi. Donec nec metus non erat placerat volutpat.',
        linkText: 'Get Your Tickets',
        linkAddy: 'undefined',
    },
}

var track = document.getElementById('slick-track');
var slides = Object.keys(sliderObj);

startSlider();

// DEBUG
// slides.forEach((slide, i, a) =>{
//   // var slideEl = document.createElement('slide');
//   var slideEl = slideCreator(i);
//   track.append(slideEl);
// });


function startSlider() {
  var firstSlide = slideCreator(0);

  firstSlide.classList.add('slide-visible');

  track.append(firstSlide);
}


function slideCreator(n) {
  var slideEl = document.createElement('slide');
  slideEl.setAttribute('id', 'slide-'+n);
  console.log(n);
  slideEl.style.backgroundImage = 'url(' + sliderObj[slides[n]].imageSrc + ')';
  var slideContent = slideContentCreator(n);
  var slideHeader = slideHeaderCreator(n);
  var slideSubHeader = slideSubHeaderCreator(n);
  var link = slideLinkCreator(n);
  slideContent.append(slideHeader);
  slideContent.append(slideSubHeader);
  slideContent.append(link);
  slideEl.append(slideContent);
  
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
  var headline = sliderObj[slides[n]].headline;
  el.innerText = headline;
  return el;
}


function slideSubHeaderCreator(n) {
  var el = document.createElement('span');
  el.classList.add('slide-sub-header');
  var copy = sliderObj[slides[n]].subTitle;
  el.innerText = copy;  
  return el;
}


function slideLinkCreator(n) {
    var el = document.createElement('a');
    el.classList.add('slide-link');
    var linkAddy = sliderObj[slides[n]].linkAddy;
    var linkText = sliderObj[slides[n]].linkText;
    el.href = linkAddy;
    el.innerText = linkText;
    el.role = 'link';
    return el;
}


function autoAdvance() {
  if (auto) {
    console.log('autoAdvance called!');

    intCount++;
    navAction('Next');
    console.log('intcount: ' + intCount);
  }
}


function navButtonHandler(event) {
  var target = event.target;
  navAction(target);
  // getPosition(target);
  clearInterval(nextInt);
  startInterval();
}


function startInterval() {
  nextInt = setInterval(autoAdvance, timer);
}


function getPosition(el) {
  console.log(el.getBoundingClientRect());
}


function navAction(direction) {
  var action;
  if (typeof direction === 'object') {
    console.log(direction.getAttribute('aria-label'));
    action = direction.getAttribute('aria-label').toLowerCase();
  } else if (typeof direction === 'string') {
    console.log(direction);
    action = direction.toLowerCase();
  }
  var slideNum = parseInt(getSlideNumber());
  var nextSlideNum;
  switch (action) {
    case 'next': nextSlideNum = advanceSlide(slideNum); break;
    case 'previous': nextSlideNum = goBackSlide(slideNum); break;
  }
  slideCreator(nextSlideNum);
  console.log('going to slide ' + nextSlideNum);

  navToSlide(slideNum, action, nextSlideNum);
}


function navToSlide(current, action, next) {
  console.log('navToSlide called');
  var nextSlide = slideCreator(next);
  var currentSlide = document.getElementById('slide-'+current);
  switch (action) {
    case 'next': 
      currentSlide.after(nextSlide); 
      nextSlide.classList.add('add-slide-right');
      currentSlide.classList.add('remove-slide-left');
      break;
    case 'previous': 
      currentSlide.before(nextSlide); 
      nextSlide.classList.add('add-slide-left');
      currentSlide.classList.add('remove-slide-right'); 
      break;
    }
  // currentSlide.remove();
  nextSlide.classList.add('slide-visible');
  nextSlide.style.position = 'absolute';
  currentSlide.classList.remove('slide-visible');
}


function advanceSlide(slideNum) {
  if (slideNum === slides.length-1) {
    return 0;
  } else {
    return slideNum+1;
  }
}


function goBackSlide(slideNum) {
  if (slideNum === 0) {
    return slides.length-1;
  } else {
    return slideNum-1;
  }
}


function getSlideNumber() {
  var visibleSlides = document.getElementsByClassName('slide-visible');
  if (visibleSlides) {
    var currentSlide = visibleSlides[0];
  }
  var slideNumber = currentSlide.getAttribute('id').match(/\d/);
  console.log('current slide number: ' + slideNumber);

  return slideNumber;
}







console.log('SLIDER LOADED!');
console.log('auto-advance slide timer: ' + timer + 'ms');
