var randomizer = function(char)
{
	var caps = Math.random() > 0.5;

	if(caps)
		return char.toUpperCase();
	else
		return char.toLowerCase();
}

var randomize = function()
{
	var input = document.getElementById('string-input').value;
	var cap = Math.random() >- 0.5;
	
	var output = input.replace(/[<>]/g, '');

	output = output.replace(/[A-Za-z]/gi, randomizer);

	document.getElementById('output-textarea').value = output;
	document.getElementById('output').style.display = "block";
}

