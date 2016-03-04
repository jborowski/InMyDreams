var InMyDreams = {};

InMyDreams.Boot = function (game) {};

InMyDreams.Boot.prototype = {
  preload: function () {
    // TODO: load up assets for preloader
  },

  create: function () {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    if (this.game.device.desktop) {
      this.scale.pageAlignHorizontally = true;
    } else {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.setScreenSize(true);
    }
    this.state.start('Preloader');
  }
};
