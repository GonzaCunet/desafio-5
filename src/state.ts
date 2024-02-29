export type jugada = "piedra" | "papel" | "tijera";
type game = {
  computerPlay: jugada;
  myPlay: jugada;
};
const state = {
  play: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
      history: [{}],
      listeners: [],
    },
  },

  setMove(move: jugada) {
    const currentState = this.getState();
    console.log(currentState);
    currentState.currentGame.myPlay = move;
  },
  pushToHistory(play: game) {
    const currentState = this.getState();
    currentState.history(play);
  },
  whoWins(myPlay: jugada, computerPlay: jugada) {
    let humano = 0;
    let computadora = 0;
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
    const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
    const humanWin = [ganeConPapel, ganeConPiedra, ganeConTijera].includes(
      true
    );

    const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
    const perdiConPapel = myPlay == "papel" && computerPlay == "tijera";
    const perdiConTijera = myPlay == "tijera" && computerPlay == "piedra";
    const humanLoss = [ganeConPapel, ganeConPiedra, ganeConTijera].includes(
      true
    );

    // const empateconPiedra = myPlay == "piedra" && computerPlay == "piedra";
    // const empateConPapel = myPlay == "papel" && computerPlay == "papel";
    // const empateConTijera = myPlay == "tijera" && computerPlay == "tijera";
    if (humanWin == true) {
      humano++;
    }
    if (humanLoss == true) {
      computadora++;
    } else {
      return "empate";
    }
  },

  getState() {
    return this.play;
  },
  setState(newState) {
    this.play = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
