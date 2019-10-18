var currentX = '',
    currentY = '',
    movementConstant = .015;

$(document).mousemove(function(e) {
  if (currentX == '') currentX = e.pageX;

  var xdiff = e.pageX - currentX;

  currentX = e.pageX;

  if (currentY == '') currentY = e.pageY;

  var ydiff = e.pageY - currentY;
      currentY = e.pageY;

  $('.parallax').each(function(i, el) {
    var movementy = (i + 1) * (ydiff * movementConstant),
        movement = (i + 1) * (xdiff * movementConstant),
        newX = $(el).position().left + movement,
        newY = $(el).position().top + movementy;

    $(el).css('left', newX + 'px');
    $(el).css('top', newY + 'px');
  });
});
