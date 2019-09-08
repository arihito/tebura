$(function(){

  // ---------------------------------------------------------------
  // Scroll arrow button to under
  // ---------------------------------------------------------------
  $('.scroll-arrow a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(
        $(this).attr('href')
      ).offset().top
    }, 500, 'swing');
  });

  // ---------------------------------------------------------------
  // Button back to the Top
  // ---------------------------------------------------------------
  const topBtn = $('#pageTop')
  topBtn.hide()
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      topBtn.fadeIn()
    } else {
      topBtn.fadeOut()
    }
  });
  topBtn.click(function () {
    topBtn.fadeOut()
    $('html, body').animate({
      scrollTop: 0
    }, 300)
    return false
  });

  // ---------------------------------------------------------------
  // Fadein and Fadeout into Scroll
  // ---------------------------------------------------------------
  $(window).scroll(function() {
    $(".fade").each(function() {
      const scroll = $(window).scrollTop()
      const imgPos = $(this).offset().top
      const windowHeight = $(window).height()
      if (scroll > imgPos - windowHeight + windowHeight / 4) {
        $(this).addClass("fade_on")
      } else {
        $(this).removeClass("fade_on")
      }
    })
  })

})
