InMyDreams.Preloader = function (game) {
  // TODO: load assets
  this.preloadBar = null;
  this.ready = false;
};

InMyDreams.Preloader.prototype = {

  preload: function () {
  },

  create: function () {
    this.preloadBar.cropEnabled = false;
  },

  update: function () {
      this.state.start('testGameState');
  }
};
