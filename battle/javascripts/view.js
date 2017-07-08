'use strict';

let robot1,
    robot2,
    health1 = 0,
    health2 = 0,
    counter = 0;


let Arena = function(auto1, auto2){
  robot1 = auto1;
  robot2 = auto2;
  health1 = auto1.health;
  health2 = auto2.health;
  $('#robot1Atk').hide();
  $('#robot2Atk').hide();
  $('#hideMeTilTheEnd').hide();
  $('#showMeTilTheEnd').show();
  $('#robotName1').text(`${robot1.modelName} ${robot1.robotName}`);
  $('#robotName2').text(`${robot2.modelName} ${robot2.robotName}`);
  $('#health1').text(`${robot1.health} health`);
  $('#health2').text(`${robot2.health} health`);
};

let Fight = () => {
  counter++;
  $('#rndCount').text(`Round ${counter}`);
  let damage1 = Math.floor(Math.random() * robot1.damage);
  health2 -= damage1;
  $('#robot1Atk').text(`${robot1.robotName} attacks with ${robot1.weapon.name} for ${damage1}`);
  if (health2 <= 0) {
    $('#health2').text('DESTROYED');
    $('#p2').addClass("attn");
    $('#rndCount').text(`${robot1.robotName} Wins!`);
    $('#results').addClass('winner');
    $('#showMeTilTheEnd').hide();
    $('#hideMeTilTheEnd').show();
    return 1;
  } else {
    $('#health2').text(`${health2} health`);
  }
  let damage2 = Math.floor(Math.random() * robot2.damage);
  health1 -= damage2;
  $('#robot2Atk').text(`${robot2.robotName} attacks with ${robot2.weapon.name} for ${damage2}`);
  if (health1 <= 0) {
    $('#health1').text('DESTROYED');
    $('#p1').addClass("attn");
    $('#rndCount').text(`${robot2.robotName} Wins!`);
    $('#results').addClass('winner');
    $('#showMeTilTheEnd').hide();
    $('#hideMeTilTheEnd').show();
    return 2;
  } else {
    $('#health1').text(`${health1} health`);
  }
  $('#robot1Atk').show();
  $('#robot2Atk').show();
  return -1;
};


// 1. Use ES6 language features wherever you can. At a minimum, you should be using **let**, **const**, fat arrows, property shorthand, method properties, and string templates.

// Some things to test:
//    + Instantiation of new objects creates the inheritance you expect
//    + Calculations for health, damage, armor, etc. work properly
//    + Passing in arguments to set properties like `name` or `number of arms` creates those properties

// 1. You must use jQuery for interacting with the DOM.

// You'll be building robots to battle each other.

// 1. A base Robot function.
// 1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
// 1. Each type must have a unique property, for example, if it is aerial or ground based.
// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

// ### Functional Requirements

// 1. When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// 1. You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// 1. Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// 1. Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

// ##### The Viper Drone defeated the Behemoth ATV with its flamethrower.

module.exports = {Arena, Fight};