$(function() {
  
  let showStoryBtn = document.getElementById('show-story-btn');
  // let showStoryBtn = document.querySelector('#show-story-btn');
  
  showStoryBtn.addEventListener('click', createAndDisplayStory);
  
  function createAndDisplayStory() {
    
    // change body background color
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    // document.querySelector('body').style.backgroundColor = randomColor;
    $('body').css('background-color', randomColor);
    $('body').css('font-family', 'Fantasy');
    
    // get input
    let noun1 = document.getElementById('noun1').value;
    let verb1 = document.getElementById('verb1').value;
    let adj1 = document.getElementById('adj1').value;
    let noun2 = document.getElementById('noun2').value;

    let stories = [
      `Once upon a time there was a baby ${noun1}. This ${noun1} was so special because it knew how to ${verb1}. It ${verb1}ed so much that it fell on a ${adj1} new ${noun2} and broke its nose.`,
      `A giant ${noun2} was wreaking havoc on the tiny ${adj1} town of ${noun1}ville. Until a ${verb1} superhero came to the rescue.`,
      `A ${adj1} ${noun1} ${verb1}ed a ${noun2}`
    ];
    
    let storyDiv = document.getElementById('story');
    // console.log(`This is the textContent: "${storyDiv.textContent}"`);
    let randomIndex = Math.floor(Math.random() * stories.length);
    storyDiv.textContent = stories[randomIndex];
    
  }
  
});