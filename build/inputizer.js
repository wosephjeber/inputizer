(function ( $ ) {
  $.fn.selectText = function(){
     var doc = document;
     var element = this[0];
     if (doc.body.createTextRange) {
         var range = document.body.createTextRange();
         range.moveToElementText(element);
         range.select();
     } else if (window.getSelection) {
         var selection = window.getSelection();        
         var range = document.createRange();
         range.selectNodeContents(element);
         selection.removeAllRanges();
         selection.addRange(range);
     }
  };
  
  $.fn.inputizer = function(onBlur) {
    return this.each(function() {
      
      onBlur = (typeof onBlur === 'function') ? onBlur : function() {};
      
      var _this = this;
      var $this = $(this);
      
      $this.attr('contenteditable', true).addClass('inputized');
      
      $this.bind('blur', function() {onBlur.call(_this, $this.html())});
      
      $this.keypress(function(e){
        var regex = /[^0-9\,]/;
        var k = e.which;
        var keychar = String.fromCharCode(k);
        if (k == 13) {
          $(this).trigger('blur');
          return false;
        }
      });
    
      $this.on("click focus", function(){
        $this.selectText();
      })
    })
  };
}( jQuery ));
