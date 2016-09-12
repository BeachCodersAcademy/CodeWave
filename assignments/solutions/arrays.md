# Arrays

```javascript
// Create an array people and fill it with 3 objects, each object must contain these properties:
// * Name (of type String)
// * Age (of type Number)
// * Contact (an object containing 'phone' and 'email')

let people = [
 {
   name: 'Billy',
   age: 27,
   contact:{ email: 'billybob@gmail.com',
            phone: '308-229-883'
           },
 },
  {
   name: 'Sue',
   age: 20,
   contact:{ email: 'suzie333@gmail.com',
            phone: '308-229-8383'
 }
 },
 {
   name: 'Calvin',
   age: 24,
   contact:{ email: 'cal-883@ygmail.com',
            phone: '308-444-555'
 }
 }
];

// 2. Log the element at index 1 (Is this the first element?).
console.log(people[1]);

// 3. Because arrays are ordered, they keep a record of how many elements are inside them. Log the length property of your array.
console.log(people.length);

// 4. Use a method to remove the last element of the array and store this in the variable lastPerson
lastPerson = people.pop();

// 5. Log lastPerson's name & phone number
console.log(lastPerson.name);
console.log(lastPerson.contact.phone);

// 6. Use a method to put lastPerson to the front of the array.
people.unshift(lastPerson);

// 7. Log the entire array
console.log(people);
```
