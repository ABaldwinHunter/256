var Game = function() {
  this.gameOver = false;
  this.board = this.makeBoard(this.generateStartBoard());
  this.cells = $('.square').toArray();
  this.respawnIsOn = true;
};



Game.prototype.moveToRight = function(){
  var self = this;
  var board = this.board;
  var old_board = board.toString();
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    var zeroless = row.filter(function(i) { return i !== 0} ); // creates row without 0s
    for (var j = zeroless.length - 1; j >= 0; j--) {
     if (zeroless[j] === zeroless[(j-1)]) {
        zeroless[j] = zeroless[j] * 2;
        zeroless.splice(j-1, 1);
      } else {
        zeroless[j] = zeroless[j]
      } // (no change)
    }
    var counter = row.length - zeroless.length;
    for (var k = 0; k < counter; k++) {
      zeroless.unshift(0);
    }
    self.board[i] = zeroless;
  }
  old_board === self.board.toString() ? self.respawnIsOn = false : self.respawnIsOn = true;
};
