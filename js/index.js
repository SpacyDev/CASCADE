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

$('.header-logo')
    .data('textToggle', 5)
    .hover(function (e) {
        var that = $(this);

        // get the text from data attribute
        var textToSet = that.data('textToggle');

        // save the current text so it can be reverted
        that.data('textToggle', that.text());

        // set the new text
        that.text(textToSet);
    }, function (e) {
        var that = $(this);

        // get the text from data attribute
        var textToSet = that.data('textToggle');

        // save the current text so it can be reverted
        that.data('textToggle', that.text());

        // set the new text
        that.text("Central Asia and South Caucuses <br> Agricultural University Consortium for Development");
    });

