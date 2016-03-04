// global constants
width = 1000;
height = 800;

window.onload = function(){

  var game = new Phaser.Game(width, height, Phaser.CANVAS, document.getElementById("main"));

  game.state.add('Boot', IMD.Boot);
  game.state.add('Preloader', IMD.Preloader)
  game.state.add('GameState', IMD.GameState);
  game.state.start('Boot');
}
