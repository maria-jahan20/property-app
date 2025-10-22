jQuery(document).ready(function () {

    var windowWidth = jQuery(window).width();
    var window_width = jQuery(window).width();

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSPlugin);

    var TM = TweenMax;
    var tl = new TimelineMax();
    let tl2 = new TimelineMax();
    let tll = new TimelineMax();

    console.log('Designed & Developed by Dcastalia');
    jQuery('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div>');

    // JS
    const injectVHInCSS = ()=>{
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

// Run it on load
    injectVHInCSS();
// Run it on resize
    window.addEventListener('resize', injectVHInCSS);

/*    jQuery('#main_button').click(function () {
        jQuery('.ongoing').toggleClass('open');
        jQuery(this).toggleClass('open');
        jQuery('.completed').toggleClass('open');
        jQuery('.upcomming').toggleClass('open');
        jQuery('.Overlay').toggleClass('ShowIt');

        // jQuery('#menubackgroundToggle').toggleClass('show active');
    });*/


    jQuery(document).click(function (e) {

        // Check if click was triggered on or within #menu_content
        if (jQuery(e.target).closest("#main_button").length > 0) {
            return false;
        }
        closeMenu();
        // Otherwise
        // trigger your click function
    });
    function closeMenu() {

        jQuery('#main_button').removeClass('open');
        jQuery('.completed').removeClass('open');
        jQuery('.upcomming').removeClass('open');
        //jQuery('.menubackgroundToggle').removeClass('show active');
        jQuery('.ongoing').removeClass('open');
    }



    if(windowWidth > 767){
        console.log('mobile');
    }






   
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.querySelector("#js-scroll");
    const locoScroll = new LocomotiveScroll({
        el: scroller,
        lerp:0.1,
        scrollFromAnywhere: true,
        smoothMobile: false,
        reloadOnContextChange:true,
        // touchMultiplier:6,
        getDirection: true,
        scrollingClass: "isScroll",
        smooth: true,
        resetNativeScroll: true,
        // initPosition: { x: 0, y: 0 },


    });
    locoScroll.on("scroll", ScrollTrigger.update);
    locoScroll.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction);
    });
    ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: scroller.style.transform ? "transform" : "fixed"
    });

    locoScroll.on('scroll', (position) => {
        if ((position.scroll.y) > 150) {
            document.querySelector('.mainmenu').classList.add('ShowIt');
        } else {
            document.querySelector('.mainmenu').classList.remove('ShowIt');
        }
        if ((position.scroll.y) > 650) {
            document.querySelector('.clickMen').classList.add('show');
            document.querySelector('.whatsappSticky').classList.add('show');
        } else {
            document.querySelector('.clickMen').classList.remove('show');
            document.querySelector('.whatsappSticky').classList.remove('show');
        }
    });

    locoScroll.on('scroll', (position) => {
        if ((position.scroll.y) <= -150) {
            document.querySelector('.mainmenu').classList.remove('ShowIt');
            document.querySelector('.mainmenu').classList.remove('animateIn');
            document.querySelector('.mainmenu').classList.remove('animateOut');
        }
    });

 
    gsap.utils.toArray().forEach(box => {
        gsap.to(box, {
            backgroundColor: '#ffffff',
            scrollTrigger: {
                scroller: scroller,
                trigger: box,
                start: 'top center',
                toggleActions: 'play none none reverse',
                pin: box, // pinning the boxes
            }
        });
    });
    gsap.to(document.querySelector(".isParallax"), {
        scrollTrigger: {
            trigger: document.querySelector(".isParallax"),
            scroller: "#js-scroll",
            scrub: true,
            start: "top bottom",
            end: "bottom 100%",

        },
        y: "50px"
    });

    jQuery(".clickMen").click(function () {
        locoScroll.scrollTo(0);
        ScrollTrigger.refresh();
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();





    if (jQuery('.our_preference_init').length > 0) {

        jQuery('.our_preference_init').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // adaptiveHeight: true,
            speed: 900,
            dots: true,
            lazyLoad: 'ondemand',
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: false,
            arrows: true,
            draggable: true,
            centerMode: false,
            // adaptiveHeight: true,
            prevArrow: jQuery('.icon_left_p'),
            nextArrow: jQuery('.icon_right_p'),

            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                        // dots: true,
                        infinite: true,
                        draggable: true,
                        arrows: false,
                        dots: false
                    }
                }


            ]

        }).resize();

        //
        jQuery('.our_preference_init').on('afterChange', function (event, {slideCount: count}, currentSlide, nextSlide) {


            // let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(
            //     n => `[data-slick-index="${n + 1}"],[data-slick-index="${n + 3}"]`);
            jQuery('.slick-slide').removeClass('slick-now');
            let getActive = jQuery('.our_preference_init .slick-track .slick-active');
            getActive.eq(0).removeClass('slick-now');
            getActive.eq(1).addClass('slick-now');
            getActive.eq(3).addClass('slick-now');

            getActive.eq(4).removeClass('slick-now');
            // getSingle4.css('transform','translateY(30px);');
            //
            // console.log('getActive single', getSingle);

            //console.log(selectors);

            //  jQuery(selectors).addClass('slick-now');
            // console.log(selectors);
        });

        jQuery('[data-slick-index="1"]').addClass('slick-now');
        jQuery('[data-slick-index="3"]').addClass('slick-now');

    }


    jQuery('.asOurconcern_init').on('init', function (event, slick, direction) {

        if (!(jQuery('.asOurconcern_init .slick-slide').length > 1)) {
            jQuery('.slider__arrow').hide();
        }

    });

    if (jQuery('.asOurconcern_init').length > 0) {
        jQuery('.asOurconcern_init').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 900,
            dots: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: false,
            arrows: true,
            draggable: true,
            centerMode: false,

            prevArrow: jQuery('.rleft'),
            nextArrow: jQuery('.rright'),
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                        // dots: true,
                        infinite: false,
                        draggable: true,
                        arrows: false,
                        dots: false
                    }
                }


            ]

        });
    }


    if (jQuery('.testimonial_init').length > 0) {
        jQuery('.testimonial_init').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 900,
            dots: true,
            accessibility: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            //autoplay: true,
            arrows: true,
            draggable: true,
            centerMode: false,
            adaptiveHeight: true,
            prevArrow: jQuery('.icon_left'),
            nextArrow: jQuery('.icon_right'),
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                        // dots: true,
                        infinite: true,
                        draggable: true,
                        arrows: false,
                        dots: false
                    }
                }


            ]

        });
    }


    //------------ Light gallery
    if (jQuery('.Light').length > 0) {
        jQuery(".Light").lightGallery({
            selector: 'a'
        });
    }

    //------------ Light gallery with thumbnail
    if (jQuery('.LightThumb').length > 0) {
        jQuery(".Light").lightGallery({
            selector: 'a',
            exThumbImage: 'data-exthumbimage'
        });
    }

    //------------ nice select
    if (jQuery('.Select').length > 0) {
        jQuery('.Select select').niceSelect();
    }


    //------------ tab change in mobile using nice select
    jQuery('.TabSelect').on('change', function (e) {
        jQuery('.TabMenus li a').eq(jQuery(this).val()).tab('show');
    });


    //------ form validation
    jQuery('form .dynamic_submit_btn').click(function () {
        jQuery('.form-overlay').addClass('doit');
    });

    jQuery(document).on('click', '.form-overlay.doit,.ok-class', function () {
        jQuery('.form-overlay.doit, .form-message-container').hide();
    });

    jQuery('.btn , button').click(function () {
        jQuery('.form-overlay.doit, .form-message-container').removeAttr('style');
    });

    jQuery('.dynamic_submit_btn').on('click', function () {
        setTimeout(function () {
            jQuery('.form-overlay.doit').hide();
        }, 15000);
    });
    //------ form validation


//-------------- animation

    // if (767 < window_width) {
    // blast init
    if (jQuery('.textUp').length > 0) {
        jQuery('.textUp').blast({delimiter: "character"});
    }
    if (jQuery('.fadeRightWord').length > 0) {
        jQuery('.fadeRightWord').blast({delimiter: "word"});
    }

    if (jQuery('.fadeRight').length > 0) {
        jQuery('.fadeRight').blast({
            delimiter: "character"
        });
    }


    if (jQuery('.textSplit').length > 0) {

        jQuery(".textSplit").each(function (index) {
            let splittedTitle = Splitting({
                target: this,
                by: "words",
                //by: "lines",
            });
            splittedTitle.forEach((splitTitle) => {
                jQuery(splitTitle.words).wrapInner('<span class="word-wrap"></span>');
            });

        });


    }

    var get_first = jQuery('.home-slider'),
        get_half = jQuery(window).height() / 1.1;

    jQuery(window).scroll(function () {
        var w_scroll = jQuery(window).scrollTop();
        if (jQuery('.anim').length > 0) {
            jQuery('.anim').each(function () {
                if (w_scroll > jQuery(this).offset().top - get_half) {
                    jQuery(this).addClass('anim-active');
                }
                // if (get_first.position().top === w_scroll) {
                //     jQuery('.anim').removeClass('anim-active');
                // }

            });
        }
    })

    // }
    jQuery('.anim').each(function () {
        if (jQuery(this).visible(true)) {
            jQuery(this).addClass('anim-active');
        }
    });


//-------------- animation end


    // sticky menu


    // scroll to section
    jQuery('#ScrollTo').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var jQuerytarget = jQuery(this.hash);
            jQuerytarget = jQuerytarget.length && jQuerytarget ||
                jQuery('[name=' + this.hash.slice(1) + ']');
            if (jQuerytarget.length) {
                var targetOffset = jQuerytarget.offset().top;
                jQuery('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });


//============== message box start


    jQuery(document).delegate('.msg_cont', 'click', function () {
        open_msg();
    });

    jQuery(document).delegate('.msg_icon', 'click', function () {
        open_msg();
    });

    function open_msg() {
        jQuery('.msg_cont_wrap').css({'width': '330px', 'height': '446px'});
        TM.to('.msg_cont', 0.2, {
            height: 580,
            width: 580,
            right: -86,
            bottom: -86,
            borderRadius: 290,
            background: 'rgba(255, 255, 255, 1)',
            onComplete: function () {

            }
        });

        TM.to('.msg_form', 0.5, {
            right: 0,
            delay: 0.2,
            onComplete: function () {
                jQuery('.msg_cont_wrap').addClass('bx_shadow');
            }
        });

        jQuery('.msg_cont_wrap').addClass('msg_opened');
        jQuery('.msg_cont_wrap').removeClass('msg_closed');
    }

    jQuery(document).delegate('.close_btn', 'click', function () {
        close_msg();

    });

    function close_msg() {
        jQuery('.msg_cont_wrap').removeClass('bx_shadow');

        TM.to('.msg_cont', 0.2, {
            width: '50px',
            height: '50px',
            right: 35,
            bottom: 8,
            borderRadius: '100%',
            background: '#008C44',
            onComplete: function () {
                setTimeout(function () {
                    jQuery('.msg_cont_wrap').css({'width': '120px', 'height': '120px'});

                }, 500);

            }
        });

        TM.to('.msg_form', 0.5, {
            right: -500
        });

        setTimeout(function () {
            jQuery('.msg_cont_wrap').removeClass('msg_opened');
            jQuery('.msg_cont_wrap').addClass('msg_closed');
        }, 500);
    }


    jQuery('.msg_cont , .msg_icon').click(function () {
        jQuery('.msg_cont_wrap .title').fadeIn(2000);
        jQuery('.close_btn').fadeIn();
    })

    jQuery('.close_btn').click(function () {
        jQuery('.msg_cont_wrap .title,.close_btn').hide();
    })


    // line draw svg
    if (jQuery('#LineAnim').length > 0) {
        new Vivus('LineAnim', {duration: 80});
    }


//============== message box end
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // import disableScroll from 'disable-scroll';

// Create TimelineLite instances
//     let tl = new TimelineLite();
//     let tl2 = new TimelineLite();
//     let tll = new TimelineLite();

// State variables
    let videoId = "";
    let open = false;
    let scroll = "";

// Function to handle open/close
    let handelOpen = (open, id) => {
        open = open;
        videoId = id;
    };

// Desktop menu contact dropdown
    document.querySelector(`.click-dropdown`)?.addEventListener('click', () => {
        if (!document.querySelector('.main-menu__contact').classList.contains('open-dropdown')) {
            document.querySelector('.main-menu__contact').classList.add('open-dropdown');
            tl.to('.dropdown-list', {
                duration: .2,
                display: 'block',
            }).to('.dropdown-list', {
                y: '20px',
                duration: .4,
                height: 'calc(100% - 20px)',
                alpha: 1,
                paddingTop: '33px',
                paddingBottom: '15px',
                ease: "circ.out"
            })
        } else {
            document.querySelector('.main-menu__contact').classList.remove('open-dropdown');
            tl.to('.dropdown-list', {
                duration: .3,
                height: '0%',
                alpha: 0,
                paddingTop: '0',
                y: '0px',
                ease: "circ.out"
            }).to('.dropdown-list', {
                duration: .2,
                display: 'none',
            })
        }
    });

// Add a click event listener to the window
    window.addEventListener('click', (e) => {
        if (document.querySelector('.main-menu__contact') && document.querySelector('.main-menu__contact').classList.contains('open-dropdown')) {
            if (!e.target.matches('.click-dropdown, .click-dropdown p, .click-dropdown svg, .click-dropdown line')) {
                tl.to('.dropdown-list', {
                    duration: .3,
                    height: '0%',
                    alpha: 0,
                    paddingTop: '0',
                    y: '0px',
                    ease: "circ.out"
                }).to('.dropdown-list', {
                    duration: .2,
                    display: 'none',
                })

                document.querySelector('.main-menu__contact').classList.remove('open-dropdown');
            }
        }
    });

// Desktop menu on click toggle
    document.querySelector('#click_menu').addEventListener('click', () => {
        // disableScroll.on()
        if (window.safari !== undefined) {
            document.body.classList.add('overflow')
        }
        document.querySelector('.main-menu').classList.add('menu-is-open')
        tll.to('.main-menu__items', {
            duration: '0',
            display: 'block'
        }).to('.main-menu__items', {
            opacity: '1',
            duration: '.6'
        }).to('.main-menu__items__img', {
            opacity: '1',
            duration: '.3'
        }, '-=.5').to('.main-menu__items__list', {
            duration: .5,
            y: 0,
            alpha: 1
        }, '-=.5').to('.shadows', {
            duration: .5,
            x: 0,
        }, '-=.5')
    });

// Desktop menu close function
    const closeDelstopMenu = () => {
        tll.to('.main-menu__items__list', {
            duration: .2,
            y: '-40px',
            alpha: 0
        }).to('.main-menu__items', {
            opacity: '0',
            duration: '.3'
        }).to('.main-menu__items__img', {
            opacity: '0',
            duration: '.2'
        }, '-=.5').to('.main-menu__items__list', {
            duration: .2,
            y: '40px',
            alpha: 0
        }, '-=.3').to('.shadows', {
            duration: .2,
            x: '100%',
        }, '-=.5').to('.main-menu__items', {
            duration: '.4',
            opacity: 0
        }).to('.main-menu__items', {
            display: 'none'
        })
    };

// Add click event listener for menu close button
    document.querySelector('.menu-close').addEventListener('click', () => {
        document.querySelector('.main-menu').classList.remove('menu-is-open')
        closeDelstopMenu()
        // disableScroll.off()
        if (document.body.classList.contains('overflow')) {
            document.body.classList.remove('overflow')
        }
    });

// Add click event listeners to all menu items
    const getAllDesktopA = document.querySelectorAll('.main-menu__items__list a');
    getAllDesktopA.forEach(e => {
        e.addEventListener('click', () => {
            document.querySelector('.main-menu').classList.remove('menu-is-open')
            closeDelstopMenu()
            disableScroll.off()
            if (document.body.classList.contains('overflow')) {
                document.body.classList.remove('overflow')
            }
        })
    });

// Desktop menu hover action
    let getLis = document.querySelectorAll('.menu-col li a'),
        getImgs = document.querySelectorAll('.main-menu__items__img li');
    for (var i = 0; i < getLis.length; i++) {
        getLis[i].setAttribute('data-index', i);

        getLis[i].onmouseover = function () {
            document.querySelector('.main-menu__items__img').classList.remove('parent-add')
            getImgs.forEach(e => {
                e.classList.remove('active')
            })
            getImgs[this.getAttribute('data-index')].classList.add('active')
            setTimeout(() => {
                document.querySelector('.main-menu__items__img').classList.add('parent-add')
            }, 200)
        };
    }


    main = jQuery(".mainmenu .container").offset().left + 15;
    jQuery(window).on("resize", function () {
        var windowWidth = jQuery(window).width();
        main = jQuery(".mainmenu .container").offset().left + 15;
    });


    // for left padding
    if (jQuery('.banner-slider__single__content').length > 0) {
        jQuery('.banner-slider__single__content a').css('padding-left', main);
        jQuery('.banner-slider__single__content p').css('padding-left', main);
        jQuery('.banner-slider__single__content .line').css('left', main);

        jQuery(window).on("resize", function () {
            jQuery('.banner-slider__single__content a').css('padding-left', main);
            jQuery('.banner-slider__single__content p').css('padding-left', main);
            jQuery('.banner-slider__single__content .line').css('left', main);
        });
    }

    if (jQuery('.go-left').length > 0) {
        jQuery('.go-left').css('right', main + 80);

        jQuery(window).on("resize", function () {
            jQuery('.go-left').css('right', main + 80);
        });
    }

    if (windowWidth < 992) {
        if (jQuery('.go-left').length > 0) {
            jQuery('.go-left').css('left', main);

            jQuery(window).on("resize", function () {
                jQuery('.go-left').css('left', main);
            });
        }
    }

    if (jQuery('.go-right').length > 0) {
        jQuery('.go-right').css('right', main);

        jQuery(window).on("resize", function () {
            jQuery('.go-right').css('right', main);
        });
    }

    if (windowWidth < 992) {
        if (jQuery('.go-right').length > 0) {
            jQuery('.go-right').css('left', main + 80);

            jQuery(window).on("resize", function () {
                jQuery('.go-right').css('left', main + 80);
            });
        }
    }

    // slick-init
    if (jQuery('.slick-init').length > 0) {
        const slickElement = jQuery('.slick-init');
        slickElement.slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            // autoplay: false,
            speed: 1400,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            focusOnSelect: true,
            prevArrow: jQuery('.go-left'),
            nextArrow: jQuery('.go-right'),
        });

        slickElement.on('init', function () {
            let getTheLists = document.querySelectorAll('.slick-list .slick-slide:not(.slick-active)');
            setLists(getTheLists);
        });

        slickElement.on('beforeChange', function () {
            let getTheLists = document.querySelectorAll('.slick-list .slick-slide:not(.slick-active)');
            setLists(getTheLists);
        });
    }

    let lists = [];
    function setLists(listElements) {
        lists = Array.from(listElements);

        lists.forEach(function (element) {
            element.addEventListener('mouseover', function () {
                document.querySelector('.slick-active').classList.add('transform');
            });
            element.addEventListener('mouseout', function () {
                document.querySelector('.slick-active').classList.remove('transform');
            });
        });
    }

    setTimeout(function () {
        document.querySelector('.banner-slider').classList.add('active-slide');
    }, 400);


    //Sticky New Tab



});//document.ready


//------------ Device Image
function deviceImage() {
    // window min width 1401 -- large screen
    var window_width = jQuery(window).width();
    if (1400 < window_width) {
        jQuery('.modify-bg').each(function () {
            var large = jQuery(this).attr('data-image-large');
            jQuery(this).css('background', "url(" + large + ")");
        });
    }
    // window max-width 1400 -- standard screen
    if (1400 >= window_width && 992 <= window_width) {
        jQuery('.modify-bg').each(function () {
            var standard = jQuery(this).attr('data-image-standard');
            jQuery(this).css('background', "url(" + standard + ")");
        });
    }
    // window max-width 991 -- mobile device
    if (991 >= window_width) {
        jQuery('.modify-bg').each(function () {
            var small = jQuery(this).attr('data-image-small');
            jQuery(this).css('background', "url(" + small + ")");
        });
    }
}

deviceImage();

document.addEventListener("DOMContentLoaded", function () {
    var externalLinks = document.querySelectorAll(".external-link");

    externalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the data-href attribute value
            var dataHref = link.getAttribute("data-href");

            // Open the link in a new tab using data-href
            window.open(dataHref, "_blank");
        });
    });
});



