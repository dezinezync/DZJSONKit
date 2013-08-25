// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();

var kit = require('com.DZJSONKit');
Ti.API.info("module is => " + kit);

var jsonObject = {
	a: 1,
	b: 2,
	c: 3,
	d: {
		l: 10,
		m: 11,
		n: "Hello World String",
		o: "How are we \n today?"
	}
};

var startTime = new Date().getTime();
console.log("Starting at " + startTime);

/*DZJSONKit*/
//Test 1 : Stringify the above object
var jsonObject = kit.stringify(jsonObject);
console.log(jsonObject);

//Test 2 : Parse the jsonObject we converted to a string in the abvoe test
console.log(kit.parse(jsonObject));

console.log(kit.parse("Hello World")); //This is not valid JSON. The module should return null.

/* SBJSON - Native Parser in Ti
jsonObject = JSON.stringify(jsonObject);
console.log(jsonObject);

console.log(JSON.parse(jsonObject));
//console.log(JSON.parse("Hello World")); Ti Throws an Error. Blocks app.

var endTime = new Date().getTime();*/

console.log("Ending at " + endTime);
console.log("Total time taken " + (endTime -startTime));

