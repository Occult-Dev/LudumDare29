game = new Phaser.Game(900,550,'gameDIV',Phaser.AUTO);

game.state.add('boot',LD29.boot);
game.state.add('preload',LD29.preload);
game.state.add('menu',LD29.menu);
game.state.add('play',LD29.play);
game.state.add('end',LD29.end);

game.state.start('boot');