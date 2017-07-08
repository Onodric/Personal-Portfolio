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
        src: `./images/${$('#species1 option:selected').attr('id')}.gif`,
        alt: `${$('#species1 option:selected').text()}`
      });
      $('#p2 img').attr({
        src: `./images/${$('#species2 option:selected').attr('id')}.gif`,
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
      src: `./images/${$('#species1 option:selected').attr('id')}.gif`,
      alt: `${$('#species1 option:selected').text()}`
    });
  });

  let showFighter2 = $('#species2').change(function (event) {
    $('#makeRobot2 img').attr({
      src: `./images/${$('#species2 option:selected').attr('id')}.gif`,
      alt: `${$('#species2 option:selected').text()}`
    });
  });

  let restart = $('#reload').click(()=>{
    location.reload();
  });

};

module.exports = events;