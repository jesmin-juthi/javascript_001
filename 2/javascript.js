document.getElementById("button").onclick = function(){
	document.getElementById("confirm").innerHTML = "<h3 style='color:green;'>Order Placed. Check email for confirmation.</h3>";
	document.getElementById("button").style.display = "none";
}