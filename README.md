# getScripts
Scriptloading with jQuery getScript for multiple scripts that fires a ready event on a jQuery element(s). 

* Uses jQuery scrip loader.
* Keeps track of loaded scripts (no double script load)

### usage:

````javascript
/**
 * Scriptloader
 *
 * First attach listeners then call the plug-in with an array
 * of javascripts.
 */

// Listen to 'ready' event 
$("#block").on('ready', function (e, failed) {
    // @var Event e
    // @var array failed Array with scripts not loaded. mostlikely 404's
    // @var this The actual DomNode
    // Do something with loaded scripts.
});

// load scripts, then fires 'ready' event on jQuery element.
// Optionally css styles to apply after 'ready' event is fired on jQuery element.
$('#block').getScripts(["one.js", "two.js", "three.js"], {"background": "red"});
 ````

````javascript

$('#block').on('ready', function (e, failed) {
    // example
}).getScripts(["one.js", "two.js", "three.js"]);

````


There's no support for this plug-in.
