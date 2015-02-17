(function ( $ ) {
 
    $.fn.inputizer = function() {
        
    };
 
  $.fn.inputizer = function(onBlur) {
    return this.each(function() {
      
      $(this).attr('contenteditable', true).addClass('inputized');
      
      $(this).bind('blur', function() {onBlur.call(this)});
      
    })
  };
}( jQuery ));
