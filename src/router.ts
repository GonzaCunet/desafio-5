import { initHome } from "./pages/home/home";
import { inithowToPlay } from "./pages/howToPlay/howToPlay";
import { initSelectMove } from "./pages/selectMove/selectMove";
import { initShowedMoves } from "./pages/showed-moves/showed-moves";

const BASE_PATH = "/desafio-5";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/home/,
    component: initHome,
  },
  {
    path: /\/init/,
    component: inithowToPlay,
  },
  {
    path: /\/selectMove/,
    component: initSelectMove,
  },
  {
    path: /\/showed-moves/,
    component: initShowedMoves,
  },
];

export function initRouter(container: any) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    if (isGithubPages()) {
      const newRoute = route.replace(BASE_PATH, "/");

      for (const r of routes) {
        if (r.path.test(newRoute)) {
          const el = r.component({ goTo: goTo });
          if (container.firstChild) {
            container.firstChild.remove();
          }
          container.appendChild(el);
        }
      }
    } else {
      for (const r of routes) {
        if (r.path.test(route)) {
          const el = r.component({ goTo: goTo });

          if (container.firstChild) {
            container.firstChild.remove();
          }
          container.appendChild(el);
        }
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }
}
