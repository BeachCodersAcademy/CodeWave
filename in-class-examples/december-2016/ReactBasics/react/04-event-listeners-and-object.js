//Click a button and change the image





class App extends React.Component {

  let isCat = true;
  swapImage(e) {
    let catUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Indian_Cat_pic.jpg/220px-Indian_Cat_pic.jpg';
    let dogUrl = 'https://img.buzzfeed.com/buzzfeed-static/static/2015-07/10/15/campaign_images/webdr14/secrets-doggy-daycare-employees-will-never-tell-y-2-4088-1436557195-1_dblbig.jpg';

    console.log(e.target)
    if (isCat) {
      e.target.setAttribute('src', dogUrl);
      e.target.setAttribute('alt', 'dog');
    } else {
      e.target.setAttribute('src', catUrl);
      e.target.setAttribute('alt', 'cat');
    }

    isCat = !isCat;
  }

  render() {
    return ( <
      img src = {
        catUrl
      }
      alt = "cat"
      onClick = {
        this.swapImage
      }
      />
    );
  }
}

ReactDOM.render(App, document.getElementById('app'));
