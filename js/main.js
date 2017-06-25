function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log (fullName);

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
	console.log ('User is an adult');
		//alert(User is an adult');
	} else if (userAge>=13) {
		console.log('User is a teenager');
		//$('h1').text('User is a teenerger');
	} else {
		console.log('User is a child');
	}

	if (firstName.toLowerCase() == 'general') {
		if (lastName.toLowerCase()!='assembly');
	}  {
		console.log('Hello General');
	}

}

//when the page is loaded
$(function(){

	$('img').on('click', askQuestions);

	// when the user clicks on h3
	$('h3').on('click', function(){

		// Toggle the next element
		$(this).next().slideToggle(1000);
	});

	

});