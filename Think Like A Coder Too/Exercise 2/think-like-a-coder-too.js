// The onload event occurs when an object has been loaded.
// onload is most often used within the <body> element to execute 
// a script once a web page has completely loaded all content 
// (including images, script files, CSS files, etc.).
function onload() {
  // Get the Update Name button
  var button = document.getElementById('updateName');

  // set it to call this function when it is clicked
  button.onclick = updateNameButtonClick;
};


function updateNameButtonClick() {
  // Get all of the name inputs
  var firstNameInput = document.getElementById('firstName');
  var middleInput = document.getElementById('middle');
  var lastNameInput = document.getElementById('lastName');
  var fullNameElement = document.getElementById('fullName');

  // generate the full name from the input values
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // update this line to include the middle name:
  var fullName = firstNameInput.value + ' ' + lastNameInput.value;

  // set the fullName element in order to display it on the page
  fullNameElement.value = fullName;
}