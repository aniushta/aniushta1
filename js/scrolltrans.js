$('.carousel').carousel();

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.hideme').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'});

          }

      });

  });

});




$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#000000');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
});
