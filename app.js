// Create new app
Stage(function(stage) {

  //Create view box
  stage.viewbox(100, 100);
  var arrows = Stage.string('arrows');
   var arrUp = arrows.value('up').appendTo(stage).pin('handle', 0.5);
});

Stage({
  name: "assets",
  image: { src: 'Artboard@1x.png' },
  textures: {
    arrows:{
      'right' : { x : 2,  y : 15, width: 111, height: 138},
      'up' : { x : 114, y : 3, width : 111, height : 150},
      'down' : { x: 232, y : 3, width: 111, height : 150},
      'left' : { x : 348, y: 15, width: 111, height: 150}
    }
  }
});
