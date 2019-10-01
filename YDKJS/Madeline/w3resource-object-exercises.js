console.log(
    "This file demonstrates key points from the YDKJS book series, Book 3 this & Object Prototypes"
);

////////////////////////////////
console.log(
    "Exercise 1: "
);

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12    
  }

console.log(Object.keys(student));
////////////////////////////////
console.log(
    "Exercise 2: "
);

console.log(student);
delete student.rollno;
console.log(student);
////////////////////////////////
console.log(
    "Exercise 3: "
);

console.log("Object length: " + Object.keys(student).length);
////////////////////////////////
console.log(
    "Exercise 4: "
);

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

(function showReadingStatuses() {
    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus) {
            console.log("'" + library[i].title + "'" + ", " + library[i].author +  ": READ");
        }
        else {
            console.log("'" + library[i].title + "'" + ", " + library[i].author +  ": UNREAD");
        }        
    }
})();
////////////////////////////////