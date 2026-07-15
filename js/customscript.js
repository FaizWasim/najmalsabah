var screenWidth, screenHeight;

function screenResize() {
	"use strict";
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    if ($("body").hasClass("home-page")) {
        if (screenHeight < 800) {
            $(".banner").height(screenHeight);
        }
    }



    if (screenWidth < 1200) {

        $('.sub-menu#menu .nav,.sub-menu#menu .fl-nav').owlCarousel({
            navigation: true,
            pagination: true,
            navigationText: [
                " <a class='previous icon-left-arrow'></a>",
                "<a class='next icon-right-arrow'></a>"
            ],
            slideSpeed: 600,
            autoPlay: false,
            addClassActive: true,
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [992, 4], // between 900px and 601px
            itemsTablet: [580, 3], //2 items between 600 and 0
            itemsMobile: [400, 2] // itemsMobile disabled - inherit from itemsTablet option

        });

        $('.business-box .nav,.press-box .nav').owlCarousel({
            navigation: true,
            pagination: true,
            navigationText: [
                " <a class='previous icon-left-arrow'></a>",
                "<a class='next icon-right-arrow'></a>"
            ],
            slideSpeed: 600,
            autoPlay: false,
            addClassActive: true,
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [992, 4], // between 900px and 601px
            itemsTablet: [680, 3], //2 items between 600 and 0
            itemsMobile: [400, 1] // itemsMobile disabled - inherit from itemsTablet option

        });

        $('.a-tile .fl-nav').owlCarousel({
            navigation: true,
            pagination: true,
            navigationText: [
                "<a class='previous icon-left-arrow'></a>",
                "<a class='next icon-right-arrow'></a>"
            ],
            slideSpeed: 600,
            autoPlay: false,
            addClassActive: true,
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [992, 4], // between 900px and 601px
            itemsTablet: [580, 3], //2 items between 600 and 0
            itemsMobile: [400, 2] // itemsMobile disabled - inherit from itemsTablet option
        });

        $(".map-image .map:first-child").addClass("active");

    }

    if (screenWidth <= 640) {

        $('.map-box .sub-menu .nav').owlCarousel({
            navigation: true,
            pagination: true,
            navigationText: [
                " <a class='previous icon-left-arrow'></a>",
                "<a class='next icon-right-arrow'></a>"
            ],
            slideSpeed: 600,
            autoPlay: false,
            addClassActive: true,
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [992, 5], // between 900px and 601px
            itemsTablet: [640, 3], //2 items between 600 and 0
            itemsMobile: [480, 3] // itemsMobile disabled - inherit from itemsTablet option

        });

        $('.a-wrap').owlCarousel({
            navigation: true,
            pagination: true,
            navigationText: [
                " <a class='previous icon-left-arrow'></a>",
                "<a class='next icon-right-arrow'></a>"
            ],
            slideSpeed: 600,
            autoPlay: false,
            addClassActive: true,
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [992, 4], // between 900px and 601px
            itemsTablet: [640, 1], //2 items between 600 and 0
            itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option
        });

        $('.home-page .three-col .row').owlCarousel({
            navigation: true,
            pagination: true,
            navigationText: [
                " <a class='previous icon-left-arrow'></a>",
                "<a class='next icon-right-arrow'></a>"
            ],
            slideSpeed: 600,
            autoPlay: false,
            addClassActive: true,
            items: 5, //10 items above 1000px browser width
            itemsDesktop: [1199, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [992, 4], // between 900px and 601px
            itemsTablet: [640, 1], //2 items between 600 and 0
            itemsMobile: [480, 1] // itemsMobile disabled - inherit from itemsTablet option

        });

    }
}



$(document).ready(function() {
	"use strict";
    /* loading screen */
    $('.logo-middle').fadeIn(500);
    $('.site-loader').delay(1500).fadeOut(500);

    //call resize function
    screenResize();
    $(window).resize(screenResize);

    


    /* scroll events*/
    $(window).scroll(function() {
        if (screenWidth > 1200) {

            $("header").toggleClass('sticky', $(window).scrollTop() > 150);

            //gotop
           /* if ($(this).scrollTop() > $(".banner").outerHeight()) {
                $(".atss-left").addClass("active");
            } else {
                $(".atss-left").removeClass("active");
            }*/

           
        }

        
    });

   

    

    /* mobile menu slide right */
  

    if (screenWidth < 1201) {
        $('.navbar .m-icon').click(function() {
            $(".mob-menu").addClass("active");
            $(".m-overlay").fadeIn("fast");
        });

        $('.m-overlay,.mob-menu .m-icon').click(function() {
            $(".mob-menu").removeClass("active");
            $(".m-overlay").fadeOut("fast");
        });
    }


    

   
	/* search box header hover open input field */

    $(".navbar .search-block form").hover(function() {
        $(".navbar .search-block form").addClass("expand");
		$(".ccm-search-block-text").css({"padding-left": "10px" , "padding-right": "10px","display":"block"});
        $("header .nav li a").fadeOut("fast");
    });

    $(".navbar .search-block form").mouseleave(function() {
        $(".navbar .search-block form").removeClass("expand");
		$(".ccm-search-block-text").css({"padding-left": "0px" , "padding-right": "0px","display":"none"});
        $("header .nav li a").fadeIn("fast");
    });
	
$(".ccm-search-block-text").css({"padding-left": "0px" , "padding-right": "0px","display":"none"});
    $('html').click(function() {
        $(".navbar .search-block .ccm-search-block-text").removeClass("expand");
        $("header .nav li a").fadeIn("slow");
    });

    $('.navbar .search-block .ccm-search-block-submit,.navbar .search-block .ccm-search-block-text').click(function(event) {
        event.stopPropagation();
    });

    $(".navbar .search-block .ccm-search-block-submit").click(function() {
        if ($(".navbar .search-block .ccm-search-block-text").val() === "") {
            return false;
        }
    });



    
	/* scroll page to top */
    /*$('.go-top').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1500);
    });*/
	   


	/* our services section tiled gallery */
	
	/* WOW */
	if (screenWidth > 1200 && !$("html").hasClass("ie8")) {
		var wow;
        wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: true, // default
            live: true // default
        });
        wow.init();
    }
	
	/* background image */
	
	$(".a-tile-content .nav li,.a-tile-content .fl-nav li,.a-tile-content .fl-nav .owl-item").hover(function() {
        var Index = $(this).index();
        //$(".bg-wrap .bg").css('opacity',0);
        $(".bg-wrap .bg").eq(Index).addClass("active").siblings().removeClass("active");
    });
    $(".a-tile-content .nav li,.a-tile-content .fl-nav li,.a-tile-content .fl-nav .owl-item").mouseleave(function() {
        // var Index = $(this).index();
        //$(".bg-wrap .bg").css('opacity',0);
        $(".bg-wrap .bg").removeClass("active");
    });

	
    

});