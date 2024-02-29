import { state } from "../../state";

export function initShowedMoves(params) {
  const div = document.createElement("div");
  div.className = "showedMoves-container";
  div.innerHTML = `<moves-el type="hand-imagenGrande" class="computer-move" hand="piedra"></moves-el>
        
       <moves-el type="hand-imagenGrande" class="human-move" hand="papel"></moves-el>
        `;
  console.log(params);
  console.log(state.getState());
  console.log(state.getState().currentGame.myPlay);

  return div;
}
