window.onload = function()
{
	resetGrid(40,40);
}

function resetGrid(rows, cols)
{
	var table = document.createElement("table");
	
	for(var i = 0; i < rows; i++)
	{
		var tr = document.createElement("tr");
		table.appendChild(tr);
		
		for(var j = 0; j < cols; j++)
		{
			var td = document.createElement("td");
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
	}
	
	console.log(table);
	document.getElementById("grid-area").appendChild(table);
}