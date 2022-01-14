$(document).ready(function() {

    $( "div" ).addClass(function( index, currentClass ) {
        var addedClass;
       
        if ( currentClass === "header-logo" ) {
          addedClass = "header-logo-after-load";
        }       
        return addedClass;
      });
      $( "div" ).addClass(function( index, currentClass ) {
        var addedClass;
       
        if ( currentClass === "contact-us-link" ) {
          addedClass = "contact-us-afterload";
        }       
        return addedClass;
      });
});
