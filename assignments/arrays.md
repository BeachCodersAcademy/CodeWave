# Arrays

Arrays are a data structure that allow you to hold multiple pieces of information within one location in memory, very much like an object. 
More simply, an array (like an object) allows multiple pieces of data to exist inside one variable.
Unlike objects, arrays do not allow you to name individual properties. Instead, they have automatically assigned numerical "indexes", starting at 0 and going to the end of the array.

1. Create an array `people` and fill it with 3 objects, each object must contain these properties :
  
  * Name (of type String)
  * Age (of type Number)
  * Contact (an object containing 'phone' and 'email')

2. Log the element at index 1 (Is this the first element?).
3. Because arrays are ordered, they keep a record of how many elements are inside them. Log the length property of your array.
4. Use a method to remove the last element of the array and store this in the variable `lastPerson`

** Methods are properties of objects that contain functions. If you're running a function from an object (e.g. myArray.pop()), it is also called a method.

5. Log `lastPerson`'s name & phone number
6. Use a method to put `lastPerson` to the front of the array.
7. Log the entire array
