var e=globalThis,t={},n={},a=e.parcelRequire8840;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire8840=a);var r=a.register;r("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,a=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)a.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("3vPuK",function(e,t){e.exports=new URL("tijera.a939272c.png",import.meta.url).toString()}),r("8xh37",function(e,t){e.exports=new URL("piedra.19124f4c.png",import.meta.url).toString()}),r("5rmYF",function(e,t){e.exports=new URL("papel.f0e8e201.png",import.meta.url).toString()}),r("cxgSU",function(e,t){e.exports=new URL("ganaste.eccadd26.png",import.meta.url).toString()}),r("hazF2",function(e,t){e.exports=new URL("perdiste.8b710b60.png",import.meta.url).toString()}),r("jyMfX",function(e,t){e.exports=new URL("empate.acc190a0.png",import.meta.url).toString()}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["1LzKV","index.a3682a68.js","dMsvR","tijera.a939272c.png","5HnlP","piedra.19124f4c.png","K6mdl","papel.f0e8e201.png","iP5a9","ganaste.eccadd26.png","6JaGb","perdiste.8b710b60.png","3seeO","empate.acc190a0.png"]'));class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.innerHTML=`
    .root{
      width: 330px;
      height: 80px;
      border-style: solid; 
      border-radius: 10px;          
      border-width: 10px;
      background-color:#006CFC;
      border-color: #001997;
      font-size: 45px;
      font-family: 'Odibee Sans', sans-serif;
      color: white;
    }`,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("button");e.className="root",e.textContent=this.textContent,this.shadow.appendChild(e)}}customElements.define("button-el",o);const i={tijera:a("3vPuK"),piedra:a("8xh37"),papel:a("5rmYF")};class s extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("style");e.textContent=`
		.hand-img {

            
            width: 125px;
            height: 225px;
            
        }
        .hand-imagenGrande{
          width:100px;
          height:200px;
        }

    .unpicked-hand{
      opacity:50%;
    }

		@media (max-width: 960px) {
			.hand-img {
        width: 70px;
        height: 125px;

                
        .hand-imagenGrande{
          width:200px;
          height:300px;
          
        }
			}
		}
		`,this.render(),this.shadow.appendChild(e)}render(){let e=this.getAttribute("type"),t=this.getAttribute("hand");this.shadow.innerHTML=`
    	<img class="${e}" src="${i[t]}">
    	`}}customElements.define("moves-el",s);const d={GANASTE:a("cxgSU"),PERDISTE:a("hazF2"),EMPATE:a("jyMfX")};class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=document.createElement("div");this.shadow.appendChild(e),this.render()}render(){let e=this.getAttribute("stars"),t=document.createElement("style");t.textContent=`.image-container {
        position: relative;
        display: inline-block;
      }
      .text-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 50px;
        font-family: 'Odibee Sans', sans-serif;
        -webkit-text-stroke: 2px black;
        font-weight: 400
        text-align:center;
        
      }`,this.shadow.innerHTML=`<div class="image-container">
    <img src="${d[e]}" >
    <div class="text-overlay">${e}</div>
  </div>`,this.shadow.appendChild(t)}}customElements.define("resultado-el",l);const c={play:{currentGame:{computerPlay:"",myPlay:""},history:{scoreHuman:0,scoreComputer:0},listeners:[]},setComputerMove(){this.getState().currentGame.computerPlay=({1:"piedra",2:"papel",3:"tijera"})[Math.floor(3*Math.random())+1]},setMove(e){this.getState().currentGame.myPlay=e},pushToHistory(e){this.getState().history(e)},whoWins(e,t){let n=this.getState(),a=["papel"==e&&"piedra"==t,"piedra"==e&&"tijera"==t,"tijera"==e&&"papel"==t].includes(!0),r=["papel"==e&&"tijera"==t,"piedra"==e&&"papel"==t,"tijera"==e&&"piedra"==t].includes(!0);return!0==a?(n.history.scoreHuman++,"ganaste"):!0==r?(n.history.scoreComputer++,"perdiste"):"empate"},getState(){return this.play},setState(e){for(let t of(this.play=e,this.listeners))t()},subscribe(e){this.listeners.push(e)}};class p extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
          .root{
              width: 259px;
              height: 217px;
              border: solid #000000 10px;
              border-radius: 10px;
              background-color: #FFFFFF;
              font-family: 'Odibee Sans', sans-serif;
          }
          .title{
              font-size: 55px;
              margin: 10px; 
              text-align:center;
          }
          p{
              font-size: 45px;
              margin: 0;
              text-align:center;
          }
      `,this.shadow.appendChild(e),this.render()}render(){let e=c.getState(),t=e.history.scoreHuman,n=e.history.scoreComputer,a=document.createElement("div");a.className="root",a.innerHTML=`
          <h1 class="title">SCORE: </h2>
          <p class="player-uno">Vos: ${t}</p>
          <p class="player-dos">Computer: ${n}</p>
      `,this.shadow.appendChild(a)}}customElements.define("score-el",p);const h="/desafio-5";function m(){return location.host.includes("gonzacunet.github.io")}const u=[{path:/\/home/,component:function(e){let t=document.createElement("div");t.className="home-container",t.innerHTML=`<div>
    <h1 class="text-format">Piedra</h1>
    <h1 class="text-format">Papel</h1>
    <h1 class="text-format">Tijera</h1></div>

    <div class="button-container"><button-el>EMPEZAR</button-el></div>
    <div class="hands-container">
    <moves-el type="hand-img" hand="piedra"></moves-el>
    <moves-el type="hand-img" hand="papel"></moves-el>
    <moves-el type="hand-img" hand="tijera"></moves-el></div> 
    </div>`;let n=t.querySelector("button-el");return n?.addEventListener("click",()=>{e.goTo("/init")}),t}},{path:/\/init/,component:function(e){let t=document.createElement("div");t.className="howToPlay-container",t.innerHTML=`<div>
      <h1 class="howToPlay-text">Presion\xe1 jugar<br>
      y eleg\xed: piedra,<br> papel o tijera<br> antes de que <br>pasen los 3<br> segundos.</h1></div>
  
      </div><button-el>\xa1JUGAR!</button-el></div>
      <div class="hands-container">
      <moves-el type="hand-img" hand="piedra"></moves-el>
      <moves-el type="hand-img" hand="papel"></moves-el>
      <moves-el type="hand-img" hand="tijera"></moves-el></div> 
      </div>`;let n=t.querySelector("button-el");return n?.addEventListener("click",()=>{e.goTo("/selectMove")}),t}},{path:/\/selectMove/,component:function(e){let t=document.createElement("div");t.className="selectMove-container";let n=6,a="hand-img",r="hand-img",o="hand-img";c.setMove("piedra");let i=setInterval(()=>{n--,t.innerHTML=`<div class="circle">
      <h1>${n}</h1></div>
      <div class="hands-container">
        <div><moves-el type="${a}" class="piedra" hand="piedra"></moves-el></div>
        <div><moves-el type="${r}" class="papel" hand="papel"></moves-el></div>
        <div><moves-el type="${o}" class="tijera" hand="tijera"></moves-el></div>
      </div>

    `;let s=t.querySelector(".piedra"),d=t.querySelector(".papel"),l=t.querySelector(".tijera");s?.addEventListener("click",()=>{a="hand-imagenGrande",r="unpicked-hand",o="unpicked-hand",c.setMove(s.getAttribute("hand"))}),d?.addEventListener("click",()=>{r="hand-imagenGrande",a="unpicked-hand",o="unpicked-hand",c.setMove(d.getAttribute("hand"))}),l?.addEventListener("click",()=>{o="hand-imagenGrande",r="unpicked-hand",a="unpicked-hand",l.getAttribute("hand"),c.setMove(l.getAttribute("hand"))}),0===n&&(c.setComputerMove(),clearInterval(i),e.goTo("/showed-moves"))},1e3);return t}},{path:/\/showed-moves/,component:function(e){let t=c.getState().currentGame.computerPlay,n=c.getState().currentGame.myPlay,a=document.createElement("div");a.className="showedMoves-container",a.innerHTML=`<moves-el type="hand-imagenGrande" class="computer-move" hand="${t}"></moves-el>
  <moves-el type="hand-imagenGrande" class="human-move" hand="${n}"></moves-el>
   `;let r=2,o=setInterval(()=>{0==--r&&(clearInterval(o),e.goTo("/result"))},1e3);return a}},{path:/\/result/,component:function(e){let t;let n=document.createElement("div"),a=c.getState().currentGame.computerPlay,r=c.getState().currentGame.myPlay,o=c.whoWins(r,a);"ganaste"==o&&(t="GANASTE"),"empate"==o&&(t="EMPATE"),"perdiste"==o&&(t="PERDISTE"),n.className="result-container",n.innerHTML=`
    <div class="${t}"
    <div><resultado-el stars="${t}"></resultado-el>
    <div><score-el></score-el></div>
    <div><button-el>VOLVER A JUGAR</button-el></div></div>
     
 `;let i=n.querySelector("button-el");return i?.addEventListener("click",()=>{e.goTo("/init")}),n}}];!function(e){function t(e){let t=m()?h+e:e;history.pushState({},"",t),n(t)}function n(n){let a=m()?n.replace(h,""):n;for(let n of u)if(n.path.test(a)){let a=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}"/"==location.pathname||"/desafio-5/"==location.pathname?t("/home"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.a3682a68.js.map
