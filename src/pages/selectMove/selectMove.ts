import { jugada, state } from "../../state";

export function initSelectMove(params) {
  const div = document.createElement("div");
  div.className = "selectMove-container";
  let tiempoRestante = 2;
  let atributoPiedra = "hand-img";
  let atributoPapel = "hand-img";
  let atributoTijera = "hand-img";

  const intervalo = setInterval(() => {
    tiempoRestante--;
    div.innerHTML = `<div class="circle">
      <h1>${tiempoRestante}</h1></div>
      <div class="hands-container">
        <div><moves-el type="${atributoPiedra}" class="piedra" hand="piedra"></moves-el></div>
        <div><moves-el type="${atributoPapel}" class="papel" hand="papel"></moves-el></div>
        <div><moves-el type="${atributoTijera}" class="tijera" hand="tijera"></moves-el></div>
      </div>

    `;
    console.log(tiempoRestante);
    const piedraMove = div.querySelector(".piedra");
    const papelMove = div.querySelector(".papel");
    const tijeraMove = div.querySelector(".tijera");

    piedraMove?.addEventListener("click", () => {
      atributoPiedra = "hand-imagenGrande";
      atributoPapel = "unpicked-hand";
      atributoTijera = "unpicked-hand";
    });
    papelMove?.addEventListener("click", () => {
      atributoPapel = "hand-imagenGrande";
      atributoPiedra = "unpicked-hand";
      atributoTijera = "unpicked-hand";
    });

    tijeraMove?.addEventListener("click", () => {
      atributoTijera = "hand-imagenGrande";
      atributoPapel = "unpicked-hand";
      atributoPiedra = "unpicked-hand";
    });

    if (tiempoRestante === 0) {
      div.querySelectorAll(".hands-container").forEach((e) => {
        e.addEventListener("click", (selected: any) => {
          const selectedMove = selected.target.getAttribute("hand") as jugada;
          state.setMove(selectedMove);
          params.goTo("/showed-moves");
        });
      });
      clearInterval(intervalo);
    }
  }, 1000);

  return div;
}
