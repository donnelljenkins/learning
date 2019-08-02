console.log(
  "This file demonstrates key points from the YDKJS book series, Book 2 Scope & Closures, Chapter 4: Hoisting"
);

// The output is incorrect. Make all necessary corrections to the code below to produce the correct output:
//     The review for 'Sushi Masa' was saved successfully.
//     Restaurant1 - 9
//     Restaurant2 - 7
//     Restaurant3 - 10
//     Sushi Masa - 9
//     **** The very first review was for 'Restaurant1'!!!! ***

//     And there should be 2 alerts:
//         Name is required
//         Rating is required

function addReview(restaurantName, rating) {  
  message = validateName(restaurantName);
  
  function validateName(name) {
    if (!name) {
      return "Name is required";
    }

    return "";
  }

   var validateRating = function(rating) {
    if (!rating) {
      return "Rating is required";
    }

    return "";
  };
   
  message += validateRating ? validateRating(rating) : "";

  var message; //left this here for hoisting purposes, but personally would declare at top of function :)

  if (message) {
    alert(message);
  } else {
    restaurantReviews.reviews.push({
      name: restaurantName,
      rating: rating
    });

    console.log(`The review for '${restaurantName}' was saved successfully.`);
  }
}

(function() {
  addReview("Sushi Masa", 9);
  addReview("", 9);
  addReview("Burger King");
  
  var review = restaurantReviews.reviews[0];

  for (var x = 0; x < restaurantReviews.reviews.length; x++) {
    let review = restaurantReviews.reviews[x];
    console.log(`${review.name} - ${review.rating}`);
  }

  console.log(`**** The very first review was for: ${review.name}!!!! ****`);
})();
