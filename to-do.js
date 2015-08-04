
$(document).ready(function(){
	// 1. get users info when they submit the form,
	$('form').on('submit', function(evnt){
		// preventDefault that is self explanitory
		evnt.preventDefault();
		// will use the .val method to get value stored & input
		var userInput = $('.form-control').val();
		// we use .val but pass an empty string to clear value stored in input
		$('.form-control').val('');
		// 2. create a new li element with the users input inside of it
		// var task = '<li>' + userInput + '</li>';
		// using jQuery we said $('<li>') to create a new element;
		// this way we can use jQuery methods to alter the element
		var task= $('<li>').html('<span class="glyphicon glyphicon-unchecked "></span>' + userInput);
		// 3. add newly created li to the ul on the page 
		$('ul').append(task);


	}); //end of form submit event
	
	// 4. listen for when a li is clicked and change icon to be checked 
	// and grey out text
	$('ul').on('click', 'li', function(){
		$(this).toggleClass('done');
		$(this).find('span').toggleClass('glyphicon-unchecked glyphicon-check');
	});

});