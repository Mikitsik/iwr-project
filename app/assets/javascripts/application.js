// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require bootstrap
//= require_tree .

var textmessage = document.querySelector("#textmessage"),
regExpMes = /./;

setTimeout( function() {
  $( "#info" ).removeClass( "d-none" );
  if ( regExpMes.test( textmessage.innerHtml )) {
    $( "#firstmessage").fadeTo( 500, 0 );
    $( "#secondmessage").fadeTo( 500, 0 );
  };
}, 1200);

$( "#info" ).on('click', function() {
    $( this ).addClass( "lightSpeedOut" );
    setTimeout( function() {
      $( "#info" ).addClass( "d-none" );
      $( "#firstmessage").fadeTo( 500, 1 );
      $( "#secondmessage").fadeTo( 500, 1 );
    }, 1100);
});
