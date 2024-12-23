$ = jQuery;

//* ALLY MENU TOGGLE
var allyToggle = document.getElementsByClassName('pojo-a11y-toolbar-toggle')[0];

allyToggle.addEventListener('click', function(event){
    event.preventDefault;
    var toolbar = document.getElementById('pojo-a11y-toolbar');

    if (toolbar.classList.contains('pojo-a11y-toolbar-open')) {
        toolbar.classList.remove('pojo-a11y-toolbar-open');
    } else {
        toolbar.classList.add('pojo-a11y-toolbar-open');
    }
});


//* MM MENU TOGGLE
var open = document.getElementById('hamburger');
var mmMenu = document.getElementById('mm-site-navigation');
open.addEventListener('click', (e)=> {
    if (!mmMenu.classList.contains('mm-menu_opened')) {
        mmMenu.classList.add('mm-menu_opened');
        mmMenu.removeAttribute('aria-hidden');
        document.getElementById('page').classList.add('move');
    } 
})
var close = document.getElementsByClassName('mm-btn_close')[0];
close.addEventListener('click', (event)=> {
    event.preventDefault;
    if (mmMenu.classList.contains('mm-menu_opened')) {
        document.getElementById('page').classList.remove('move');
        setTimeout(function() {
            mmMenu.classList.remove('mm-menu_opened');
            mmMenu.setAttribute('aria-hidden', 'true');
            document.getElementById('page').setAttribute('style', '');
        }, 750);
    } 
});


//* SEARCH EXPAND
var search = document.getElementById('submitSearch');
search.addEventListener('click', function(e) {
    e.preventDefault;
    if (!document.getElementById('mainSearch').classList.contains('expand-search')) {
        console.log('CONDITION 1!!!!!!!!!!!!');
        document.getElementsByClassName('utility-menu-container')[0].style.visibility = 'hidden';
        document.getElementById('mainSearch').classList.add('expand-search');
        e.target.previousElementSibling.lastElementChild.classList.remove('compress-search');
        // e.target.previousElementSibling.lastElementChild.classList.add('expand-search');
        document.getElementById('navSearch').focus();
    } else {
        //submit form
        e.target.previousElementSibling.lastElementChild.classList.add('compress-search');
        document.getElementById('mainSearch').classList.remove('expand-search');
        e.target.previousElementSibling.lastElementChild.classList.remove('expand-search');
        setTimeout(function() {
            document.getElementsByClassName('utility-menu-container')[0].style.visibility = 'visible';
        }, 350);
    }
});

//* PRIMARY MENU LI POPUPS
var ul = document.getElementById('primary-menu');
var lis = Array.from(ul.children);
var mmSub = document.getElementById('main-menu-sub');

var menuItemLists = {
    'menu-item-5xx': ['Something', 'Something 1', 'Something 2'],
    'menu-item-6xx': ['Mission', 'Mission1', 'Mission2', 'Mission3'],
    'menu-item-7xx': ['People', 'People 1'],
    'menu-item-8xx': ['Links', 'Links1', 'Links2', 'Links3', 'Links4'],
    'menu-item-9xx': ['Resources'],
}

document.querySelectorAll('.dropdown').forEach(function(li) {
    li.addEventListener('mouseover', function(e) {
        console.log('hover! ' + li.id);
        // position menu board
        var x = document.getElementById('primary-menu').getBoundingClientRect().x;
        var y = document.getElementById('content').getBoundingClientRect().y;
        var width = window.getComputedStyle(ul).width;
        console.log(x, y);
        if (li.id.match(/\d/)) {
            populateSubMenu(li.id, mmSub);
        }
        mmSub.style.left = x+'px';;
        mmSub.style.top = y-10+'px';
        mmSub.style.width = width;
        mmSub.firstElementChild.style.width = width;
        mmSub.style.display = 'flex';
    })
    li.addEventListener('mouseout', function(e) {
        mmSub.style.display = 'none';
    })
})

function populateSubMenu(id, sub) {
    var lis = menuItemLists[id];
    sub.firstElementChild.innerHTML = '';

    for (let i = 0; i < lis.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('id', 'menu-item-sub-' + id + '-' + i);
        li.setAttribute('class', 'dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-18836')
        li.innerHTML = '<a href="https://www.dalrtjyrtlaschamber.org/why-dallas/" role="link">';
        li.firstElementChild.innerText = lis[i];
        sub.firstElementChild.append(li);
    }
}








$ = jQuery;
$(document).ready(function() {
    // $(document).foundation();
    $(document).on('click touchend', '.mm-btn_next', function(e) {
        e.preventDefault();
        $('.mm-btn.mm-btn_prev.mm-navbar__btn').text('BACK');
        $('.mm-btn.mm-btn_prev.mm-navbar__btn').removeClass('mm-hidden');
    })
    $('.mm-btn.mm-btn_prev.mm-navbar__btn').on('click', function(e) {
        e.preventDefault();
        $(e.target).addClass('mm-hidden');
    })
    $('#mainSearch #submitSearch').on('click', function(e) {
        if ($(e.target).parent().find('.expand-search').length === 0) {
            e.preventDefault();
            $(this).parent().children('div').find(".search-field").focus();
            $(this).parents('.utility-menu-wrapper').find('.menu-utility-menu-container').css('opacity', 0)
        }
    });
    var searchArea = $('#mainSearch > div');
    $('body').on('click', function(e) {
        if ($(e.target).parents('#mainSearch').length === 0) {
            searchArea.removeClass('expand-search');
            $('.menu-utility-menu-container').css('opacity', 1)
        }
    });
    $('#primary-menu .menu-item-has-children > a').each(function() {
        $(this).after('<button type="button" class="nav-menu-button open-menu-level"></button>');
        var buttonHtml = '<button type="button" class="nav-menu-button close-menu-level"></button>';
        var linkHtml = '<a href="' + $(this).attr('href') + '">' + $(this).text() + '</a>';
        $(this).siblings('.sub-menu-wrap').find('ul').prepend('<li class="parent-nav-item">' + buttonHtml + linkHtml + '</li>')
    });
    $('#primary-menu > li.menu-item-has-children > a').on('click', function(e) {
        var input = $('html').attr('data-whatintent');
        if (Foundation.MediaQuery.atLeast('medium') && input != 'mouse')
            e.preventDefault()
    });
    $(document).on('click', '.phone .link.tablet-up', function(e) {
        e.preventDefault()
        $(this).parent().parent().parent().parent().toggleClass('phone-active')
    })
    $("#site-navigation").mmenu({
        "extensions": ["fullscreen", "position-back", "position-right", "multiline", "border-none"],
        "navbars": [{
            "position": "top right",
            "content": ["<div class='spacer'></div>", "close"]
        }, {
            "position": "top",
            "content": ["<div class='mobile-menu-logo'></div>"]
        }, {
            "position": "bottom",
            "content": ["prev"]
        }]
    }, {
        clone: !0,
        offCanvas: {
            pageNodetype: "#page"
        },
        classNames: {
            selected: "active"
        }
    });
    if ($('.hero-slider.animated').length > 0) {
        let autoplay = $('.hero-slider.animated').attr('data-autoplay')
        let timer = $('.hero-slider').attr('data-timer')
        let a = $.extend({}, {
            dots: !1,
            autoplay: autoplay ?? autoplay,
            autoplaySpeed: timer ? timer : undefined,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: !0,
                    arrows: !1
                }
            }]
        });
        $('.hero-slider.animated').slick(a)
    }
    var API = $("#mm-site-navigation").data("mmenu");
    $(window).on("resize", function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            API.close()
        }
    })
});
$(document).ready(function() {
    showButton()
});
function showButton() {
    if (!$('.events-module div').hasClass('event-wrapper')) {
        $(".no-event-heading").css("display", "block");
        $(".no-event-heading").text("Thank you for your interest in our events. Upcoming events will be added here soon.")
    }
}
