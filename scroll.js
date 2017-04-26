app.directive("scrollTo", function() {
   return {
      restrict: "A",
      link: function(scope, element, attrs) {
         element.on("click", function() {
            var target = $(attrs.scrollTo);
            if (target.length > 0) {
               $("html, body").animate({
                  scrollTop: target.offset().top - 70
               });
            }
         });
      }
   }
});