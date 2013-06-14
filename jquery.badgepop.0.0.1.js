/**
 * jQuery Badge Pop
 * jQuery library for making a badge pop out and show at a set px on a page
 * 
 * Licensed under the MIT license.
 * Copyright 2013 Brian Retterer
 * https://github.com/bretterer
 */

 ;(function($) {

 	var defaults = {
 		yPop : 0,
 		scale : 1,
 		ease : 'Elastic.easeOut',
 		mainDuration : 1,
 		childDuration : '.75',
 		childOpacity : 1,
 		childDelay : '.25',
 		onInit : function() {},
 		beforeShow : function() {},
 		afterShow : function() {}

 	};

 	

 	function BadgePop(element, options) {

		var badge = this;

 		badge.element = element;
		badge.config = $.extend({}, defaults, options);
  		badge.init( badge );

 	}

 	BadgePop.prototype.init = function( badge ) {
 		badge.watchScroll( badge );
 		
 	}

 	BadgePop.prototype.watchScroll = function( badge ) {
 		$(window).scroll( function() {
 			if($(window).scrollTop() >= badge.config.yPop) {
 				badge.popBadge( badge );
 			}
 		});
 	}

 	BadgePop.prototype.popBadge = function( badge ) {
 		if (! badge.element.hasClass('show')) {
			badge.element.addClass('show');
			TweenMax.to(badge.element, badge.config.mainDuration, {scale:badge.config.scale, ease:badge.config.ease});
			TweenMax.to(badge.element.children('span'), badge.config.childDuration, {opacity:badge.config.childOpacity, delay: badge.config.childDelay});	
		}
 	}

 	$.fn.badgePop = function(options) {
 		new BadgePop(this.first(), options);
 		return this.first();
 	}

 }(jQuery));