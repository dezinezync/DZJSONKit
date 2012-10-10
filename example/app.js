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

// TODO: write your module tests here
var kit = require('com.DZJSONKit');
Ti.API.info("module is => " + kit);

label.text = kit.example();

Ti.API.info("module exampleProp is => " + kit.exampleProp);

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
}

var jsonString = JSON.stringify(jsonObject);

console.log(kit.parseString(jsonString));

console.log(kit.stringifyObject(jsonObject));

