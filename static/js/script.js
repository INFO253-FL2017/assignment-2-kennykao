
var submit = function() {
	input_name = document.getElementById('name');
	input_subject = document.getElementById('subject');
	input_message = document.getElementById('message');
	input_email = document.getElementById('email');
	final_message = document.getElementById('final');
	var missing_inputs = '';

	if (!input_name.value|| !input_subject.value|| !input_message.value|| !input_email.value) {
		if (!input_name.value) {
			missing_inputs += 'name ';
		}
		if (!input_subject.value) {
			missing_inputs += 'subject ';
		}
		if (!input_email.value) {
			missing_inputs += 'email'
		}
		if (!input_message.value) {
			missing_inputs += 'message'
		}
		final_message.innerHTML = 'Please fill out: ' + missing_inputs;
	}
	else {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 204) {
				xhttp.open("POST","/f",true);
				xhttp.send('{"name":"' + input_name.value + '","email":"' + input_email.value + '","subject":"' + input_subject.value + '","msg":"' + input_message.value + '"}')
			}
		}
		input_message.value = "";
		input_subject.value = "";
		final_message.innerHTML = 'Hi' + input_name.value + 'Your message has been sent';
		input_name.value = "";
	}
}

var submitComment1 = function() {
	event.preventDefault();
	input_name = document.getElementById('name');
	input_message = document.getElementById('message');
	var missing_inputs = '';
	if (!input_name.value|| !input_message.value) {
		if (!input_name.value) {
			missing_inputs += 'name ';
		}
		if (!input_message.value) {
			missing_inputs += 'message'
		}
		//final_message.innerHTML = 'Please fill out: ' + missing_inputs;
	}
	else {
		if (!localStorage.comments1) {
			localStorage.setItem('names1',JSON.stringify([]));
			localStorage.setItem('comments1',JSON.stringify([]));
		}
		var names = JSON.parse(localStorage.names1);
		var comments = JSON.parse(localStorage.comments1);
		comments.push(input_message.value);
		names.push(input_name.value);
		//console.log(comments);
		localStorage.setItem('comments1',JSON.stringify(comments));
		localStorage.setItem('names1',JSON.stringify(names));
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode(input_message.value + ' - ' + input_name.value); 
		newDiv.appendChild(newContent);
		var currentDiv = document.getElementById("comments");
		currentDiv.appendChild(newDiv); 
		input_name.value = "";
		input_message.value = "";
	}
}

var submitComment2 = function() {
	event.preventDefault();
	input_name = document.getElementById('name');
	input_message = document.getElementById('message');
	var missing_inputs = '';
	if (!input_name.value|| !input_message.value) {
		if (!input_name.value) {
			missing_inputs += 'name ';
		}
		if (!input_message.value) {
			missing_inputs += 'message'
		}
		//final_message.innerHTML = 'Please fill out: ' + missing_inputs;
	}
	else {
		if (!localStorage.comments2) {
			localStorage.setItem('names2',JSON.stringify([]));
			localStorage.setItem('comments2',JSON.stringify([]));
		}
		var names = JSON.parse(localStorage.names2);
		var comments = JSON.parse(localStorage.comments2);
		comments.push(input_message.value);
		names.push(input_name.value);
		//console.log(comments);
		localStorage.setItem('comments2',JSON.stringify(comments));
		localStorage.setItem('names2',JSON.stringify(names));
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode(input_message.value + ' - ' + input_name.value); 
		newDiv.appendChild(newContent);
		var currentDiv = document.getElementById("comments");
		currentDiv.appendChild(newDiv); 
		input_name.value = "";
		input_message.value = "";
	}
}

var submitComment3 = function() {
	event.preventDefault();
	input_name = document.getElementById('name');
	input_message = document.getElementById('message');
	var missing_inputs = '';
	if (!input_name.value|| !input_message.value) {
		if (!input_name.value) {
			missing_inputs += 'name ';
		}
		if (!input_message.value) {
			missing_inputs += 'message'
		}
		//final_message.innerHTML = 'Please fill out: ' + missing_inputs;
	}
	else {
		if (!localStorage.comments3) {
			localStorage.setItem('names3',JSON.stringify([]));
			localStorage.setItem('comments3',JSON.stringify([]));
		}
		var names = JSON.parse(localStorage.names3);
		var comments = JSON.parse(localStorage.comments3);
		comments.push(input_message.value);
		names.push(input_name.value);
		//console.log(comments);
		localStorage.setItem('comments3',JSON.stringify(comments));
		localStorage.setItem('names3',JSON.stringify(names));
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode(input_message.value + ' - ' + input_name.value); 
		newDiv.appendChild(newContent);
		var currentDiv = document.getElementById("comments");
		currentDiv.appendChild(newDiv); 
		input_name.value = "";
		input_message.value = "";
	}
}

var submitComment4 = function() {
	event.preventDefault();
	input_name = document.getElementById('name');
	input_message = document.getElementById('message');
	var missing_inputs = '';
	if (!input_name.value|| !input_message.value) {
		if (!input_name.value) {
			missing_inputs += 'name ';
		}
		if (!input_message.value) {
			missing_inputs += 'message'
		}
		//final_message.innerHTML = 'Please fill out: ' + missing_inputs;
	}
	else {
		if (!localStorage.comments4) {
			localStorage.setItem('names4',JSON.stringify([]));
			localStorage.setItem('comments4',JSON.stringify([]));
		}
		var names = JSON.parse(localStorage.names4);
		var comments = JSON.parse(localStorage.comments4);
		comments.push(input_message.value);
		names.push(input_name.value);
		//console.log(comments);
		localStorage.setItem('comments4',JSON.stringify(comments));
		localStorage.setItem('names4',JSON.stringify(names));
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode(input_message.value + ' - ' + input_name.value); 
		newDiv.appendChild(newContent);
		var currentDiv = document.getElementById("comments");
		currentDiv.appendChild(newDiv); 
		input_name.value = "";
		input_message.value = "";
	}
}

var submitComment5 = function() {
	event.preventDefault();
	input_name = document.getElementById('name');
	input_message = document.getElementById('message');
	var missing_inputs = '';
	if (!input_name.value|| !input_message.value) {
		if (!input_name.value) {
			missing_inputs += 'name ';
		}
		if (!input_message.value) {
			missing_inputs += 'message'
		}
		//final_message.innerHTML = 'Please fill out: ' + missing_inputs;
	}
	else {
		if (!localStorage.comments5) {
			localStorage.setItem('names5',JSON.stringify([]));
			localStorage.setItem('comments5',JSON.stringify([]));
		}
		var names = JSON.parse(localStorage.names5);
		var comments = JSON.parse(localStorage.comments5);
		comments.push(input_message.value);
		names.push(input_name.value);
		//console.log(comments);
		localStorage.setItem('comments5',JSON.stringify(comments));
		localStorage.setItem('names5',JSON.stringify(names));
		var newDiv = document.createElement("div");
		var newContent = document.createTextNode(input_message.value + ' - ' + input_name.value); 
		newDiv.appendChild(newContent);
		var currentDiv = document.getElementById("comments");
		currentDiv.appendChild(newDiv); 
		input_name.value = "";
		input_message.value = "";
	}
}
