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