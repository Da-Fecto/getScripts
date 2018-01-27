/**
 * jQuery Plugin getScripts
 * 
 * @description jQuery scripts loader
 * @author ©2018 Martijn Geerts
 */
;(function ($, window, document, undefined) {
	"use strict";

	$.fn.getScripts = function (scripts, css) {
		// placeholder
		var o = {
			i: 0,
			el: this, // jQuery collection
			css: function () {
				return $.isPlainObject(css) ? css : {};
			}(),
			count: scripts.length,
			loaded: [],
			failed: []
		};

		o.getFilename = function (filename) {
			var a = document.createElement("a");
			a.href = filename;
			return a.href.split("?")[0];
		};

		o.triggerDone = function () {
			o.file = this.url === undefined ? o.fail : this.url;
			o.file = o.getFilename(o.file);
			if (++o.i === o.loaded.length) {
				o.el.css(o.css);
				o.el.trigger("ready", [o.failed]);
			}
		};

		o.triggerFail = function () {
			o.fail = o.getFilename(this.url);
			o.failed.push(o.fail);
			o.triggerDone();
		};

		window.config = window.config || {};
		window.config.gotScripts = window.config.gotScripts || [];

		$.each(scripts, function () {
			o.file = o.getFilename(this);
			if (window.config.gotScripts.indexOf(o.file) === -1) {
				$.getScript(o.file).done(o.triggerDone).fail(o.triggerFail);
				window.config.gotScripts.push(o.file);
				o.loaded.push(o.file);
			}
		});

		if (o.loaded.length === 0) {
			o.el.css(o.css);
			o.el.trigger("ready", [o.failed]);
		}
		return o.el;
	};

}(jQuery, window, document));
