function Battleship(player1, player2) {
  this.Board = function(player){
      var board = {
        1:[],
        2:[],
        3:[],
        4:[],
        5:[]
      }
      for(var i = 0; i < player.length; i++){
         // -1 and 0 are not defined, so they will not be set
         if(board[player[i]]){
           board[i + 1].push(player[i], player[i] + 1, player[i] + 2);
         }
      }
      return board;
  }

  this.player1 = new this.Board(player1);
  this.player2 = new this.Board(player2);

  this.fire = function(board, row, column) {
    // map letters to row numbers
    switch(row){
     case "a":
     row = 1;
     break;
     case "b":
     row = 2;
     break;
     case "c":
     row = 3;
     break;
     case "d":
     row = 4;
     break;
     case "e":
     row = 5;
     break;
     default:
     row = 0;
     break;
    }

    if(board[column].indexOf(row) !== -1){
        // HIT!
        var index = board[column].indexOf(row);
        console.log("HIT!");
        board[column].splice(index, 1);
        // check for win
        // all hit
    } else {
        // MISS!
        console.log("MISS!");
    }
  }
}
var player1 = [3,-1,3,-1,1];
var player2 = [2,-1,1,-1,1];
var battleship = new Battleship(player1, player2);
// pass row, column
battleship.fire(battleship.player1,"b",5);
