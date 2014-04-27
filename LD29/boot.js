var LD29 = {};

LD29.boot = function(game){};

LD29.boot.prototype = {
	preload: function(){
		this.load.image('preloadBar','preloaderBar.png');
		this.load.image('preloadText','preloaderText.png');
	},

	create: function(){
		game.state.start('preload');
	},
}