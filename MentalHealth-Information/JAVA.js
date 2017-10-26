(function () {

  $(document).ready(initialize);

  function initialize(){
  alert("Welcome to my cool page");

  $('button').click(changeColor);

  }



  function changeColor() {
    var buttoncolor=$(this).text();
    $('h1').css('color',buttoncolor);

  }
})();
