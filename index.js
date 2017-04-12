$(document).ready(function() {
   /*var figures = $("figure");
   
   $.each(figures, function(i, item) {
      $(item).hide();
   })*/
   $(".jumbotron").hide();
   $("footer").hide();
   $("header").hide();
   //$(".text").hide();
   

   $("header").slideDown(800);
   $(".jumbotron").fadeIn(1000);
   $("footer").fadeIn(3000);
   /*$(".more").click(function() {
      $(this).hide();
      $(this).next(".text").fadeIn(800);
   });*/
   /*
   $.each(figures, function(i, item) {
      setTimeout(function() {
         $(item).fadeIn(800);
      }, 800 * i);
   });
   

   $("#searchbar").focus(function() {
      $("#searchbtn").show(), 600, $(this).animate({
         "width": "600px"
      });
   });
   $("#searchbar").blur(function() {
      $("#searchbtn").hide(), 600, $(this).animate({
         "width": "200px"
      });
   });*/
});