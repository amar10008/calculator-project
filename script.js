//in this project we are going to make a simple calculator using html, css and javascript
//In this logic first step- we will get the input box and buttons using DOM
//second step- we will add event listener to all the buttons and perform the operations according to the button clicked
//for example if we click on '=' button then we will evaluate the string and display the result in the input box
//if we click on 'AC' button then we will clear the input box
//if we click on 'DEL' button then we will remove the last character from the input box
//if we click on any other button then we will add that button's innerHTML to the string and display it in the input box

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
//here we use for each loop to add event listener to all the buttons because we have to perform different operations according to the button clicked
arr.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (e.target.innerHTML == '=') {
			string = eval(string);
			input.value = string;
		} else if (e.target.innerHTML == 'AC') {
			string = '';
			input.value = string;
		} else if (e.target.innerHTML == 'DEL') {
			string = string.substring(0, string.length - 1);
			input.value = string;
		} else {
			string += e.target.innerHTML;
			input.value = string;
		}
	});
});
