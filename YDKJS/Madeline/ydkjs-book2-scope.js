console.log("This file demonstrates key points from the YDKJS book series, Book 2 Scope & Closures, Chapter 3: Function vs Block Scope:");

// create a global object (namespace) that has
//  - a function that retrieves all reviews on the site
var RestaurantReviews = {
    getAllReviews: function() {
        var review1 = {
            name: "Restaurant1",
            rating: 9
        };
        var review2 = {
            name: "Restaurant2",
            rating: 7
        };
        var review3 = {
            name: "Restaurant3",
            rating: 10
        };
        return [review1, review2, review3];
    }
};

// write IIFE 
//  - that calls the get all reviews function from the global object (namespace)
//  - store the results of the function call to a const
//  - loop through the reviews and output the restaurant name and it's rating
console.log("show reviews here ....");
(function showReviews(){
    var allReviews = RestaurantReviews.getAllReviews();
    for (let i=0; i<allReviews.length; i++) {
        console.log(allReviews[i].name + ": " + allReviews[i].rating);
    }    
})();
