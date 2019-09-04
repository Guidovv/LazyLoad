# LazyLoad.js

Lazyload any resource when they are close to enter the viewport.

### Usage
```
<div class="blog-item" data-backgroundImage="https://placekitten.com/100/200"></div>
<div class="blog-item" data-backgroundImage="https://placekitten.com/200/300"></div>
<div class="blog-item" data-backgroundImage="https://placekitten.com/300/400"></div>

<script>
lazyLoad({
    items: document.querySelectorAll('[data-backgroundimage]'),
    setAttribute: 'backgroundImage',
    getAttribute: 'data-backgroundimage'
});
</script>
``` 
### Options

| Option | Value |
| ------ | ------ |
| `items` | **Nodelist**|
| `setAttribute` | **String**|
| `getAttribute` | **String**|
