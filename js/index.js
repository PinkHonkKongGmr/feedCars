$(window).scroll(function() {
  if ($(this).scrollTop() > $('.projects_cont').offset().top - 400) {
    $('.goDown').removeClass('goDownGetback');
    $('.goDown').addClass('goDownAction');
    $('.goOut').addClass('goOutAction');
    $('.imgBox').addClass('imgBigger imgShows');
    $('.goOut').removeClass('pingOpacityOn');
  }
  if ($(this).scrollTop() < $('.projects_cont').offset().top - 350) {
    console.log("pi");
    $('.goDown').removeClass('goDownAction');
    $('.goDown').addClass('goDownGetback');
    $('.goOut').removeClass('goOutAction');
    $('.goOut').addClass('pingOpacityOn');
    $('.imgBox').addClass('imgBigger imgShows');
  }

});
