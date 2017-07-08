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