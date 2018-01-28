/**
 * jQuery Plugin getScripts
 * 
 * @description jQuery scripts loader
 * @author ©2018 Martijn Geerts
 */
;(function ($, window, document, undefined) {
	"use strict";

	$.fn.getScripts = function (scripts, css) {
		var o = {
			i: 0,
			a: document.createElement("a"),
			el: this, // jQuery collection
			css: $.isPlainObject(css) 
				? css 
				: {},
			count: scripts.length,
			loaded: [],
			failed: []
		};

		var f = {};

		f.getFilename = function (filename) {
			o.a.href = filename;
			return o.a.href.split("?")[0];
		};

		f.triggerDone = function () {
			o.file = this.url === undefined ? o.fail : this.url;
			o.file = f.getFilename(o.file);
			if (++o.i === o.loaded.length) {
				o.el.css(o.css);
				o.el.trigger("ready", [o.failed]);
			}
		};

		f.triggerFail = function () {
			o.fail = f.getFilename(this.url);
			o.failed.push(o.fail);
			f.triggerDone();
		};

		window.config = window.config || {};
		window.config.gotScripts = window.config.gotScripts || [];

		$.each(scripts, function () {
			o.file = f.getFilename(this);
			if (window.config.gotScripts.indexOf(o.file) === -1) {
				$.getScript(o.file).done(f.triggerDone).fail(f.triggerFail);
				window.config.gotScripts.push(o.file);
				o.loaded.push(o.file);
			}
		});

		if (o.loaded.length === 0) {
			console.log(o.css)
			o.el.trigger("ready", [o.failed]);
		}
		return o.el;
	};

}(jQuery, window, document));
