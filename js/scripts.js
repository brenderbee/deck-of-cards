$(document).ready(function(){
  var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  suits.forEach(function(suit) {
    // debugger;
    // var card = suits.shift();
    ranks.forEach(function(rank) {
      $("#output").append("<li>" + rank + " of " + suit + "</li>");

    });
  });

});
