/** Custom JavaScript */

//detect mobile platform
if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $("body").addClass("ios-device");
}
if (navigator.userAgent.match(/Android/i)) {
    $("body").addClass("android-device");
}

//detect desktop platform
if (navigator.appVersion.indexOf("Win") != -1) {
    $('body').addClass("win-os");
}
if (navigator.appVersion.indexOf("Mac") != -1) {
    $('body').addClass("mac-os");
}

//detect IE 10 and above 11
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
    $("html").addClass("ie10");
}

//for IE 8 & 9
//enable the below script for  placeholder to inputs in IE 9 and 8
/*
 if( $("html").hasClass("ie9") || $("html").hasClass("ie8")){
 $('.formidable .input input,.formidable .input textarea').each(function(){

 $(this).focusin(function(){
 $(this).parent().prev(".label").hide();
 });
 $(this).focusout(function(){
 if($(this).val()==""){
 $(this).parent().prev(".label").show();
 }
 });
 });
 }*/

//Specifically for IE10 (for replacing svg with png images)

if ($("html").hasClass("ie10")) {
    //var imgPath = "themes/abdul/images/";
    var imgPath = window.location.protocol + "//" + window.location.host + "/abdul/themes/abdul/images/";
    $("header .right a img,.cookie-box img").attr("src", imgPath + "logo-ie.png");
}

var screenWidth, screenHeight;

function screenResize() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    if ($("body").hasClass("home-page")) {
        if (screenHeight < 800) {
            $(".banner").height(screenHeight);
        }
    }

    $(".join-block").each(function() {
        $(this).css("height", $(".social-feed-container .feed").width());
        $(this).css("top", $(".social-feed-container .feed").width());
    });

    insta();
    instaSlide();

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

function insta() {
    if (screenWidth > 1200) {
        $(".social-feed-container .feed").each(function() {
            var Wid = $(".social-feed-container .feed:first-child").width();
            $(this).css("height", Wid);
        });
    }
}

function instaSlide() {
    setTimeout(function() {
        $(".social-feed-container .owl-item").each(function() {
            var Wid = $(".social-feed-container .feed:first-child").width();
            $(this).find(".feed").css("height", Wid);
        });
    }, 2000);
}

//mobile menu
$(document).on("click", ".mobile-menu", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});


$(document).on('click', ".career-wrap .def-btn", function() {
    var pstr = $(this).parents(".career-wrap").find(".link p").html();
    $('.modal-body .ccm-input-hidden').attr('value', pstr);
    $('.modal-body .career-form h2').html(pstr);
});


$(document).ready(function() {

    /* loading screen */
    $('.logo-middle').fadeIn(500);
    $('.site-loader').delay(1500).fadeOut(500);

    //call resize function
    screenResize();
    $(window).resize(screenResize);

    /*------------- Video Starts--------------*/
    if (screenWidth > 1199) {
        //home map tabs  video objects
        if ($("#map-box").length) {
            var introVid = $("#intro");
            var OfficeVideo = $("#office-vid");
            var resVideo = $("#res-vid");
            var recVideo = $("#rec-vid");
            var retVideo = $("#retail-vid");
            var eduVideo = $("#edu-vid");

            //script to load images, videos, anything asynchronously
            aload();
        }

        var vid, newVid, playtime;

        //function to pause the video on half play time
        function timeCheck(event) {
            if (this.currentTime >= playtime) {
                this.pause();
                //remove animate class if video animation is done so as to re-enable the click of tab
                $("#map-box").removeClass("animate");
                this.removeEventListener('timeupdate', timeCheck);
            }
        }

        //function to play the rest of half time and play the current clicked video
        function vidPlay(vid, newVid) {
            if (vid.length) {
                vid.get(0).play();
                vid.get(0).onended = function() {
                    vid.removeClass("current active");
                    newVid.addClass("current active");
                    playtime = newVid.get(0).duration / 2;
                    newVid.get(0).play();
                };
            } else {
                playtime = newVid.get(0).duration / 2;
                newVid.get(0).play();
                newVid.addClass("current active").siblings().removeClass("active");
            }
            newVid.get(0).addEventListener("timeupdate", timeCheck);
        }

        //map tab click video switch
        $(".map-box.home-map .nav li").click(function() {
            //add animation class to parent div so as to disable click events on tab
            $("#map-box").addClass("animate");

            //get current video object
            vid = $(".video-container video.current");

            var clickedli = $(this).index();
            newVid = $('.video-container video').eq(clickedli + 1);
            vidPlay(vid, newVid);
        });


        if ($("#map-box").length) {
            //map video after finish functions
            introVid.get(0).onended = function() {
                //add class finished to hide vid
                introVid.addClass("finished").removeClass("active").next().addClass("active");
            };
        }
    }

    /*------------- Video Ends--------------*/


    /* scroll events*/
    $(window).scroll(function() {
        if (screenWidth > 1200) {

            $("header").toggleClass('sticky', $(window).scrollTop() > 150);

            //gotop
            if ($(this).scrollTop() > $(".banner").outerHeight()) {
                $(".atss-left").addClass("active");
            } else {
                $(".atss-left").removeClass("active");
            }

            if ($("#map-box").length) {
                if (($(window).scrollTop() + screenHeight - (screenHeight / 2)) > $("#map-box").offset().top) {
                    if (!introVid.hasClass("active")) {
                        introVid.addClass("active");
                        introVid.get(0).play();
                    }
                }
            }
        }

        if (screenWidth <= 640) {
            if ($(this).scrollTop() > 50) {
                $(".at-share-dock.atss").addClass("active");
            } else {
                $(".at-share-dock.atss").removeClass("active");
            }
        }

        /* Graph Section
           if ($(".graph-box").length) {
               if (!$(".graph-box").hasClass("active")) {
                   var gTop = $('.g-track').offset().top - 450;
                   if ($(window).scrollTop() >= gTop) {
                       $(".graph-box").addClass("active");
                       createChart();
                       $(".dial").each(function () {
                           var elm = $(this);
                           var perc = elm.attr("value");
                           elm.knob({
                               'value': 0,
                               "readOnly": true,
                               fgColor: "#8ea9a0",
                               width: 230,
                               height: 230,
                               readOnly: true,
                               bgColor: "transparent",
                               inputColor: "#65666a",
                               font: 'Karbon-Light',
                               fontWeight: 'normal',
                               format: function (value) {
                                   return value;
                               },
                           });
                           $({animatedVal: 0}).animate({animatedVal: perc}, {
                               duration: 2000,
                               easing: 'swing',
                               step: function () {
                                   $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
                               }
                           });
                       });

                       $(".fdial").each(function () {
                           var elm = $(this);
                           var perc = elm.attr("value");
                           elm.knob({
                               'value': 0,
                               "readOnly": true,
                               fgColor: "#fff",
                               width: 200,
                               height: 200,
                               readOnly: true,
                               bgColor: "transparent",
                               inputColor: "#fff",
                               font: 'Karbon-Light',
                               fontWeight: 'normal',
                               format: function (value) {
                                   return value;
                               },
                           });
                           $({animatedVal: 0}).animate({animatedVal: perc}, {
                               duration: 2000,
                               easing: 'swing',
                               step: function () {
                                   $(".fdial").val(Math.ceil(this.animatedVal)).trigger("change");
                               }
                           });
                       });
                   }
               }
           }
         */
    });

    //WOW
    /*if($("body").hasClass("home-page")) {*/
    if (screenWidth > 1200 && !$("html").hasClass("ie8")) {
        wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: true, // default
            live: true // default
        })
        wow.init();
    }
    /* }*/

    /*$(".dial").knob({
     fgColor : "#8ea9a0",
     width: 230,
     height : 230,
     readOnly: true,
     bgColor: "transparent",
     inputColor : "#65666a",
     font : 'Karbon-Light',
     fontWeight : 'normal'
     });*/


    /*------- Home Page Video ------*/


    if ($("html").hasClass("ie8")) {
        $('#ieModal').modal('show');
    }


    if (screenWidth < 1201) {
        $('.navbar .m-icon').click(function(e) {
            $(".mob-menu").addClass("active");
            $(".m-overlay").fadeIn("fast");
        });

        $('.m-overlay,.mob-menu .m-icon').click(function(e) {
            $(".mob-menu").removeClass("active");
            $(".m-overlay").fadeOut("fast");
        });
    }

    $(".aob").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find(".t-nav").slideUp("slow");
        } else {
            $(this).addClass("active");
            $(this).find(".t-nav").slideDown("slow");
        }
    });

    if (window.location.href.indexOf("subscribe-to-mailing-list") > -1) {
        $('.mailing-list-msg').appendTo('#nModal .modal-body');
        $('#nModal').modal('show');
    }

    /* Placeholder */
    $('input, textarea').placeholder();

    /* Career slide */
    $(".career-detail .link").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().find(".career-info").slideUp("slow");
        } else {
            $(this).addClass("active").siblings().removeClass("active");
            $(".career-info").slideUp("slow");
            $(this).parent().find(".career-info").slideDown("slow");
        }
        return false;
    });

    $(".cookie-box a").click(function() {
        $('.cookie-box').removeClass("active");
    });

    $(".c-modal .formidable .ax-button .btn").html("Attach Resume");

    $(".navbar .search-block form").hover(function() {
        $(".navbar .search-block form").addClass("expand");
        $("header .nav li a").fadeOut("fast");
    });

    $(".navbar .search-block form").mouseleave(function() {
        $(".navbar .search-block form").removeClass("expand");
        $("header .nav li a").fadeIn("fast");
    });

    $('html').click(function() {
        $(".navbar .search-block .ccm-search-block-text").removeClass("expand");
        $("header .nav li a").fadeIn("slow");
    });

    $('.navbar .search-block .ccm-search-block-submit,.navbar .search-block .ccm-search-block-text').click(function(event) {
        event.stopPropagation();
    });

    $(".navbar .search-block .ccm-search-block-submit").click(function() {
        if ($(".navbar .search-block .ccm-search-block-text").val() == "") {
            return false;
        }
    });


    $(".banner .banner-link a#city").click(function() {
        var target = $(".tile-box");
        $('html,body').animate({
            scrollTop: target.offset().top - 100
        }, 1200);
        return false;
    });


    $(".description .read-more").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).closest(".container").find(".read-more-box").slideUp("slow");
            if ($("body").hasClass("ar-lang")) {
                $(this).html('قراءة المزيد');
            } else {
                $(this).html("Read more");
            }
        } else {
            $(this).addClass("active");
            $(this).closest(".container").find(".read-more-box").slideDown("slow");
            if ($("body").hasClass("ar-lang")) {
                $(this).html('إخفاء التفاصيل');
            } else {
                $(this).html("Read less");
            }
        }
    });
    
     $(".full-content .readservices").click(function() { 
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).closest(".info").find(".read-more-box").slideUp("slow");
            if ($("body").hasClass("ar-lang")) {
                $(this).html('قراءة المزيد');
            } else {
                $(this).html("Read more");
            }
        } else {
            $(this).addClass("active");
            $(this).closest(".info").find(".read-more-box").slideDown("slow");
            if ($("body").hasClass("ar-lang")) {
                $(this).html('إخفاء التفاصيل');
            } else {
                $(this).html("Read less");
            }
        }
    });

    $(".three-col .info .read-more").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).closest(".info").find(".read-more-box").slideUp("slow");
            if ($("body").hasClass("ar-lang")) {
                $(this).html('قراءة المزيد');
            } else {
                $(this).html("Read more");
            }

        } else {
            $(this).addClass("active");
            $(this).closest(".info").find(".read-more-box").slideDown("slow");
            if ($("body").hasClass("ar-lang")) {
                $(this).html('إخفاء التفاصيل');
            } else {
                $(this).html("Read less");
            }
        }
    });

    $(".projects-box .rm .read-more,.projects-box .close-btn").click(function() {
        if ($(this).parents(".project-info").hasClass("active")) {
            $(this).parents(".project-info").removeClass("active");
            $(this).parents(".project-info").find(".close-btn").fadeOut("fast");
            $(this).parents(".project-info").find(".project-desc-left").hide();
            $(".projects-box .bar").fadeIn("slow");
            $(".projects-box .bar").removeClass("active");
            if ($("body").hasClass("ar-lang")) {
                $(this).parents(".project-info").find(".rm .read-more").html('قراءة المزيد');
            } else {
                $(this).parents(".project-info").find(".rm .read-more").html("Read more");
            }
        } else {
            $(this).parents(".project-info").addClass("active");
            $(this).parents(".project-info").find(".close-btn").fadeIn("slow");
            $(".projects-box .bar").fadeOut("slow");
            $(".projects-box .bar").addClass("active");
            if ($("body").hasClass("ar-lang")) {
                $(this).parents(".project-info").find(".rm .read-more").html('إخفاء التفاصيل');
            } else {
                $(this).parents(".project-info").find(".rm .read-more").html("Read less");
            }
            $this = $(this);
            setTimeout(function() {
                $this.parents(".project-info.active").find(".project-desc-left").show();
            }, 500);
            if (screenWidth <= 640) {
                setTimeout(function() {
                    var target = $(".project-map-block");
                    $('html,body').animate({
                        scrollTop: target.offset().top - 500
                    }, 1200);
                }, 1000);
            }
        }
    });

    if (!$('body').find('aob-block')) {
        $(".full-content-block .read-more").click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).closest(".info").find(".read-more-box").slideUp("slow");
                if ($("body").hasClass("ar-lang")) {
                    $(this).html('قراءة المزيد');
                } else {
                    $(this).html("Read more");
                }
            } else {
                $(this).addClass("active");
                $(this).closest(".info").find(".read-more-box").slideDown("slow");
                if ($("body").hasClass("ar-lang")) {
                    $(this).html('إخفاء التفاصيل');
                } else {
                    $(this).html("Read less");
                }
            }
        });
    }

    $(".banner .banner-link a#scroll").click(function() {
        var target = $(".scroll");
        $('html,body').animate({
            scrollTop: target.offset().top - 100
        }, 1200);
        return false;
    });

    //scroll to section on click of autonav
    $(".sub-menu .nav li a,.t-nav li a").click(function() {
        var aURL = $(this).attr("href");
        var hashVal = aURL.split("#")[1];
        if ($("#" + hashVal).length) {
            $('body,html').animate({
                scrollTop: $("#" + hashVal).offset().top - 50
            }, 1200);
            return false;
        }
    });

    if (screenWidth > 1199) {
        $(".chosen,.press-filter-box select").chosen({ disable_search_threshold: 50 });
    }

    $('.go-top').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 1500);
    });
    if (screenWidth <= 640) {

        $(".map-box .sub-menu .owl-item").click(function() {
            var pointIndex = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".map").eq(pointIndex + 1).addClass("active").siblings().removeClass("active");
            return false;
        });

        $(".f-links h4").click(function() {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
                $(this).parent().find("ul").slideUp("slow");
            } else {
                $(this).parent().addClass("active").siblings().removeClass("active");
                $(".f-links ul").slideUp("slow");
                $(this).parent().find("ul").slideDown("slow");
            }
        });
    }

    if (screenWidth > 640) {

        $(".map-box .sub-menu li").click(function() {
            var pointIndex = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".map").eq(pointIndex + 1).addClass("active").siblings().removeClass("active");
            return false;
        });
    }

    var partner = $(".partners .col-sm-3.item");


    if (screenWidth > 767) {
        for (var i = 0; i < partner.length; i += 4) {
            partner.slice(i, i + 4).wrapAll("<div class='row'></div>");
        }
    }
    if (screenWidth <= 767 && screenWidth > 640) {
        for (var i = 0; i < partner.length; i += 3) {
            partner.slice(i, i + 3).wrapAll("<div class='row'></div>");
        }
    }

    if (screenWidth <= 640) {
        for (var i = 0; i < partner.length; i += 2) {
            partner.slice(i, i + 2).wrapAll("<div class='row'></div>");
        }
    }


    /*function createChart() {
        $('#bar').highcharts({
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
            },
            title: {
                text: false
            },
            exporting: {enabled: false},
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Profit'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                allowPointSelect: false,
            },

            series: [{
                name: 'Year',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 106.4],
                color: '#8ea9a0',
                pointWidth: 45

            }]
        });

        $('#fbar').highcharts({
            chart: {
                type: 'column',
                backgroundColor: 'transparent',
            },
            title: {
                text: false
            },
            exporting: {enabled: false},
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013'
                ],
                gridLineColor: 'transparent',
                crosshair: true,
                tickColor: 'transparent',
                labels: {
                    style: {
                        color: '#fff',
                        fontSize: '10px'
                    }
                },
                title: {
                    text: 'Year',
                    style: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '12px'

                    }
                }
            },
            yAxis: {
                min: 0,
                gridLineColor: 'transparent',
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                title: {
                    text: 'Profit',
                    style: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '12px'

                    }
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                allowPointSelect: false,
            },

            series: [{
                name: 'Year',
                data: [49.9, 71.5, 106.4, 129.2],
                color: '#fff',
                pointWidth: 35

            }]
        });


        $('#line').highcharts({
            title: {
                text: false
            },
            chart: {
                plotBackgroundColor: null,
                backgroundColor: 'transparent',
                plotShadow: false,
                color: "#fff"
            },
            credits: {
                enabled: false
            },
            colors: ['#fff'],
            exporting: {enabled: false},

            xAxis: {
                tickInterval: 1,
                gridLineColor: 'transparent',
                lineColor: '#fff',
                tickColor: 'transparent',
                style: {
                    color: '#fff'
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                lineWidth: 1
            },

            yAxis: {
                gridLineColor: 'transparent',
                lineColor: '#fff',
                tickColor: 'transparent',
                title: {
                    enabled: true,
                    text: 'Profit',
                    style: {
                        color: '#fff'
                    }
                },
                lineWidth: 1,
                labels: {
                    style: {
                        color: '#fff'
                    }
                }
            },

            legend: {
                enabled: false
            },

            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: 'x = {point.x}, y = {point.y}'
            },

            series: [{
                name: 'Profit',
                data: [1, 2, 16, 27, 16, 28, 56, 52],
                pointStart: 1
            }]
        });
    }*/

    //var item_length = $('.t-slide .slick-track  .item').length;

    $('.t-slide').on('afterChange', function(event, slick, currentSlide) {
        if ($(".t-slide .item:last-child").hasClass("slick-active")) {
            $(".side-gradient").fadeOut("fast");
        } else {
            $(".side-gradient").fadeIn("fast");
        }
    });

    if ($('body').hasClass('ar-lang')) {
        $('.t-slide').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            rtl: true,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    } else {
        $('.t-slide').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    }


    $('.projects-wrap').on('afterChange', function(slick, currentSlide) {
        $(".project-info").removeClass("active");
        $(".project-info").find(".close-btn").fadeOut("fast");
        $(".project-info").find(".project-desc-left").hide();
        $(".projects-box .bar").removeClass("active");
        $(".projects-box .bar").fadeIn("slow");
        if ($("body").hasClass("ar-lang")) {
            $(".project-info").find(".rm .read-more").html('قراءة المزيد');
        } else {
            $(".project-info").find(".rm .read-more").html("Read more");
        }
    });

    /*$('.projects-wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
     console.log(nextSlide);
     });*/

    $('.projects-wrap').slick({
        dots: false,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.material-slide').slick({
        dots: false,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });




    $('.property-listing .nav').owlCarousel({
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
        itemsDesktopSmall: [992, 4], // betweem 900px and 601px
        itemsTablet: [580, 2], //2 items between 600 and 0
        itemsMobile: [400, 2] // itemsMobile disabled - inherit from itemsTablet option

    });

    if ($('body').hasClass('ar-lang')) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            rtl: true,
            infinite: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            rtl: true,
            infinite: false,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    } else {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            infinite: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            infinite: false,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    if ($(".fancybox-media").length) {
        $('.fancybox-media').fancybox({
            width: screenWidth,
            height: screenHeight,
            padding: 0,
            margin: 15,
            wrapCSS: 'video-popup',
            helpers: {
                media: {}
            }
        });
    }
    if ($(".fancybox").length) {
        $('.fancybox').fancybox({
            padding: 0,
            margin: 15
        });
    }

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


    var updateFeed = function() {
        $('.social-feed-container .feeds').socialfeed({
            // FACEBOOK
            facebook: {
                accounts: ['@Abdul.Latif.Jameel.Official'],
                limit: 18,
                access_token: '1721764481441103|60d7df823c9f555130e8661c8929a522'
            },
            // INSTAGRAM
            /*instagram: {
                accounts: ['@galerieslafayettedubai'],
                limit: 11,
                client_id: '2a01f5e11cb24cebb85a760a92a52451',
                access_token: '335938182.af492e1.a6f4a9abe5414fb18bd1dae331bc8a4d'
            },*/

            // GENERAL SETTINGS
            template: CCM_TOOLS_PATH + '/template',
            length: 200,
            show_media: true,
            // Moderation function - if returns false, template will have class hidden
            moderation: function(content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            },
            //update_period: 5000,
            // When all the posts are collected and displayed - this function is evoked
            callback: function() {

                insta();

                $(".join-block").each(function() {
                    $(this).css("height", $(".social-feed-container .feed").width());
                    $(this).css("top", $(".social-feed-container .feed").width());
                });
                if (screenWidth < 1200) {
                    $('.feeds').owlCarousel({
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
                        itemsDesktopSmall: [992, 4], // betweem 900px and 601px
                        itemsTablet: [580, 3], //2 items between 600 and 0
                        itemsMobile: [400, 2] // itemsMobile disabled - inherit from itemsTablet option

                    });

                    instaSlide();
                }
            }
        });
    };

    updateFeed();

});

$(window).load(function() {
    //Addthis icon change
    setTimeout(function() {
        $("#at4-share").removeClass("addthis_32x32_style").addClass("addthis_20x20_style");
        $(".at4-share-outer").show();
    }, 2000);
});