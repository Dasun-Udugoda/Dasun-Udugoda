/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["981px", "1280px"],
    narrow: ["841px", "980px"],
    narrower: ["737px", "840px"],
    mobile: ["481px", "736px"],
    mobilep: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });
})(jQuery);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("proj1");
var btn2 = document.getElementById("proj2");
var btn3 = document.getElementById("proj3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
  document.getElementById("mod_title").innerHTML = "1008 PROJECT";
  document.getElementById("mod_desc").innerHTML =
    "this is the test input FOR 1";
};

btn2.onclick = function () {
  modal.style.display = "block";
  document.getElementById("mod_title").innerHTML = "MonMarket Website";
  document.getElementById("mod_desc").innerHTML =
    "This website was designed with a focus on catering to students residing on campus, providing them with a platform to buy and sell items among themselves. This service proves particularly valuable for students transitioning in and out of MRS."
    + " For this project I used python and flask. I learned how to use routes, blueprints and had the website sucessfuly running online"
	;
};

btn3.onclick = function () {
  modal.style.display = "block";
  document.getElementById("mod_title").innerHTML = "1008 PROJECT";
  document.getElementById("mod_desc").innerHTML =
    "this is the test input for 3";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
