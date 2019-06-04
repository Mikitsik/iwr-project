// open-close modal window
var userName = document.querySelector("#user_name"),
    sessionEmail = document.querySelector("#session_email"),
    userEmail = document.querySelector("#user_email"),
    regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    redAlert = function() {
      userEmail.style.border = "solid red 2px";
      $( "#goodnote" ).addClass( "d-none" );
      $( "#badnote" ).removeClass( "d-none" );
    },
    greenAlert = function() {
      userEmail.style.border = "solid green 2px";
      $( "#badnote" ).addClass( "d-none" );
      $( "#goodnote" ).removeClass( "d-none" );
    };

$( "#getstarted" ).click( function() {
  $( "#loginlay" ).removeClass( "d-none" );
  $( "#loginlayunder" ).removeClass( "d-none" );
});

$( "#loginlay" ).click( function() {
  $( this ).addClass( "d-none" );
  $( "#loginlayunder" ).addClass( "d-none" );
});

$( "#register" ).click( function() {
  $( "#loginlay" ).addClass( "d-none" );
  $( "#loginlayunder" ).addClass( "d-none" );
  $( "#registerlay" ).removeClass( "d-none" );
  $( "#registerlayunder" ).removeClass( "d-none" );
  userName.focus();
});

$( "#registerlay" ).click( function() {
  $( this ).addClass( "d-none" );
  $( "#registerlayunder" ).addClass( "d-none" );
});

$( "#loginback" ).click( function() {
  $( "#registerlay" ).addClass( "d-none" );
  $( "#registerlayunder" ).addClass( "d-none" );
  $( "#loginlay" ).removeClass( "d-none" );
  $( "#loginlayunder" ).removeClass( "d-none" );
  sessionEmail.focus();
});

userEmail.addEventListener( "keyup", function() {
  if ( regExpEmail.test( userEmail.value )) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText) {
              greenAlert();
            } else {
              redAlert();
            }
          }
        };
      xmlhttp.open("GET", "gethint.php?q=" + str, true);
      xmlhttp.send();
  } else {
    redAlert();
  }
});
