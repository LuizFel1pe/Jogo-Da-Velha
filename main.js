const ticTacToe = {
  board: ["", "", "", "", "", "", "", "", ""],
  isGameOver: false,
  containerElement: null,
  winnerSequences: [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ],
  symbols: {
    options: ["O", "X"],
    currentPlayer: 0,
    changePlayer() {
      this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
    },
  },

  init(container) {
    this.containerElement = container;
  },

  winner(symbol) {
    for (let i = 0; i < this.winnerSequences.length; i++) {
      if (
        this.board[this.winnerSequences[i][0]] === symbol &&
        this.board[this.winnerSequences[i][1]] === symbol &&
        this.board[this.winnerSequences[i][2]] === symbol
      ) {
        console.log('Sequencia vencedora');
        return i;
      }
    }
    return -1;
  },

  gameOver() {
    this.isGameOver = true;
  },

  makePlay(position) {
    if (this.isGameOver) return false;
    if (this.board[position] === "") {
      this.board[position] = this.symbols.options[this.symbols.currentPlayer];
      this.render();

      let sequenceWinner = this.winner(
        this.symbols.options[this.symbols.currentPlayer]
      );

      if (sequenceWinner >= 0) {
        this.gameOver();
      }

      this.symbols.changePlayer();
    } else {
      return false;
    }
  },

  render() {
    let content = "";
    for (let i in this.board) {
      content += `<div onclick="ticTacToe.makePlay(${i})">${this.board[i]}</div>`;
    }

    this.containerElement.innerHTML = content;
  },
};
