# getScripts
Scriptloading with jQuery getScript for multiple scripts

### usage:

````javascript
// load scripts then fires 'ready' event on jQuery element.
$('#block').getScripts(["one.js", "two.js", "three.js"]);

// Listen to event
$("#block").on('ready', function (e, failed) {
    // @var Event e
    // @var array failed Array with scripts not loaded. mostly 404's
});
 ````
