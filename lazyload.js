var lazyLoad = (function( user_options ) {

	var scrolling = true;
	var options = {
		items: [],
		setAttribute: '',
		getAttribute: '',
	}

	if (mergeOrFail( user_options )) {
		run();
	}

	function mergeOrFail( user_options ) {
		// No options provided
		if ( typeof user_options == 'undefined' || Object.keys(user_options).length == 0 ) {
			console.error('None of the required options were provided');
			return;
		}

		// Try to merge
		var error = false;
		Object.keys(options).forEach(function( key ) {
			error = !error ? typeof user_options[key] == 'undefined' : error;
			if (!error) {
				options[key] = user_options[key];
			}
		});

		if (error) {
			console.error('Not all of the required options were provided');
			console.table(user_options);
			return;
		}

		return true;
	}

	function run() {
		window.addEventListener('scroll', function() {
			scrolling = true;
		});

		setInterval(function() {
			if (!scrolling) {
				return;
			}

			loadSrc();
			updateItems();

			scrolling = !scrolling;
		}, 100);
	}

	function loadSrc() {
		for (var i = 0; i < options.items.length; i++) {
			var item = options.items[i];
			var top = item.getBoundingClientRect().top;
			if (top <= (window.innerHeight * 1.5)) {
				if (options.setAttribute == 'backgroundImage') {
					item.style[options.setAttribute] = "url(" + item.getAttribute(options.getAttribute) + ")";
				} else {
					item.setAttribute(options.setAttribute, item.getAttribute(options.getAttribute));
				}
				item.removeAttribute(options.getAttribute);
			}
		}
	}

	function updateItems() {
		var new_items = Array.prototype.slice.call(options.items);
		new_items = new_items.filter(function(item) {
			return item.hasAttribute(options.getAttribute);
		});
		options.items = new_items;
	}
});
