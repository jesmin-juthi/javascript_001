//var is stored in the window object
//let is stored in declarative environment that we can't see.

// let & const are almost similar as IIFE
/*
(function(){
	var age = 5; // here we have to use var; otherwise it will show in window object.
})();
*/
{
	//block
	
	let y = 10;
	const x = 20;
	console.log(x,y);
	{
		//another block
		let y = 5;
		console.log(y);
	}
	console.log(y); //output will be 10;
	var z = 100;
	console.log(z); // it will show in window object
}