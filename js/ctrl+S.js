$(document).bind('keydown', function(e) {
    if(e.ctrlKey && (e.which == 83)) {
      e.preventDefault();
        //alert('Please Try Another');
      return false;
    }
  });