LD29.play = function(game){
	this.levelNumber = 0;
	this.textDisplayed = false;
	this.holeOpened = false;
	this.endingScene = false;
	this.movable = true;
	this.deadable = true;
};

LD29.play.prototype = {
	create: function(){
		this.stage.backgroundColor = "#5C431F";
		this.nothing = this.add.sprite(0,0,'nothing');
		this.nothing.kill();
		this.bg = this.add.sprite(0,0,'corruptedScreens');
		this.bg.kill();
		this.bg.fixedToCamera = true;
		this.bg.animations.add('glitch',[5,1,4,5,2,5,1,2,4,1,5,4,2,1,4,2,5,1,3],2,true);
		this.explosionSFX = this.add.audio('explosionSFX');
		this.respawnSFX = this.add.audio('respawnSFX');
		this.winSFX = this.add.audio('choir');
		this.winSFX.played = false;
		this.narration1 = this.add.audio('n1');
		this.narration1.played = false;
		this.narration2 = this.add.audio('n2');
		this.narration2.played = false;
		this.narration3 = this.add.audio('n3');
		this.narration3.played = false;
		this.narration4 = this.add.audio('n4');
		this.narration4.played = false;
		this.narration5 = this.add.audio('n5');
		this.narration5.played = false;
		this.narration6 = this.add.audio('n6');
		this.narration6.played = false;
		this.narration7 = this.add.audio('n7');
		this.narration7.played = false;
		this.narration8 = this.add.audio('n8');
		this.narration8.played = false;
		this.narration9 = this.add.audio('n9');
		this.narration9.played = false;
		this.narration10 = this.add.audio('n10');
		this.narration10.played = false;
		this.narration11 = this.add.audio('n11');
		this.narration11.played = false;
		this.narration12 = this.add.audio('n12');
		this.narration12.played = false;
		this.narration13 = this.add.audio('n13');
		this.narration13.played = false;
		this.narration14 = this.add.audio('n14');
		this.narration14.played = false;
		this.narration15 = this.add.audio('n15');
		this.narration15.played = false;
		this.narration16 = this.add.audio('n16');
		this.narration16.played = false;
		this.narration17 = this.add.audio('n17');
		this.narration17.played = false;
		this.narration18 = this.add.audio('n18');
		this.narration18.played = false;
		this.narration19 = this.add.audio('n19');
		this.narration19.played = false;
		this.narration20 = this.add.audio('n20');
		this.narration20.played = false;
		this.narration21 = this.add.audio('n21');
		this.narration21.played = false;
		this.narration22 = this.add.audio('n22');
		this.narration22.played = false;
		this.narration23 = this.add.audio('n23');
		this.narration23.played = false;
		this.corruptionSFX = this.add.audio('firstCorruption');
		this.corruptionSFX.played = false;
		this.corruptionLoop = this.add.audio('endingCorruption');
		this.musicLoop = this.add.audio('musicLoop');
		this.musicLoop.play('',0,1,true);
		this.musicEnd = this.add.audio('musicEnd');
		this.hurryJacob = this.add.audio('hurryJacob');
		this.nEnd = this.add.audio('endingNarration');
		this.nEnd.played = false;
		this.message = this.add.audio('error');
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.gravity.y = 400;
		game.time.deltaCap = 0.02;

		this.player = this.add.sprite(75,75,'player');
		this.player.animations.add('walk',[0,1,2,3,4,5,6,7,8],17,true);
		this.player.animations.add('jump',[10],1,true);
		this.player.anchor.setTo(.5,.5);
		game.camera.follow(this.player);
		game.physics.enable([this.player,this.nothing],Phaser.Physics.ARCADE);
		this.player.body.gravity.y = 1000;
		this.player.body.maxVelocity.y = 569;

		this.moveKeys = game.input.keyboard.createCursorKeys();
		this.specialAbility = game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.switchLevel = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
		this.switchLevel.onDown.add(this.loadLevel,this);
		this.loadLevel();
	},

	update: function(){
		game.physics.arcade.collide(this.player,this.layer);
		game.physics.arcade.collide(this.nothing,this.layer);
		game.physics.arcade.overlap(this.player,this.nothing,this.playMessage,null,this);
		this.player.body.velocity.x = 0;

		if(this.moveKeys.right.isDown && this.movable){
			this.player.scale.x = 1;
			this.player.animations.play('walk');
			if(this.levelNumber == 4){
				if(this.player.x >= 62*50 && !this.holeOpened){
					return;
				}else{
					this.player.body.velocity.x = 300;	
				}
			}else{
				this.player.body.velocity.x = 300;
			}
		}else if(this.moveKeys.left.isDown && this.movable){
			this.player.scale.x = -1;
			this.player.animations.play('walk');
			this.player.body.velocity.x = -300;
		}

		if(this.moveKeys.up.isDown && this.player.body.onFloor() && this.movable){
			this.player.body.velocity.y = -569;
		}
		if(!this.player.body.onFloor() && this.movable){
			this.player.animations.play('jump');
		}

		if(!this.moveKeys.right.isDown && !this.moveKeys.left.isDown && !this.moveKeys.up.isDown && this.player.body.onFloor()){
			this.player.animations.stop();
			this.player.frame = 0;
		}

		if(this.levelNumber == 1){
			if(this.player.x >= 420 && !this.narration1.played){
				this.narration1.play();
				this.narration1.played = true;
			}else if(this.player.x <= 24*50+25 && this.player.y >= 29*50+25 && !this.narration2.played){
				this.narration2.play();
				this.narration2.played = true;
			}else if(this.player.y >= 44*50){
				this.loadLevel();
			}
		}else if(this.levelNumber == 2){
			if(this.player.y > 14*50){
				this.respawnSFX.play();
				this.player.reset(75,0);
			}
			if(this.player.x >= 0 && this.player.y >= 33 && !this.narration3.played){
				this.narration3.play();
				this.narration3.played = true;
			}else if(this.player.x >= 22*50 && !this.narration4.played){
				this.narration4.play();
				this.narration4.played = true;
			}else if(this.player.x >= 43*50+25){
				this.loadLevel();
			}
		}else if(this.levelNumber == 3){
			if(this.player.x >= 16*50 && !this.narration5.played){
				this.narration5.play();
				this.narration5.played = true;
			}else if(this.player.x >= 49*50+40){
				this.loadLevel();
			}
		}else if(this.levelNumber == 4){
			if(this.player.x >= 17*50 && !this.narration6.played){
				this.narration6.play();
				this.narration6.played = true;
			}else if(this.player.x >= 47*50 && !this.narration7.played){
				this.narration7.play();
				this.narration7.played = true;
			}else if(this.player.x >= 50*50 && !this.narration7.isPlaying && !this.textDisplayed){
				this.specialAbilityText = this.add.sprite(62*50-44, 12*50+13, 'pressA');
				this.specialAbilityText.animations.add('juice',[0,1],3,true);
				this.specialAbilityText.animations.play('juice');
				this.textDisplayed = true;
			}else if(this.specialAbility.isDown && !this.narration7.isPlaying && !this.narration8.played){
				this.specialAbilityText.kill();
				this.narration8.play();
				this.narration8.played = true;
			}else if(!this.narration8.isPlaying && this.narration8.played && !this.holeOpened){
				this.openHole();
			}else if(this.holeOpened && !this.explosionSFX.isPlaying && !this.narration9.played){
				this.narration9.play();
				this.narration9.played = true;
			}else if(this.player.y >= 15*50){
				this.loadLevel();
			}
		}else if(this.levelNumber == 5){
			if(this.player.y >= 17*50 && !this.narration10.played){
				this.narration10.play();
				this.narration10.played = true;
			}else if(this.player.x >= 44*50 && !this.narration11.played){
				this.narration11.play();
				this.narration11.played = true;
			}else if(this.player.x <= 69 && !this.narration12.played){
				this.narration12.play();
				this.narration12.played = true;
			}else if(this.player.x <= 0){
				this.loadLevel();
			}
		}else if(this.levelNumber == 6){
			if(this.player.y > 49*50){
				this.respawnSFX.play();
				this.player.reset(54*50,100);
			}
			if(this.player.x <= 24*50 && !this.narration13.played && !this.narration12.isPlaying){
				this.narration13.play();
				this.narration13.played = true;
			}else if(this.player.x <= 8*50 && !this.narration14.played && !this.narration13.isPlaying){
				this.narration14.play();
				this.narration14.played = true;
			}else if(this.player.x <= 10){
				this.loadLevel();
			}
		}else if(this.levelNumber == 7){
			if(this.player.y > 19*50){
				this.respawnSFX.play();
				this.player.reset(50*50,18*50);
			}
			if(this.player.x <= 35*50 && !this.narration15.played){
				this.narration15.play();
				this.narration15.played = true;
			}else if(this.player.x >= 29*50 && this.player.y <= 4*50 && !this.narration16.played){
				this.narration16.play();
				this.narration16.played = true;
			}else if(this.player.x >= 50*50 && this.player.y <= 3*50){
				this.loadLevel();
			}
		}else if(this.levelNumber == 8){
			if(this.player.y > 14*50){
				this.respawnSFX.play();
				this.player.reset(0,100);
			}
			if(this.player.x >= 21*50 && this.player.y <= 6*50 && !this.narration17.played){
				this.narration17.play();
				this.narration17.played = true;
			}else if(this.player.x >= 30*50 && this.player.y <= 5*50 && !this.narration18.played && !this.narration17.isPlaying){
				this.narration18.play();
				this.narration18.played = true;
			}else if(this.player.x >= 39*50){
				this.loadLevel();
			}
		}else if(this.levelNumber == 9){
			if(this.player.x >= 1*50 && !this.narration19.played && !this.narration18.isPlaying){
				this.narration19.play();
				this.narration19.played = true;
			}else if(this.player.x <= 3*50 && this.player.y <= 6*50 && !this.narration20.played && !this.narration19.isPlaying){
				this.narration20.play();
				this.narration20.played = true;
			}else if(this.player.x >= 25*50 && !this.narration21.played){
				this.narration21.play();
				this.narration21.played = true;
			}else if(this.player.x > 25*50){
				this.loadLevel();
			}
		}else if(this.levelNumber == 10){
			if(!this.narration21.isPlaying){
				this.loadLevel();
			}
		}else if(this.levelNumber == 11){
			if(this.player.x >= 10*50 && !this.narration22.played){
				this.narration22.play();
				this.narration22.played = true;
			}
			if(this.narration22.played && !this.narration22.isPlaying && !this.corruptionSFX.played){
				this.corruptionSFX.play();
				this.bg.animations.play('glitch');
				this.fg.animations.play('glitch');
				this.corruptionSFX.played = true;
			}else if(this.corruptionSFX.played && !this.corruptionSFX.isPlaying && !this.narration23.played){
				this.player.reset(33*50+25,13*50);
				this.musicLoop.stop();
				this.narration23.play();
				this.musicEnd.play();
				this.narration23.played = true;
				this.corruptionLoop.play('',0,1,true);
			}else if(this.narration23.played && !this.musicEnd.isPlaying && this.deadable){
				this.respawnSFX.play();
				this.player.reset(33*50+25,13*50);
				this.hurryJacob.play();
				this.musicEnd.play();
			}else if( this.player.x >= 125*50){
				this.deadable = false;
				this.musicEnd.stop();
				this.corruptionLoop.stop();
				this.bg.animations.stop();
				this.bg.kill();
				this.fg.animations.stop();
				this.fg.kill();
				this.movable = false;
				this.endingScene = true;
			}
		}

		if(this.endingScene){
			if(game.physics.arcade.gravity.y == 400){
				game.physics.arcade.gravity.y = 0;
			}
			if(this.player.body.gravity.y == 1000){
				this.player.body.gravity.y = 0;
			}
			if(!this.winSFX.played){
				this.winSFX.play();
				this.winSFX.played = true;
			}
			this.player.x += 0.5;
			this.player.angle += 0.5;
			this.player.alpha -= 0.005;
			if(!this.winSFX.isPlaying && !this.nEnd.played){
				this.nEnd.play();
				this.nEnd.played = true;
			}
			if(this.nEnd.played && !this.nEnd.isPlaying){
				game.state.start('end');
			}
		}
	},

	loadLevel: function(){
		this.levelNumber++;
		console.log(this.levelNumber);
		if(this.layer){
			this.layer.destroy();
		}

		this.map = this.add.tilemap('level'+this.levelNumber);
		this.map.addTilesetImage('tileset','tileset');
		this.map.setCollisionBetween(0,47);
		this.layer = this.map.createLayer('Tile Layer 1');
		this.layer.resizeWorld();
		
		if(this.levelNumber == 1){
			this.player.reset(75,75);
		}else if(this.levelNumber == 2){
			this.player.reset(75,0);
		}else if(this.levelNumber == 3){
			this.player.reset(0,3*50+25);
		}else if(this.levelNumber == 4){
			this.player.reset(0,9*50+25);
			this.block = this.add.sprite(62*50,14*50,'block');
		}else if(this.levelNumber == 5){
			this.player.reset(26*50+25,0);
		}else if(this.levelNumber == 6){
			this.player.reset(54*50+25,100);
			this.nothing.reset(50*50,36*50);
		}else if(this.levelNumber == 7){
			this.player.reset(50*50+25,18*50)
		}else if(this.levelNumber == 8){
			this.player.reset(0,100);
		}else if(this.levelNumber == 9){
			this.player.reset(1*50+25,13*50);
			this.exit = this.add.image(25*50,11*50,'exit');
		}else if(this.levelNumber == 10){
			this.exit.kill();
			this.player.kill();
		}else if(this.levelNumber == 11){
			this.stage.backgroundColor = "#14161C";
			this.player.reset(1*50+25,11*50+25);
			this.playerDead = this.add.sprite(17*50, 13*50+37, 'playerDead');
			this.playerDead.animations.add('deadSwirl',[0,1,2,3,4,5,6,7,8,9,10,11,12,13],17,true);
			this.playerDead.animations.play('deadSwirl');
			this.bg.reset(0,0);
			this.bg.frame = 5;
			this.fg = this.add.sprite(0,0,'corruptedScreensFG');
			this.fg.fixedToCamera = true;
			this.fg.animations.add('glitch',[0,3,0,0,0,0,0,1,0,0,2,0,0,3,0,0,0,0,1,0,0,2,0,0,1,0,0,0,],1,true);
			this.fg.frame = 0;
		}
	},

	exitCheck: function(){
		this.loadLevel();
	},

	openHole: function(){
		this.explosionSFX.play();					
		this.block.kill();
		this.block.destroy();
		this.holeOpened = true;
	},

	playMessage: function(){
		if(!this.message.isPlaying){
			this.message.play();
		}else{
			return;
		}
	}
}