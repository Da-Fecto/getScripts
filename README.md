# getScripts

Scriptloading with jQuery getScript for multiple scripts. When all scripts are loaded a 'ready' event is fired on the jQuery element. The this context of the ready event will be the actual DomNode. 

Optionally, specify a callback script. When all scripts are loaded this callback will be executed with the DomNode as this context.

You can provide the getScripts plugin with a CSS style object. When scriploading is complete these styles are applied on the jQuery element.

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
 * - Then 'ready' event is fired on element $(".element").
 */
$(".element").getScripts(files);

/**
 * Example 2
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".element").
 * - And styles are applied to $(".element").
 */
$(".element").getScripts(files, {"background-color": "red"});

/**
 * Example 3
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".element").
 * - And callback function is called (with DOMElement as this).
 */
var myCallback = function () {
	// @var this, element for wich the files are loaded
	console.log(this)
};
 
$(".element").getScripts(files, myCallback);

/**
 * Example 4
 * 
 * Files get loaded:
 * - Then 'ready' event is fired on element $(".element").
 * - And styles are applied to $(".element").
 * - And callback function is called (with DOMElement as this).
 */
$(".element").getScripts(files, {"background-color": "red"}, myCallback);

````
### Listening for ready event & callback function

````javascript
// Listening for ready event
$(".element").on("ready", function (e, failed) {
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

The listeners should be set prior to the script loading part.

````javascript
// Listening for ready event
$(".element").on("ready", function (e, failed) {
	// Do something
}).getScripts(["first.js", "second.js"]);
````


There's no support for this plug-in.
