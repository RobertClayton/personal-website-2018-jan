$(document).mousemove(function(mouse){
  var query = $('#sidebar');
  var isVisible = query.is(':visible');
  if (isVisible === true) {
    console.log("sidebar active")
    var xPostition = (mouse.pageX - 130)
  } else {
    var xPostition = mouse.pageX
    console.log("sidebar not visible")
  }
  var yPostition = mouse.pageY

  $("#phone").css({left:xPostition , top:yPostition});

  phoneWidth = document.getElementById('phone').width
  phoneHeight = document.getElementById('phone').height
  backgroundHeight = document.getElementById('colour-background').height
  backgroundWidth = document.getElementById('colour-background').width

  topParam = yPostition - (phoneHeight / 3.4)
  bottomParam = backgroundHeight - yPostition - (phoneHeight / 3.5)
  leftParam = xPostition - (phoneWidth / 2.1)
  rightParam = backgroundWidth - xPostition - (phoneWidth / 2.2)

  console.log(backgroundWidth)

  $("#colour-background").css('-webkit-clip-path', 'inset('+topParam+'px '+rightParam+'px '+bottomParam+'px '+leftParam+'px)');
});
