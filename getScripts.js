	/**
	 * Get Scripts
	 *
	 *	// load scripts
	 *	$('#block').getScripts(["one.js", "two.js", "three.js"]);
	 *
	 * 	// Listen to event
	 * 	$("#block").on('ready', function (e, failed) {
	 *		// @var Event e
	 *		// @var array failed Array with scripts not loaded. mostly 404's
	 *	});
	 *
	 * @author: Martijn Geerts
	 *
	 */
	;(function($, window, document, undefined) {
		$.fn.getScripts = function(scripts) {
			// placeholder
			var o = {
				i: 0, // iterator, o.execute
				u: 0, // iterator, o.makeUnique
				el: this, // jQuery collection
				div: null, // temporary DomNode, o.ready
				trigger: false, // Ready Event fired?
				count: scripts.length, // Amount of scripts
				failed: []
			};

			o.ready = function () {
				o.div = this;
				if (!o.div.getAttribute('ready')) {
					o.div.setAttribute('ready', true);
					o.div.style.display = '';
					o.div.style.length || (o.div.removeAttribute('style'));
					$(o.div).trigger('ready', [o.failed]);
				}
			};

			o.execute = function () {
				if (++o.i === o.count) {
					o.el.each(o.ready);
				}
			};

			o.fail = function () {
				o.failed.push(this.url.split('?')[0]);
				o.execute(this);
			};

			o.buildConfig = function () {
				window.config = window.config || {};
				window.config.requested = window.config.requested || [];
			};

			o.buildConfig();

			$.each(scripts, function (i) {
				o.file = String(this);

				// Not found, load it
				if (window.config.requested.indexOf(o.file) === -1) {
					// Load
					$.getScript(this).done(o.execute).fail(o.fail);
					// And register
					window.config.requested.push(o.file);
					o.trigger = true;

				} else {
					// Remove from length
					o.count -= 1;
				}

				// When no files needed to load trigger the ready
				if (!o.trigger && !o.trigger && i + 1 === scripts.length) {
					o.el.each(o.ready);
				}
			});

			return o.el;
		};
	})(jQuery, window, document);
