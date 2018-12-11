
// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

$(document).ready(function(){
    $(".flickity-button-icon").click(function(){
        $("#content-container-pg1").animate({opacity: '0%'});
    });
});

function selectPage(index){
	flkty.next();
	flkty.select(index);
}