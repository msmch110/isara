$(function() {
  const qaText = $('.qa-list-item-text');
  $('.qa-list-item-text').hide();
  $('.qa-list-item-head-text, .arrow-gray').on('click', function(){
    if($(this).parents('.qa-list-item').hasClass("isOpen")) {
      $(this).parents('.qa-list-item').find('.qa-list-item-text').slideUp(200);
      $(this).parents('.qa-list-item-head').find('.arrow-gray').css('transform', 'rotate(0deg)');
      $(this).parents('.qa-list-item').removeClass("isOpen");
    } else {
      $(this).parents('.qa-list-item').find('.qa-list-item-text').slideDown(200);
      $(this).parents('.qa-list-item-head').find('.arrow-gray').css('transform', 'rotate(180deg)');
      $(this).parents('.qa-list-item').addClass("isOpen");
    }
  })
});
