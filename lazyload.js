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
						console.error('None of the required options were provided');
						return;
					}

					return true;
				}

				function run() {
					window.onscroll = function() {
						scrolling = true;
					}

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
					options.items.forEach(function(item) {
						var top = item.getBoundingClientRect().top;
						var offset = window.pageYOffset < window.innerHeight ? window.innerHeight : window.pageYOffset;
						if (top <= offset) {
							if (options.setAttribute == 'backgroundImage') {
								item.style[options.setAttribute] = "url(" + item.getAttribute(options.getAttribute) + ")";
							} else {
								item.setAttribute(options.setAttribute, item.getAttribute(options.getAttribute));
							}
							item.removeAttribute(options.getAttribute);
						}
					});
				}

				function updateItems() {
					var new_items = Array.prototype.slice.call(options.items);
					new_items = new_items.filter(function(item) {
						return item.hasAttribute(options.getAttribute);
					});
					options.items = new_items;
				}
			});
