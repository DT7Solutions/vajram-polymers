

const sliderItems = document.querySelectorAll(".slider__item");
const slider = {
    currentItem: 0,
    intervalTime: 8000,
    autoPlayInterval: null,
    init: function() {
        this.in(this.currentItem);
        this.startAutoPlay();
    },
    in: function(index) {
        const sliderItem = sliderItems[index];
        const texts = sliderItem.querySelectorAll("p");
        gsap.set(sliderItem, { scale: 0 });
        gsap.set(sliderItem, { left: "-50%" });
        const timeline = gsap.timeline();
        timeline
            .to(sliderItem, 0.5, { left: 0 })
            .to(sliderItem, 0.5, { scale: 1 })
            .from(texts, 1, {
                autoAlpha: 0,
                ease: Back.easeOut,
                stagger: {
                    y: 300,
                    each: 0.3
                }
            });
        sliderItem.classList.add("active");
    },
    out: function(index, nextIndex) {
        const sliderItem = sliderItems[index];
        const texts = sliderItem.querySelectorAll("p");
        const timeline = gsap.timeline();
        timeline
            .to(sliderItem, 0.5, {
                left: "100vw",
                delay: 0.5,
                scale: 0.3,
                opacity: 0
            })
            .to(texts, 1, {
                autoAlpha: 0,
                ease: Back.easeIn,
                stagger: {
                    y: -300,
                    each: 0.3
                }
            })
            .call(function() {
                sliderItem.classList.remove("active");
                sliderItems[nextIndex].classList.add("active");
            })
            .set([texts, sliderItem], { clearProps: "all" });
    },
    next: function() {
        const next =
            this.currentItem !== sliderItems.length - 1
                ? this.currentItem + 1
                : 0;
        this.out(this.currentItem, next);
        this.currentItem = next;
    },
    startAutoPlay: function() {
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.intervalTime);
    }
};
slider.init();




// Revolution Slider
var RevSlider = function() {
    "use strict";
    // Slider 1 ( Simple )
    var handleRevSliderLayout1 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider1");
            } else {
                revapi1 = tpj("#rev-slider1").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 30,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: true,
                            hide_onmobile: false,
                            style: "custom",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,992,750],
                    gridwidth:[1170,970,740,290],
                    gridheight: [770,700,700,700],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Slider 2 ( Simple )
    var handleRevSliderLayout2 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider2").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider2");
            } else {
                revapi1 = tpj("#rev-slider2").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 15,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 15,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: true,
                            hide_onmobile: false,
                            style: "custom",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,992,750],
                    gridwidth:[1170,970,740,290],
                    gridheight: [755,700,700,700],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Slider 3 ( Simple )
    var handleRevSliderLayout3 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev-slider3").revolution == undefined){
                revslider_showDoubleJqueryError("#rev-slider3");
            } else {
                revapi1 = tpj("#rev-slider3").show().revolution({

                    jsFileLocation: "includes/rev-slider/js/",
                    sliderType:"standard",
                    sliderLayout:"auto",
                    fullWidth:"on",
                    dottedOverlay: "none",
                    delay: 6000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: false,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "custom",
                            enable: false,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: true,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            enable: false,
                            hide_onmobile: false,
                            style: "custom",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 30,
                            space: 8,
                            tmp: ''
                        }
                    },
                    viewPort: {
                        enable: true,
                        outof: "pause",
                        visible_area: "80%"
                    },
                    responsiveLevels:[2220,1183,992,750],
                    gridwidth:[1170,970,740,290],
                    gridheight: [775,700,600,600],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "enterpoint",
                        speed: 400,
                        levels: [5,10,15,20,25,30,35,40,45,50],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

   
    return {
        init: function() {
            handleRevSliderLayout1();
            handleRevSliderLayout2();
            handleRevSliderLayout3();
        }
    }
}();

$(document).ready(function() {
    RevSlider.init();
});