var giraffeMaker = function(name, height, tired) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;   
  newGiraffe.tired = tired;
  newGiraffe.sing = "lalala";

  newGiraffe.isTallEnough = function(treeHeight) {
    return newGiraffe.height > treeHeight;
  };

  newGiraffe.isHungry = function() {
    return newGiraffe.hunger > 0;
  };
    
  newGiraffe.isSleepy = function() {
      if newGiraffe.tired === 'sleepy' || newGiraffe.tired === 'exhausted' {
          var message = newGiraffe.name + ", You look tired! Time for a nap.";
      } else if (newGiraffe.tired === 'awake'){
          var message = newGiraffe.name + ", You have so much energy! Don't stop now.";
      } else {
        var message = newGiraffe.name + ", How do you feel? Maybe you should have a nap."; 
      }
        return message;
  }

  newGiraffe.say = function(option) {
    var sentences = {
      'greet': 'Hello, my name is ' + newGiraffe.name + ', it is nice to meet you.',
      'notHungry': newGiraffe.name + ' is not hungry.',
      'notTallEnough': newGiraffe.name + ' is too short to reach the trees.',
      'ate': 'That was delicious!'
    };

    return console.log(sentences[option]);
  };

  newGiraffe.eat = function() {
    if (newGiraffe.isHungry()) {
      newGiraffe.hunger -= height;
      newGiraffe.say('ate');
    } else {
      newGiraffe.say('notHungry');
    }
  };

  newGiraffe.browse = function() {
    if (newGiraffe.isTallEnough(2)) {
      newGiraffe.eat();
    } else {
      newGiraffe.say('notTallEnough')
    }
  };

  return newGiraffe;
};
