#getScripts

Scriptloading with jQuery getScript for multiple scripts. When all scripts are loaded a 'ready' event is fired on the jQuery element. The this context of the ready event will be the actual DomNode.

Optionally, specify a callback script. When all scripts are loaded this callback will be executed with the DomNode as this context.

````javascript
/**
 * getScripts
 *
 * @prop array 			Required: array javascripts to load.
 * @prop object|function 	Optional: css object or callback function 
 * @prop function 		Optional: callback function (css object must be set)
 */
.getScripts(array, [object, function])
````

### Script load examples

````javascript
var files = ["first.js", "second.js"];

/**
 * Example 1
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".first").
 */
$(".first").getScripts(files);

/**
 * Example 2
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".first").
 * - And styles are applied to $(".first").
 */
$(".first").getScripts(files, {"background-color": "red"});

/**
 * Example 3
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".first").
 * - And callback function is called (with DOMElement as this).
 */
var myCallback = function () {
	// @var this, element for wich the files are loaded
	console.log(this)
};
 
$(".first").getScripts(files, myCallback);

/**
 * Example 4
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".first").
 * - And styles are applied to $(".first").
 * - And callback function is called (with DOMElement as this).
 */
$(".first").getScripts(files, {"background-color": "red"}, myCallback);

````
### Listening for ready event & callback function

````javascript
// Listening for ready event
$(".first").on("ready", function (e, failed) {
	// ready event, scripts are loaded
	console.log(e);
	
	// DomElement for wich the scripts are loaded
	console.log(this);
	
	// Array of files failed to load or empty array
	console.log(failed);
});

// With javascript callback
var myCallback = function () {
	// DomElement for wich the scripts are loaded
	console.log(this);
};

````

### Important.

The listeners should be set prior to the scrpt loading part.

````javascript
// Listening for ready event
$(".first").on("ready", function (e, failed) {
	// Do something
}).getScripts(["first.js", "second.js"]);
````


There's no support for this plug-in.
