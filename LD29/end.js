LD29.end = function(game){};

LD29.end.prototype = {
	create: function(){
		this.stage.backgroundColor = "#000000";
		this.credits = this.add.image(0,123,'credits');
		this.thanks = this.add.audio('thanks');
		this.thanks.played = false;
	},

	update: function(){
		if(this.credits.y > -550){
			this.credits.y -= 0.9;
		}else{
			this.credits.alpha -= 0.009;
		}
		if(this.credits.alpha <= 0 && !this.thanks.played){
			this.thanks.play();
			this.thanks.played = true;
		}else if(this.thanks.played){
			game.state.start('menu');
		}
	}
}