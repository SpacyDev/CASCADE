$(document).ready(function() {

    $( "div" ).addClass(function( index, currentClass ) {
        var addedClass;
       
        if ( currentClass === "header-logo" ) {
          addedClass = "header-logo-after-load";
        }
       
        return addedClass;
      });
});
