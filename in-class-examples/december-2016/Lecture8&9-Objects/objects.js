// This Example is from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// Using this
// for object references

// JavaScript has a special keyword, this, that you can use within a method to refer to the current object.For example, suppose you have a
// function called validate that validates an object 's value property, given the object and the high and low values:

function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival)) {
    alert("Invalid Value!");
  }
}
// Then, you could call validate in each form element 's onchange event handler, using this to pass it the element, as in the following example:

<
input type = "text"
name = "age"
size = "3"
onChange = "validate(this, 18, 99)" >
  //   In general, this refers to the calling object in a method.
  //
  // When combined with the form property, this can refer to the current object 's parent form. In the following example, the form myForm contains a Text object and a button. When the user clicks the button, the value of the Text object is set to the form'
  // s name.The button 's onclick event handler uses this.form to refer to the parent form, myForm.


  //From https://snook.ca/archives/javascript/javascript_pass


  function myobject() {
    this.value = 5;
  }
var o = new myobject();
alert(o.value); // o.value = 5
function objectchanger(fnc) {
  fnc.value = 6;
}
objectchanger(o);
alert(o.value); // o.value is now equal to 6
