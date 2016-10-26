alert('Welcome to Who Wants to be a Millionaire!');

let isReady = confirm('Are you ready???');

if (isReady === false) {
  window.location = "https://www.yelp.com/biz/zacatecas-restaurant-hawthorne";
}

function tellThemTheyLost() {
  // 1. get value of radio button
  // 2. check if value is correct
  // 3. tell user if they are correct
  
  let message = 'Sorry but you lost';
  alert(message);
  alert('Please try again');
}