app.controller("stories", ["$scope", function($scope) {
   $scope.articles = [ 
       { 
         title: 'UPDATE 12/04/2017',
         image: "maintenance.jpg",
         date: "12 April 2017",
         tag: "website",
         blurb: "Changed design and added functionality to website.",
         text: "Set homepage image to span height.<br>Added 'Read More' button.<br>Added capacity to include links and media in article text.<br>Added navigation bar.<br>Fixed icons."
      }, 
      { 
         title: "SETTING UP HOME",
         image: "home.png",
         date: "6 April 2017",
         tag: "website technology",
         blurb: "The foundations of this website have begun development! Yay!",
         text: "Constructed from another conceptual webpage <a href=\"old.html\" target=\"_blank\">found here</a>."
      }
   ];

   $scope.type = "all";
   $scope.numResults = 0;
   $scope.maxResults = 5;

   $scope.filterType = function(story) {
      if ($scope.numResults < $scope.maxResults) {
         if ($scope.type == "all") {
            $scope.numResults = $scope.numResults + 1;
            return true;
         } else {
            if (story.tag.indexOf($scope.type) !== -1) {
               $scope.numResults = $scope.numResults + 1;
               return true;
            }
         }
      }
      return false;
   }

   $scope.filter = function(value) {
      $scope.type = value;
      $scope.numResults = 0;
      $scope.$apply();
   }
}]);