
$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
    })
  });
  $('.box1').slideUp();
});