# getScripts
Scriptloading with jQuery getScript for multiple scripts. 

* Uses jQuery scrip loader.
* Keeps track of loaded scripts (no double script load)

### usage:

````javascript
// load scripts, then fires 'ready' event on jQuery element.
$('#block').getScripts(["one.js", "two.js", "three.js"]);

// Listen to fired event 
$("#block").on('ready', function (e, failed) {
    // @var Event e
    // @var array failed Array with scripts not loaded. mostly 404's
    
    // Do something with loaded scripts.
});
 ````

There's no support for this plug-in.
