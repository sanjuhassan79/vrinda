
(function ($) {
  "use strict";

   $('.icon').click(function(){
    $('span').toggleClass("cancel");
  });
  
  $(window).on('scroll', function() {
    var scrollHeight = $('.home').height();
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > scrollHeight) {
        $('#header').addClass('my-nav');
    } else {
        $('#header').removeClass('my-nav');
    }
});



  $('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });


   // Isotope-Filtering
    // init Isotope
    var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    

    // Fancy-box
    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      transitionEffect: "slide",
     
    });



      //slick js
      $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 100,
        autoplay: true,
        slidesToShow: 1
      
      });
        
      $(".main-slider").slick({

        // normal options...
        infinite: false,
      
        // the magic
        responsive: [{
      
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
      
          }, {
      
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: true
            }
      
          }, {
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
      });
  

  

})(jQuery);