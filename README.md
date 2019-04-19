# Lazyload.js

Lazyload any resource you need lazyloaded

**Options:**<br>
	- items: (nodelist)<br>
	- setAttribute: (string)<br>
	- getAttribute: (string)<br><br>

**Example html:**<br>
`<div class="blog-item" data-backgroundImage="https://placekitten.com/408/287"></div>`<br>
`<div class="blog-item" data-backgroundImage="https://placekitten.com/408/287"></div>`

**Example javascript:**<br>
lazyLoad({<br>
&nbsp;&nbsp;&nbsp;&nbsp;items: document.querySelectorAll('[data-backgroundimage]'),<br>
&nbsp;&nbsp;&nbsp;&nbsp;setAttribute: 'backgroundImage',<br>
&nbsp;&nbsp;&nbsp;&nbsp;getAttribute: 'data-backgroundimage'<br>
});
