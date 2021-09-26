$(function() {
  $('.scroll-top').hide();
  $('.scroll-top').on('click', function(){
    $('html, body').animate({scrollTop:0}, 300);
  })
  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if(scroll < 100) {
      $('.scroll-top').fadeOut();
    } else {
      $('.scroll-top').fadeIn();
    }
  })
});