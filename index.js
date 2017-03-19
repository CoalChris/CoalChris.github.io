$(document).ready(function() {
   var figures = $("figure");
   
   $(".jumbotron").hide();
   $.each(figures, function(i, item) {
      $(item).hide();
   })
   $("footer").hide();
   $("header").hide();
   

   $("header").slideDown(800);
   $(".jumbotron").fadeIn(1000);
   $.each(figures, function(i, item) {
      setTimeout(function() {
         $(item).fadeIn(800);
      }, 800 * i);
   });
   $("footer").fadeIn(8000);

   $("#searchbar").focus(function() {
      $("#searchbtn").show(), 600, $(this).animate({
         "width": "600px"
      });
   });
   $("#searchbar").blur(function() {
      $("#searchbtn").hide(), 600, $(this).animate({
         "width": "200px"
      });
   });
});