LD29.preload = function(game){
	this.ready = false;
};

LD29.preload.prototype = {
	preload: function(){
		this.stage.backgroundColor = "#5293DE";
		this.add.image(game.world.width/2-88,game.world.height/2-100,'preloadText');
		this.preloadBar = this.add.sprite(0,game.world.height/2-50,'preloadBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('tileset','tileset.png');
		this.load.tilemap('level1','level1.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level2','level2.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level3','level3.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level4','level4.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level5','level5.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level6','level6.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level7','level7.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level8','level8.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level9','level9.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level10','level10.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level11','level11.json',null,Phaser.Tilemap.TILED_JSON);
		this.load.spritesheet('player','player.png',24,50);
		this.load.image('exit','exit.png');
		this.load.audio('n1','thisIsJacob.ogg');
		this.load.audio('n2','jacobCanFall.ogg');
		this.load.audio('n3','jacobCanJump1.ogg');
		this.load.audio('n4','jacobCanJump2.ogg');
		this.load.audio('n5','basicHumanBeing.ogg');
		this.load.audio('n6','struckHim.ogg');
		this.load.audio('n7','canHeFly.ogg');
		this.load.audio('n8','noSuchThing.ogg');
		this.load.audio('n9','onceAgainHeMustFall.ogg');
		this.load.audio('n10','n10.ogg');
		this.load.audio('n11','n11.ogg');
		this.load.audio('n12','n12.ogg');
		this.load.audio('n13','n13.ogg');
		this.load.audio('n14','n14.ogg');
		this.load.audio('n15','n15.ogg');
		this.load.audio('n16','n16.ogg');
		this.load.audio('n17','n17.ogg');
		this.load.audio('n18','n18.ogg');
		this.load.audio('n19','n19.ogg');
		this.load.audio('n20','n20.ogg');
		this.load.audio('n21','n21.ogg');
		this.load.audio('n22','n22.ogg');
		this.load.audio('n23','n23.ogg');
		this.load.audio('choir','ah.ogg');
		this.load.audio('error','genaricSound.ogg');
		this.load.audio('thanks','thanks.ogg');
		this.load.audio('musicLoop','musicSoft.ogg');
		this.load.audio('musicEnd','musicFast.ogg');
		this.load.audio('hurryJacob','hurryJacob.ogg');
		this.load.audio('firstCorruption','corruption.ogg');
		this.load.audio('endingCorruption','endingCorruption.ogg');
		this.load.audio('endingNarration','madeItThrough.ogg');
		this.load.spritesheet('pressA','itsALie.png',323,25);
		this.load.image('block','block.png');
		this.load.audio('explosionSFX','explosion.ogg');
		this.load.audio('respawnSFX','respawn.ogg');
		this.load.spritesheet('playerDead','playerDead.png',100,13);
		this.load.spritesheet('corruptedScreens','corruptedScreens.png',900,550);
		this.load.spritesheet('corruptedScreensFG','corruptedScreensFG.png',900,550);
		this.load.image('menu','menu.png');
		this.load.image('credits','credits.png');
		this.load.image('nothing','nothing.png');
	},

	update: function(){
		// if (this.cache.isSoundDecoded('musicLoop') && this.ready == false)
		// {
		// 	this.ready = true;
		// 	game.state.start('menu');
		// }
		game.state.start('menu');
	}
}