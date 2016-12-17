// map() to project an array of videos into an array of {id,title} pairs
// collecting {id, title} pairs for each video in the newReleases array
var newReleases = [{
  "id": 70111470,
  "title": "Die Hard",
  "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [4.0],
  "bookmark": []
}, {
  "id": 654356453,
  "title": "Bad Boys",
  "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [5.0],
  "bookmark": [{
    id: 432534,
    time: 65876586
  }]
}, {
  "id": 65432445,
  "title": "The Chamber",
  "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [4.0],
  "bookmark": []
}, {
  "id": 675465,
  "title": "Fracture",
  "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [5.0],
  "bookmark": [{
    id: 432534,
    time: 65876586
  }]
}];

newReleases.map(function(video) {
  return {
    id: video.id,
    title: video.title
  };
});


// implement filter to filter array by video ratings
newReleases.forEach(function(video) {
  if (video.rating === 5.0) {
    videos.push(video);
  }
});

return videos;


Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });

  return results;
};


// Chain filter and map to collect the ids of videos that have a rating of 5.0
newReleases
  .filter(function(item) {
    return item.rating === 5.0;
  })
  .map(function(item) {
    return item.id;
  });


//intro to Classes
//JavaScript classes make it simpler to create objects and deal with inheritance.

// classes are new and from ES6 and React uses them.

//Notes taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

//declaring a Polygon Class
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// can also do a class expression
// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//shortcut cl + tab
//a constuctor is how you create a new object: Send in a name
class Celebrity {
  constructor(name) {
    this.name = name;
  }
}

//creates a new Angelina property
let Angelina = new Celebrity('Angelina')

console.log(Angelina.name)

//What is the difference between object and class?
// An object is an instance of a class.  An object is an instantiation of a class.  A class is used to create objects

//blueprints for house is a class and the actual house an object.  Class is kind of like a recipe.



//command line
//https://github.com/BeachCodersAcademy/CodeWave/blob/master/notes/command-line.md


//intro to react
