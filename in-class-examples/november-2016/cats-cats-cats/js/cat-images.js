
let cats = [
  'https://i0.wp.com/i.imgur.com/7KHgx5z.gif',
  'http://www.popsci.com/sites/popsci.com/files/styles/large_1x_/public/images/2016/08/1200px-chat_des_sables_felis_margarita.jpeg?itok=ISrKp-wL&fc=50,50',
  'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c3/Chaton_tricolore.jpg',
  'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
  'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
  'https://media.giphy.com/media/cYmGBt2TBiOCA/giphy.gif',
  'https://i0.wp.com/i.imgur.com/7KHgx5z.gif',
  'http://www.popsci.com/sites/popsci.com/files/styles/large_1x_/public/images/2016/08/1200px-chat_des_sables_felis_margarita.jpeg?itok=ISrKp-wL&fc=50,50',
  'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c3/Chaton_tricolore.jpg',
  'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
  'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg',
  'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
  'https://media.giphy.com/media/cYmGBt2TBiOCA/giphy.gif'
];

let catContainer = '';

cats.forEach(cat => {
  catContainer += `<a href="${cat}"><img class="img-thumbnail col-md-3" src=${cat} /></a>`;
});

// console.log(catContainer);

$('#cat-img-container').html(catContainer);