// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
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

//Test 1 : Stringify the above object
jsonObject = kit.stringify(jsonObject);
console.log(jsonObject);

//Test 2 : Parse the jsonObject we converted to a string in the abvoe test
console.log(kit.parse(jsonObject));

console.log(kit.parse("Hello World")); //This is not valid JSON. The module should return null.

