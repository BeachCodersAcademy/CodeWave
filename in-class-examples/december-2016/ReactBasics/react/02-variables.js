/*
To 'inject' JavaScript into a JSX element use one set of curly braces.
*/

//anything in between curly braces can run javascript

let goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

let gooseImg = < img src = {
  goose
}
/>;

// or
let SubHeading = < h3 > This is a subheading < /h3> {
  9 * 3
}
