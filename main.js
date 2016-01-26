// about the sign in button, I am not sure what exactly what you wanted
// as far as a floating button, so I literally made a floating button :)

(function() {
  'use strict';

  var signinForm = $('#signin-form');
  var profileContent = $('#profile-content');
  profileContent.remove();

  function toggleBtnAndForm() {
    $('#signin-btn').toggle(function(){
        signinForm.slideDown(300);
        $(this).html('Cancel');
        $(this).toggleClass('signin-btn');
        $(this).toggleClass('cancel-btn');
    }, function(){
        signinForm.slideUp(300);
        $(this).html('Sign in');
        $(this).toggleClass('signin-btn');
        $(this).toggleClass('cancel-btn');
    });
  }

  var singinDetach = $('#signin-content');

  $("#main-form").submit(function( event ) {
    var username = $('#name').val();
    $('#name').val("");
    $('#password').val("");
    event.preventDefault();
    singinDetach = $('#signin-content').detach();
    profileContent.prependTo('body');
    $('#name-space').text("Welcome " + username + "!");
    profileContent.css("display", "block");
  });

  $(document).on("click", '#logout', function() {
    profileContent.remove();
    singinDetach.prependTo('body');
  });

  // initial state
  toggleBtnAndForm();

}());
