(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Armor = function () {
  /* body... */
};

let Light = function () {
  this.name = "Light";
  this.absorb = 30;
};

Light.prototype = new Armor();

let Heavy = function () {
  this.name = "Heavy";
  this.absorb = 50;
};

Heavy.prototype = new Armor();

module.exports = {Light, Heavy};
},{}],2:[function(require,module,exports){
'use strict';

let DOMGuy = require("./view.js"),
    Robot = require("./model.js");

let events = function () {
  $('#setup').show();
  $('#arena').hide();
  
  let goToArena = $('#goToArena').click(function(event) {
    if ($('select option:selected')[0].value === 'null' || $('select option:selected')[1].value === 'null'){
      alert("Please choose a model!");
    } else {
      let robotModel1 = new Robot[$('select option:selected')[0].id]($('#name1').val());
      let robotModel2 = new Robot[$('select option:selected')[1].id]($('#name2').val());
      $('#setup').hide();
      $('#arena').show();
      if (robotModel2.robotName === 'Unnamed Prototype'){
        robotModel2.setName('Unnamed Prototype 2');
      }
      $('#p1 img').attr({
        src: `images/${$('#species1 option:selected').attr('id')}.gif`,
        alt: `${$('#species1 option:selected').text()}`
      });
      $('#p2 img').attr({
        src: `images/${$('#species2 option:selected').attr('id')}.gif`,
        alt: `${$('#species2 option:selected').text()}`
      });
      DOMGuy.Arena(robotModel1, robotModel2);
    }
  });

  let fightem = $('#fight').click(function(event) {
    if ($('#health1').text() === '0' || $('#health2').text() === '0'){
      location.reload();
    }
    DOMGuy.Fight();
  });

  let showFighter1 = $('#species1').change(function (event) {
    $('#makeRobot1 img').attr({
      src: `images/${$('#species1 option:selected').attr('id')}.gif`,
      alt: `${$('#species1 option:selected').text()}`
    });
  });

  let showFighter2 = $('#species2').change(function (event) {
    $('#makeRobot2 img').attr({
      src: `images/${$('#species2 option:selected').attr('id')}.gif`,
      alt: `${$('#species2 option:selected').text()}`
    });
  });

  let restart = $('#reload').click(()=>{
    location.reload();
  });

};

module.exports = events;
},{"./model.js":3,"./view.js":5}],3:[function(require,module,exports){
'use strict';

let DOMGuy = require("./view.js"),
    Weapon = require("./weapons.js"),
    Armor = require("./armor.js");

let Robot = {};

// 1. A base Robot function.
Robot.Frame = function(name){
  this.robotName = name || "Unnamed Prototype";
  this.healthBase = 50;
  this.frameName = "Mark";
  this.damageBaseRam = 10;
};

Robot.Frame.prototype.setName = function(newName) {
  this.robotName = newName;
};

// 1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
// 1. Each type must have a unique property, for example, if it is aerial or ground based.
Robot.Flier = function (name) {
  this.typeName = "Anemoi";
  this.healthBonus = -10;
  this.aerial = true;
  this.weapon = new Weapon.Divebomb();
};

Robot.Flier.prototype = new Robot.Frame(name);

// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

Robot.Bee = function (name) {
  this.modelName = "Stymphalian";
  this.damage = Math.floor(Math.random() * 10) + this.weapon.damage;
  this.armor = new Armor.Light();
  this.health = Math.floor(Math.random() * 50) + this.healthBase + this.healthBonus + this.armor.absorb;
  this.setName(name);
};

Robot.Bee.prototype = new Robot.Flier(name);

Robot.Bird = function (name) {
  this.modelName = "Harpy";
  this.damage = Math.floor(Math.random() * 20) + this.weapon.damage;
  this.armor = new Armor.Heavy();
  this.health = Math.floor(Math.random() * 100) + this.healthBase + this.healthBonus + this.armor.absorb;
  this.setName(name);
};

Robot.Bird.prototype = new Robot.Flier(name);

Robot.Walker = function (name) {
  this.typeName = "";
  this.healthBonus = 10;
  this.mobile = true;
  this.weapon = new Weapon.Hammer();
};

Robot.Walker.prototype = new Robot.Frame(name);

Robot.Spider = function (name) {
  this.modelName = "Arachne";
  this.damage = Math.floor(Math.random() * 10) + this.weapon.damage;
  this.armor = new Armor.Light();
  this.health = Math.floor(Math.random() * 50) + this.healthBase + this.healthBonus + this.armor.absorb;
  this.setName(name);
};

Robot.Spider.prototype = new Robot.Walker(name);

Robot.Dog = function (name) {
  this.modelName = "Cerebus";
  this.damage = Math.floor(Math.random() * 20) + this.weapon.damage;
  this.armor = new Armor.Heavy();
  this.health = Math.floor(Math.random() * 100) + this.healthBase + this.healthBonus + this.armor.absorb;
  this.setName(name);
};

Robot.Dog.prototype = new Robot.Walker(name);

// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

Robot.Crawler = function (name) {
  this.typeName = "Ouroboros";
  this.healthBonus = 20;
  this.grappler = true;
  this.weapon = new Weapon.Constrict();
};

Robot.Crawler.prototype = new Robot.Frame(name);

// 1. Define at least 2 specific robot model functions for each type.
// 1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
// 1. Give each robot model a different range of damage they do using the same technique.

Robot.Snake = function (name) {
  this.modelName = "Amphisbaena";
  this.damage = Math.floor(Math.random() * 10) + this.weapon.damage;
  this.armor = new Armor.Light();
  this.health = Math.floor(Math.random() * 50) + this.healthBase + this.healthBonus + this.armor.absorb;
  this.setName(name);
};

Robot.Snake.prototype = new Robot.Crawler(name);

Robot.Gorgon = function (name) {
  this.modelName = "Medusa";
  this.damage = Math.floor(Math.random() * 20) + this.weapon.damage;
  this.armor = new Armor.Heavy();
  this.health = Math.floor(Math.random() * 100) + this.healthBase + this.healthBonus + this.armor.absorb;
  this.setName(name);
};

Robot.Gorgon.prototype = new Robot.Crawler(name);

//    + Instantiation of new objects creates the inheritance you expect
//    + Calculations for health, damage, armor, etc. work properly
//    + Passing in arguments to set properties like `name` or `number of arms` creates those properties

// 1. You must use jQuery for interacting with the DOM.

// ### Logical Requirements

// You'll be building robots to battle each other.


// ### Functional Requirements

// 1. When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// 1. You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// 1. Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// 1. Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

// ##### The Viper Drone defeated the Behemoth ATV with its flamethrower.

module.exports = Robot;
},{"./armor.js":1,"./view.js":5,"./weapons.js":6}],4:[function(require,module,exports){
'use strict';

let Events = require("./events.js"),
    Robot = require("./model.js");

Events();

// # Modern JavaScript Developer Quiz
// # Robot Battledome

// ## Instructions

// ### Code/Tools Requirements

// 1. Use ES6 language features wherever you can. At a minimum, you should be using **let**, **const**, fat arrows, property shorthand, method properties, and string templates.
// 1. Have a Grunt task running at all times to validate your JavaScript. We will be validating your project and we should see 0 errors.
// 1. You must have a very basic, just a few, test suite that validates the core logic of the application.
// Some things to test:
//    + Instantiation of new objects creates the inheritance you expect
//    + Calculations for health, damage, armor, etc. work properly
//    + Passing in arguments to set properties like `name` or `number of arms` creates those properties

// 1. You must use jQuery for interacting with the DOM.

// ### Logical Requirements

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

},{"./events.js":2,"./model.js":3}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";

let Weapon = function () {
  this.mount = true;
};

let Divebomb = function () {
  this.name = "Divebomb";
  this.damage = 20;
};

Divebomb.prototype = new Weapon();

let Constrict = function () {
  this.name = "Constrict";
  this.damage = 20;
};

Constrict.prototype = new Weapon();

let Hammer = function () {
  this.name = "Hammer";
  this.damage = 20;
};

Hammer.prototype = new Weapon();

module.exports = {Divebomb, Constrict, Hammer};
},{}]},{},[4]);
