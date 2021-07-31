// $(function() {
//   const clickItem = $('.flow-item-image, .flow-item-head-text, .arrow');
//   clickItem.on('click', function(){
//     if($(window).width()<768) {
//       if($(this).parents('.flow-item').hasClass("isOpen")) {
//         $(this).parents('.flow-item').find('.flow-item-text-box').slideUp();
//         $(this).parents('.flow-item-head').find('.arrow').css({
//           'transform': 'rotate(0deg)',
//           'top': '15px'
//         })
//         $(this).parents('.flow-item').removeClass("isOpen");
//       } else {
//         $('.flow-item-text-box').slideUp();
//         $('.arrow').css({
//           'transform': 'rotate(0deg)',
//           'top': '15px'
//         });
//         $(this).parents('.flow-item').find('.flow-item-text-box').slideDown();
//         $(this).parents('.flow-item-head').find('.arrow').css({
//           'transform': 'rotate(180deg)',
//           'top': 0
//         });
//         $(this).parents('.flow-item').addClass("isOpen");
//         $('.flow-item').not($(this).parents('.flow-item')).removeClass("isOpen");
//       };  
//     }
//   })
// });

// let whenDone = function() {
//   $.when(
//     $('.isShow').slideUp(),
//     $('.isOpen').find('.arrow').css({
//       'transform': 'rotate(0deg)',
//       'top': '15px'
//     })
//   ).done(function(){
//     $('.isShow').removeClass("isShow"),
//     $('.isOpen').removeClass("isOpen")
//   })
// }
$(function() {
  let click = true;
  const clickItem = $('.flow-item-image, .flow-item-head-text, .arrow');
  clickItem.on('click', function(){
    if(click){
      click = false;
      if($(window).width()<768) {
        if($(this).parents('.flow-item').hasClass("isOpen")) {
          $.when(
            $('.isShow').slideUp(),
            $('.isOpen').find('.arrow').css({
              'transform': 'rotate(0deg)',
              'top': '15px'
            })
          ).done(function(){
            $('.isShow').removeClass("isShow"),
            $('.isOpen').removeClass("isOpen"),
            click = true;
          })
        } else {
          $(this).parents('.flow-item').find('.flow-item-text-box').addClass("isShow");
          $(this).parents('.flow-item').find('.flow-item-text-box').slideDown();
          $(this).parents('.flow-item').find('.arrow').css({
            'transform': 'rotate(180deg)',
            'top': 0
          });
          
          $.when(
            $('.isOpen').find('.isShow').slideUp(),
            $('.isOpen').find('.arrow').css({
              'transform': 'rotate(0deg)',
              'top': '15px'
            })
          ).done(function(){
            $('.isOpen').find('.flow-item-text-box').removeClass("isShow"),
            $('.isOpen').removeClass("isOpen"),
            $('.isShow').parents('.flow-item').addClass("isOpen"),
            click = true;
          })
        };  
      };
    }
  })
});