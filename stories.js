app.controller("stories", ["$scope", function($scope) {
   $scope.articles = [ 
      { 
         title: "Meet the Halal Snack Pack",
         image: "hsp.jpg",
         date: "18 April 2017",
         tag: "food",
         blurb: "The Halal Snack Pack (otherwise known as the HSP) is one of Australia's greatest food inventions. Taking off in a crazy hype in 2015, the infamous box of Middle-Eastern cuisine mixed with good ol' chips can now be found in just about every local kebab shop across all major cities. You'll want to know what you're looking for before heading out in search of some 'snackies' though!",
         text: "Finding a kebab shop in Sydney isn't too hard. Sydney CBD, Northern Suburbs, North Shore, Inner West, nearly every suburb has a local Mecca serving you piping hot kebabs now. Are Halal Snack Packs any different?<br><br>It turns out that most joints don't make the cut. Using a variety of measurements, Aussies in the <a href=\"https://www.facebook.com/groups/HalalSnackPackAppreciationSociety/\" target=\"_blank\">Halal Snack Pack Appreciation Society</a>, the biggest Facebook group and what started this new HSP movement, have managed to rank HSP-serving shops and weed out those who can't keep up with competition. These measurements include the shop owner's greeting, shop display, halal certification, pricing, HSP packaging, meat quality, chips quality, and finally the choice of sauces, with the 'Holy Trinity' (Chilli, BBQ, Garlic) being the standard choice for HSP fans. Highly rated snack packs are referred to as 'halal' snack packs, whereas low-scoring snack packs will be deemed 'haram'. It's not surprising that individuals who choose to eat the worst snack packs, especially those who choose tomato sauce or add salad, are branded as 'haram dingoes'. A list of the best kebab shops across Australia can be found on the HSP Appreciation Society page.<br><br>Today I visited the esteemed Metro One Kebab, Pizza & Pide in Ashfield, Sydney. It'd been half a year since my last snack pack and I'd been keen for another artery-clogging experience of juicy doner kebab meat and freshly fried hot chips. Together with 5 friends, we entered the open store front to be greeted with a 'What can I get for you?' while gazing at the lit up boards and neon signs reassuring us of the halal certified meat. HSP usually come in a variety of sizes where single person servings come in takeaway styrofoam boxes. A regular is enough for your average bloke and costs about AUD$10 in most places. A large is more than what you'd want and sets you back another AUD$3 or so. Additional cheese? Go for it, another dollar or two. We decided instead to tackle the $55 large 15\" pizza box HSP (refer to the photo above) with cheese and mixed meat, approximately the size of four large HSP. It came with a free 1.25L bottle of soft drink. It was the 6 of us versus the equivalent of 4 large HSP, we figured this way we had the option of going home full instead of sprawled on the ground gasping for breath after a deathly amount of meat, chips and sauce. The meat was about the same as most places (saturated and delicious), but the chips were only slightly crunchy. Crunchy chips are what set apart the best HSP from the mediocre ones. For reference, I think the #1 kebab shop nearby in Campbelltown, King Kebab House, is the only place with golden crunchy chips. The top was lathered with the 'Holy Trinity', finishing the masterpiece of a HSP. All in all, it was a fairly good HSP and great value feed, but it just left me craving for the king in Campbelltown.<br><br>Interestingly enough, NSW Senator Sam Dastyari, known for his comical interactions with One Nation Party's founder and leader Pauline Hanson, was filming some footage on food and multiculturalism in Metro One. I definitely didn't let this opportunity slip away and decided to sneak some hilarious poses in, show off my swag and photo-bombing skills. Sam actually came around and interviewed a few of the tables, including us, and I'm waiting eagerly to see the video uploaded online.<br><br>If you're looking for reliable snack packs, I would definitely stop by each of the HSP Appreciation Society recommendations. Although, any nearby kebab shop should suffice if you don't care about soggy chips. Good luck hunting for the best HSP!"
      },
      { 
         title: "Meaning Behind Easter",
         image: "easter.jpg",
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
   $scope.maxResults = 5;

   $scope.filterType = function(story) {
      if ($scope.type == "all") {
         return true;
      } else {
         if (story.tag.indexOf($scope.type) !== -1) {
            return true;
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