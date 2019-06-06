// open-close modal window
var userName = document.querySelector("#user_name"),
    sessionEmail = document.querySelector("#session_email"),
    userEmail = document.querySelector("#user_email"),
    regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    switchbutton = document.querySelector("#switchbutton"),
    redAlert = function() {
      userEmail.style.border = "solid red 2px";
      $( "#goodnote" ).addClass( "d-none" );
      $( "#hintalert" ).addClass( "d-none" );
      $( "#badnote" ).removeClass( "d-none" );
      switchbutton.setAttribute("disabled", true);
      switchbutton.style.cursor = "not-allowed";
    },
    greenAlert = function() {
      userEmail.style.border = "solid green 2px";
      $( "#badnote" ).addClass( "d-none" );
      $( "#hintalert" ).addClass( "d-none" );
      $( "#goodnote" ).removeClass( "d-none" );
      switchbutton.removeAttribute("disabled", true);
      switchbutton.style.cursor = "pointer";
    },
    hintAlert = function() {
      userEmail.style.border = "solid blue 2px";
      $( "#badnote" ).addClass( "d-none" );
      $( "#goodnote" ).addClass( "d-none" );
      $( "#hintalert" ).removeClass( "d-none" );
      switchbutton.setAttribute("disabled", true);
      switchbutton.style.cursor = "not-allowed";
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

userEmail.onblur = function() {
  $( "#goodnote" ).addClass( "d-none" );
  $( "#hintalert" ).addClass( "d-none" );
  userEmail.style.border = "1px solid #ced4da";
};

userEmail.addEventListener( "keyup", function() {
  if ( regExpEmail.test( userEmail.value )) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var h = JSON.parse(xmlhttp.responseText);
        if (h.message == 'success') {
              greenAlert();
            } else {
              redAlert();
            }
          }
        };
      xmlhttp.open("GET", "/users/email?email=" + userEmail.value, true);
      xmlhttp.send();
  } else {
    hintAlert();
  }
});
