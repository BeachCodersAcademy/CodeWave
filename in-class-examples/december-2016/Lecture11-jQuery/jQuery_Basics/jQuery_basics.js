// Daily challenge
// write a function to find largest number in an array
function mymax(a) {
  var m = -Infinity

  for (let i = 0; i < a.length; i++) {
    if (a[i] > m) {
      m = a[i];
    }
  }

  return m;
}

//So what is jQuery?

// jQuery takes a lot of tasks that may require multiple and sometimes many lines of JavaScript code to accomplish, and wraps them into shorter methods that you can call with a single line of code.

//jQuery simplifies many things, including:
//AJAX calls
//DOM manipulation
//CSS manipulation
//Event Handling
//etc.

//jQuery is also designed to navigate around browser incompatibilities.

//How do we add jQuery to our project?
// Download jQuery from jQuery.com
// Include jQuery from a CDN

//Do we put jQuery in the head or body???
//great answer on stack overflow.
//http://stackoverflow.com/questions/10994335/javascript-head-body-or-jquery
// When you put scripts in <head> tag, the browsers goes for them thereby keeping other stuff on hold until scripts are loaded which users will perceive like slow loading of the page. This is why you should put scripts at the bottom.

//show this
//http://youmightnotneedjquery.com/

//you can do everything in JS that you can do in JQuery

$(document).ready(function() { /*Code goes here*/ });

//or

$(function() {
  /*Code goes here*/
});

// It is fired when DOM is available and ready to be manipulated. If you put your code at the end, you won't necessarily need this but usually this is needed because you want to do something as soon as DOM is available for use.

//jQuery syntax
// $(selector).action()
//
// A $ is jQuery object
// A (selector) to find certain HTML elements
//it uses CSS syntax to select elements. HOORAY!
// A jQuery action() does something to the selected element

//so much better than getElementById!! etc.

Examples:

  $(this).hide()
  //hides the current element. Will get to in a bit.
$("h1").hide()
  //hides all <p> elements.
$(".testing").hide()
$("#testid").hide()


// what if we wanted to hide all the h2 tags by clicking on a button?
$(document).ready(function() {
  $("button").click(function() {
    $("h2").hide();
  });
});

//Events
// Examples:
// moving a mouse over a certain element
//clicking on an element
//scrolling page
// selecting a certain radio button

// There are:
//   mouse events(click,dblclck), keyboard events(keydown, keyup), form events(submit, blur,focus), as well as document events(scroll, reload)

//no need to say addEventListener. Yay!

$("p").dblclick(function() {
  // action goes here!!
  $(this).hide();
  // or
  $(this).hide(1000);
  //or $('.showit').show(); will show elements with class name show
});


//on method attaches multiple handlers for on element

$(".my-class").on({
  mouseenter: function() {
    var styles = {
      backgroundColor: "gray",
      border: "2px solid black"
    };
    $(this).css(styles);
  },
  mouseleave: function() {
    $(this).css("background-color", "blue");
  },
  click: function() {
    $(this).css("background-color", "yellow");
  }
});


//try fadeIn method on a click event.hier.  make three colored boxes with ids:
//boxes need to be display: none initially
$("button").click(function() {
$("#div-1").fadeIn();
$("#div-2").fadeIn("slow");
$("#div-3").fadeIn(3000);
});
});

//last example
//http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down
