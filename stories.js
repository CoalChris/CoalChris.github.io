app.controller("stories", ["$scope", function($scope) {
   $scope.articles = [ 
      { 
         title: "Meaning Behind Easter",
         image: "easter.JPG",
         date: "16 April 2017",
         tag: "religion",
         blurb: "Easter is a time of celebration all across the globe. This festive season is represented by delicious chocolate eggs and bunnies, but what's the back story behind this annual event?",
         text: "The Easter bunny and colourful eggs are familiar to all of us, and they're the focus of Easter in the consumer world. Many people understand Easter is somehow related to a man called Jesus, but aren't sure about the specifics. There is indeed a very deep and complex history behind Easter and various reasons for people celebrating Easter today.<br><br>Some evidence suggests that the word 'Easter' might be taken from the German folklore goddess of spring, Eostre, or the German word for Easter, Ostern, which means 'East'. The bunny, or hare, is a symbol of fertility because of their ability to quickly multiply. The egg is a sign of birth and life. These three things don't seem to be related, but were commonly celebrated in spring fertility rituals during the days of the ancient Roman Catholic Church. Christians celebrate the resurrection of Jesus Christ on the Sunday, and in order to make this celebration more attractive to non-Christians, the Roman Catholic Church decided to adopt Easter as the celebratory day of Christ rising back to life. We see now that Easter's origins have nothing to do with Jesus, but both Christians and non-Christians hold celebrations at the same time of the year!<br><br>Knowing the origins of Easter, should Christians be celebrating Easter? Is it okay to stuff our faces with chocolate? By all means enjoy a bunny (or two), but remember that the true reason that Christians hold celebrations is to express their joy at Jesus Christ' resurrection and the completion of God's plan. Although, this should be on our minds every day, not just during Easter.<br><br><a href=\"http://www.desiringgodchurch.org/web/2009/04/09/why-did-jesus-have-to-die/\" target=\"_blank\">If you are wondering why Jesus needed to die and resurrect, this article explains it in an easily understandable way.</a>"
      },
      { 
         title: "UPDATE 12/04/2017",
         image: "maintenance.jpg",
         date: "12 April 2017",
         tag: "website",
         blurb: "Changed design and added functionality to website.",
         text: "Set homepage image to span height.<br>Added 'Read More' button.<br>Added capacity to include links and media in article text.<br>Added navigation bar.<br>Fixed icons.<br>Moved dynamic content animations to AngularJS module."
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
   $scope.numStories = 3; // Change this for every new story
   $scope.numResults = 0;
   $scope.maxResults = 2 * $scope.numStories;

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
      if (value != 'more') {
         $scope.type = value;
      }
      $scope.numResults = 0;
      $scope.$apply();
   }
}]);