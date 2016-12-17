// The EventTarget.addEventListener() method
// registers the specified listener on the
// EventTarget it's called on.
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//example from link above
<
table id = "outside" >
  <
  tr > < td id = "t1" > one < /td></tr >
  <
  tr > < td id = "t2" > two < /td></tr >
  <
  /table>

// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);

//list of more events
//https://developer.mozilla.org/en-US/docs/Web/Events
