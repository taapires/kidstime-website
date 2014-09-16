 $(document).on('scroll', function() {

   'use strict';

   if ($(window).scrollTop() > 100) {
     $('.scroll-top-wrapper').addClass('show');
   } else {
     $('.scroll-top-wrapper').removeClass('show');
   }
 });

 function scrollToTop() {
   'use strict';
   var verticalOffset = typeof(verticalOffset) !== 'undefined' ? verticalOffset : 0;
   var element = $('body');
   var offset = element.offset();
   var offsetTop = offset.top;
   $('html, body').animate({
     scrollTop: offsetTop
   }, 500, 'linear');
 }

 $('.scroll-top-wrapper').on('click', scrollToTop);


 $(document).ready(function() {
   'use strict';
   /**
    * Load Home Page
    **/

   $('#main-content').load('ajax/home-page.html #home-page');

   $('#btn1').on('click', function(e) {
     e.preventDefault();
     $('.lead').fadeOut('slow');
     $('#result').load('ajax/home-page.html #test').hide().delay(5000).fadeIn('slow');
   });

   $('.menu').on('click', function(e) {
     e.preventDefault();
     $('.nav.nav-justified li.active').removeClass('active');
     $(this).addClass('active');
   });


   /**
    * Click Logo
    */
   $('.logo').on('click', function(e) {
     e.preventDefault();
     $('#main-content').load('ajax/home-page.html #home-page');
   });



   /**
    * Navigation Menu
    **/
   $('.menu-o-evento').on('click', function() {
     $('#main-content').load('ajax/o-evento.html #o-evento');
   });

   $('.menu-home-page').on('click', function() {
     $('#main-content').load('ajax/home-page.html #home-page');
   });

   $('.menu-galeria').on('click', function() {
     $('#main-content').load('ajax/galeria.html #galeria');
   });

   $('.menu-novidades').on('click', function() {
     $('#main-content').load('ajax/novidades.html #novidades');
   });

   $('.menu-familia').on('click', function() {
     $('#main-content').load('ajax/familia.html #familia');
   });

   $('.menu-contactos').on('click', function() {
     $('#main-content').load('ajax/contactos.html #contactos');
   });

   /*$('.location-map').on('click', function(e) {
     e.preventDefault();
     $('#main-content').load('ajax/mapas.html #mapas');
   });*/
   /* -----------------*/

 });

 /**
  * After all the ajax content is loaded up
  **/
 $(document).ajaxComplete(function() {
   'use strict';
   $('.btn-actividades').on('click', function(e) {
     e.preventDefault();
     $('#main-content').load('ajax/actividades.html #actividades');
   });

   $('.btn-imprensa').on('click', function() {
     $('#main-content').load('ajax/imprensa.html #imprensa');
   });
   
   $('.location-map').on('click', function(e) {
     e.preventDefault();
     $('#main-content').load('ajax/mapas.html #mapas');
     $('.fancybox').fancybox();
   });

   // flexslider initialization for the slider
   $('#gal-lisboa').flexslider({
     animation: 'slide',
     controlNav: false,
     animationLoop: false,
     slideshow: false,
     itemWidth: 210,
     itemMargin: 5,
     touch: true
   });

   // load swipebox
   $('.swipebox').swipebox();

   /**
    * Smooth Scroll
    */
   //smoothScroll();
 });

 $(function smoothScroll() {
   'use strict';
   $('a[href*=#]:not([href=#])').click(function() {
     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
   });
 });


 (function($) {
   'use strict';
   //check if the browser width is less than or equal to the large dimension of an iPad
   if ($(window).width() <= 1024) {

     //create an AJAX request for the JS file, setting the dataType to 'script' will have jQuery automatically evaluate the JS code in the global scope
     // $.ajax({
     //     url      : 'js/kidstime-mobile.js',
     //     dataType : 'script'
     // });
     /**
      *   Scrolldown O Evento
      **/
     $(document).ajaxComplete(function(event, xhr, settings) {
       if (settings.url === 'ajax/o-evento.html') {
         $('a[href="#o-evento"]').click();
       }
     });

     /**
      *   Scrolldown Novidades
      **/
     $(document).ajaxComplete(function(event, xhr, settings) {
       if (settings.url === 'ajax/novidades.html') {
         $('a[href="#novidades"]').click();
       }
     });

     /**
      *   Scrolldown Galeria
      **/
     $(document).ajaxComplete(function(event, xhr, settings) {
       if (settings.url === 'ajax/galeria.html') {
         $('a[href="#galeria"]').click();
       }
     });

     /**
      *   Scrolldown Familia
      **/
     $(document).ajaxComplete(function(event, xhr, settings) {
       if (settings.url === 'ajax/familia.html') {
         $('a[href="#familia"]').click();
       }
     });

     /**
      *   Scrolldown Contactos
      **/
     $(document).ajaxComplete(function(event, xhr, settings) {
       if (settings.url === 'ajax/contactos.html') {
         $('a[href="#contactos"]').click();
       }
     });

   }
 })(jQuery);
