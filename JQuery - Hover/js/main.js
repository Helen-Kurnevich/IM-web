


$(".shape_1").hover(function(){
    $(".shape_2").animate(
  { deg: 180 },
    {
      duration: 600,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
});

$(".shape_1").hover(function(){
$(".shape_2").css({ borderRadius: "30%"});

})

$(".shape_1").hover(function(){
    $(".shape_3").delay().animate(
  { deg: -360 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
});

$(".shape_1").hover(function(){
$(".shape_3").css({ borderRadius: "30%"});

})

$(".shape_1").hover(function(){
    $(".shape_4").delay().animate(
  { deg: 180 },
    {
      duration: 1600,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
});

$(".shape_1").hover(function(){
$(".shape_4").css({ borderRadius: "30%"});

})



// Avoid Cursor Function
// jQuery(function($) {
//     $('.hover').mouseover(function() {
//         var dWidth = $(document).width() - 100, // 100 = image width
//             dHeight = $(document).height() - 100, // 100 = image height
//             nextX = Math.floor(Math.random() * dWidth),
//             nextY = Math.floor(Math.random() * dHeight);
//         $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
//     });
// });