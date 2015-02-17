Inputizer
=============

A simple, experimental jQuery plugin to turn any div or span into a pseudo text input.

###Usage

Include `inputizer.css` and `inputizer.min.js`.

Inputizer takes one argument: a callback function that is called on blur or when the return key is pressed. The content of the element is passed as an argument for the callback function.

```html
<p>For my birthday, I want <span class="inputize-me">100</span> balloons.</p>

<script>
  $('.inputize-me').inputizer(function(value) {
    console.log('Wow, Joe wants ' + value + ' baloons for his birthday!');
  })
</script>
```
