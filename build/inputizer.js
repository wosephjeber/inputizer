(function ( $ ) {
 
    $.fn.inputizer = function() {
        
    };
 
  $.fn.inputizer = function(onBlur) {
    return this.each(function() {
      
      console.log(typeof onBlur);
      onBlur = (typeof onBlur === 'function') ? onBlur : function() {};
      
      $(this).attr('contenteditable', true).addClass('inputized');
      
      $(this).bind('blur', function() {onBlur.call(this)});
      
    })
  };
}( jQuery ));
