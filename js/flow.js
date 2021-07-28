$(function() {
  const clickItem = $('.flow-item-image, .flow-item-head-text, .arrow');
  clickItem.on('click', function(){
    if($(window).width()<768) {
      if($(this).parents('.flow-item').hasClass("isOpen")) {
        $(this).parents('.flow-item').find('.flow-item-text-box').slideUp();
        $(this).parents('.flow-item-head').find($('.arrow')).css({
          'transform': 'rotate(0deg)',
          'top': '15px'
        });
        $(this).parents('.flow-item').removeClass("isOpen");
      } else {
        $('.flow-item-text-box').slideUp();
        $('.arrow').css({
          'transform': 'rotate(0deg)',
          'top': '15px'
        });
        $(this).parents('.flow-item').find('.flow-item-text-box').slideDown();
        $(this).parents('.flow-item-head').find($('.arrow')).css({
          'transform': 'rotate(180deg)',
          'top': 0
        });
        $(this).parents('.flow-item').addClass("isOpen");
        $('.flow-item').not($(this).parents('.flow-item')).removeClass("isOpen");
      };  
    }
  })
});