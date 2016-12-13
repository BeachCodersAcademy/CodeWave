//what is the DOM?
//https://css-tricks.com/dom/

// The HTML you write is parsed by the browser
// and turned into the DOM (Document Object Model)

//The code source in DevTools is kinda like the DOM

//JavaScript can interface with and manipulate the DOM

//imagine if you have an empty div but wanted to fill it out later
<div id="my-div"></div>

  var myDiv = document.getElementById("my-div");
  myDiv.innerHTML = "My new Content!!!";

//You can think of HTML elements as DOM nodes or objects
//that you can mess with using JavaScript
//The DOM is an object-oriented representation of the
//web page

// The W3C DOM and WHATWG DOM standards form the basis of the DOM implemented in most modern browsers. 
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
// Document and window objects are the objects whose interfaces you generally use most often in DOM 
// programming. In simple terms, the window object represents something like the browser, and the document
//  object is the root of the document itself. 


// For example, the standard DOM specifies that 
// the getElementsByTagName method in the code 
// below must return a list of all the <P> elements 
// in the document:
// from MDN
var paragraphArray = document.getElementsByTagName("P");
// paragraphArray[0] is the first <p> element
// paragraphArray[1] is the second <p> element, etc.
alert(paragraphArray[1].nodeName);

// All of the properties, methods, and events available
//  for manipulating and creating web pages are organized 
//  into objects. The document object represents the 
//entire document

Example from MDN: 
    <script>
       // run this function when the document is loaded
       window.onload = function() {

         // create a couple of elements in an otherwise empty HTML page
         var heading = document.createElement("h1");
         var heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
      }
    </script>

// Important DOM methods
Document.querySelector()
element = document.querySelector(selectors);
// Returns the first Element within the document that 
//  matches the specified group of selectors.
var el = document.querySelector(".james");

// challenge: what does this select?
var el = document.querySelector("div.user-panel.main input[name=login]");

//Others: look up on MDN
// Node.textContent

// element.inner.HTML
document.body.innerHTML = "";

//.style
// Styles can be set by assigning a string 
// directly to the style property as in 
elt.style.color = "blue";  // Directly

//.cssText
//w3 schools
// The cssText property sets or returns the 
// contents of a style declaration as a string.
document.getElementById("myP").style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;"

//Adds a new attribute or changes the value of an existing attribute on the specified element.
element.setAttribute(name, value);
//Do example on https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributehttps://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

