$(function(){

$('.article-box').click(function(){
  var $desc = $(this).find('.desc');
  if($desc.hasClass('open')){
  $desc.removeClass('open');
  $desc.slideUp();
  $(this).find('span').text('気になる人はクリックしてね♡')
}else{
  $desc.addClass('open');
  $desc.fadeIn();
  $(this).find('span').text('')
}
});








});
