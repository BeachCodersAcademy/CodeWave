$('.carousel').carousel({
  interval: 500
})

//ES6 syntax
$('input').keyup(() => {
  let inputbox = $('input').val();
  console.log(inputbox);
})

//ES5 syntax
// $('input').keyup(function() {
//   let inputbox = $('input').val();
//   console.log(inputbox);
// })
