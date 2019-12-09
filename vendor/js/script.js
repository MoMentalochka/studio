$(function(){
    $('.toggle').click(function(){
        var get_id = this.id;
        var get_current = $('.info.'+get_id);
        $('.info').not(get_current).hide();
       get_current.show();
    });
   
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3,
        loop : true,
        nav: false
    });
  });