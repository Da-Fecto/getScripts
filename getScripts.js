/**
 * jQuery Plugin getScripts
 * 
 * @description jQuery scripts loader
 * @author ©2018 Martijn Geerts
 */
;(function ($, window, document, undefined) {
	"use strict";

	$.fn.getScripts = function (scripts, css, callback) {
		var o = {
			i: 0,
			a: document.createElement("a"),
			el: this, // jQuery collection
			css: null,
			callback: null,
			count: scripts.length,
			loaded: [],
			failed: []
		};

		var f = {};

		f.ready = function() {
			o.el.css(o.css);
			o.el.trigger("ready", [o.failed]);
			if (o.callback) {
				o.el.each(function() {
					o.callback.apply(this, [o.failed]);
				});
			}
		};

		f.getFilename = function (filename) {
			o.a.href = filename;
			return o.a.href.split("?")[0];
		};

		f.triggerDone = function () {
			o.file = this.url === undefined ? o.fail : this.url;
			o.file = f.getFilename(o.file);
			if (++o.i === o.loaded.length) {
				f.ready();
			}
		};

		f.triggerFail = function () {
			o.fail = f.getFilename(this.url);
			o.failed.push(o.fail);
			f.triggerDone();
		};

		window.config = window.config || {};
		window.config.gotScripts = window.config.gotScripts || [];

		if ($.isFunction(css)) {
			o.css = {};
			o.callback = css;
		} else if ($.isPlainObject(css) || css === undefined) {
			o.css = $.isPlainObject(css) ? css : {};
			o.callback = $.isFunction(callback) ? callback : null;
		}

		$.each(scripts, function () {
			o.file = f.getFilename(this);
			if (window.config.gotScripts.indexOf(o.file) === -1) {
				$.getScript(this).done(f.triggerDone).fail(f.triggerFail);
				window.config.gotScripts.push(o.file);
				o.loaded.push(o.file);
			}
		});

		if (o.loaded.length === 0) {
			f.ready();
		}
		return o.el;
	};

}(jQuery, window, document));
