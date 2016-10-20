let React = require('react');
let ReactDOM = require('react-dom');

function coinToss () {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

let pics = {
  kitty: 'http://kurld.com/images/wallpapers/cute-cats/cute-cats-22.jpg',
  doggy: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-07/10/15/campaign_images/webdr14/secrets-doggy-daycare-employees-will-never-tell-y-2-4088-1436557195-1_dblbig.jpg'
};

if (coinToss() === 'heads') {
  let img = <img src={pics.kitty} />
} else {
  let img = <img src={pics.doggy} />
}

ReactDOM.render(img, document.getElementById('app'));