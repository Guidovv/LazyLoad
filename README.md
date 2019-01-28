# Lazyload.js

Lazyload anything you want

**Options:**<br>
	- items: (nodelist)<br>
	- setAttribute: (string)<br>
	- getAttribute: (string)<br><br>

**Example html:**<br>
`<div class="blog-item" data-backgroundImage="https://placekitten.com/408/287"></div>`<br>
`<div class="blog-item" data-backgroundImage="https://placekitten.com/408/287"></div>`

**Example javascript:**<br>
lazyLoad({<br>
	items: document.querySelectorAll('[data-backgroundimage]'),<br>
	setAttribute: 'backgroundImage',<br>
	getAttribute: 'data-backgroundimage'<br>
});
