# getScripts
Scriptloading with jQuery getScript for multiple scripts. 

* Uses jQuery scrip loader.
* Keeps track of loaded scripts (no double script load)

### usage:

````javascript
// Listen to 'ready' event 
$("#block").on('ready', function (e, failed) {
    // @var Event e
    // @var array failed Array with scripts not loaded. mostly 404's
    
    // @var this The actual DomNode
    // Do something with loaded scripts.
});

// load scripts, then fires 'ready' event on jQuery element.
$('#block').getScripts(["one.js", "two.js", "three.js"]);
 ````

````javascript

$('#block')on('ready', function (e, failed) {
    // example
}).getScripts(["one.js", "two.js", "three.js"]);

````


There's no support for this plug-in.
