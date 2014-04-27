LD29.menu = function(game){};

LD29.menu.prototype = {

	create: function(){
		this.add.image(0,0,'menu');
		this.spaceBttn = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	update: function(){
		this.spaceBttn.onDown.add(this.start);
	},

	start: function(){
		game.state.start('play');
	}
}