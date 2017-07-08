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