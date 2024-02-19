function getFormvalue() {
    //Write your code here
	var fullname="";
	var form = document.getElementById("form1");
	// Get the value of the first name input
    var firstName = form.elements["fname"].value;

    // Get the value of the last name input
    var lastName = form.elements["lname"].value;

    // Concatenate the first and last names with a space in between
    fullName = firstName + " " + lastName;

    // Display the full name using an alert
    alert(fullName);
}
