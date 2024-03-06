// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aHFy6":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _button = require("./components/button");
var _movesEl = require("./components/moves-el");
var _resultadoEl = require("./components/resultadoEl");
var _scoreboard = require("./components/scoreboard");
var _router = require("./router");
function main() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
}
main();

},{"./components/button":"jqdBz","./router":"4QFWt","./components/moves-el":"a0aEo","./components/resultadoEl":"j9jcg","./components/scoreboard":"jmdrK"}],"jqdBz":[function(require,module,exports) {
class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        style.innerHTML = `
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
    }`;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const buttonEl = document.createElement("button");
        buttonEl.className = "root";
        buttonEl.textContent = this.textContent;
        this.shadow.appendChild(buttonEl);
    }
}
customElements.define("button-el", Button);

},{}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _home = require("./pages/home/home");
var _howToPlay = require("./pages/howToPlay/howToPlay");
var _result = require("./pages/result/result");
var _selectMove = require("./pages/selectMove/selectMove");
var _showedMoves = require("./pages/showed-moves/showed-moves");
const BASE_PATH = "/desafio-5";
function isGithubPages() {
    return location.host.includes("gonzacunet.github.io");
}
const routes = [
    {
        path: /\/home/,
        component: (0, _home.initHome)
    },
    {
        path: /\/init/,
        component: (0, _howToPlay.inithowToPlay)
    },
    {
        path: /\/selectMove/,
        component: (0, _selectMove.initSelectMove)
    },
    {
        path: /\/showed-moves/,
        component: (0, _showedMoves.initShowedMoves)
    },
    {
        path: /\/result/,
        component: (0, _result.initResult)
    }
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        //    console.log("el handle Route recibio una nueva ruta y es", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/" || location.pathname == "/desafio-5/") goTo("/home");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/home/home":"gkmfh","./pages/howToPlay/howToPlay":"fmp5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/selectMove/selectMove":"ldR8K","./pages/showed-moves/showed-moves":"9AFah","./pages/result/result":"hMmhd"}],"gkmfh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome);
function initHome(params) {
    const div = document.createElement("div");
    div.className = "home-container";
    div.innerHTML = `<div>
    <h1 class="text-format">Piedra</h1>
    <h1 class="text-format">Papel</h1>
    <h1 class="text-format">Tijera</h1></div>

    <div class="button-container"><button-el>EMPEZAR</button-el></div>
    <div class="hands-container">
    <moves-el type="hand-img" hand="piedra"></moves-el>
    <moves-el type="hand-img" hand="papel"></moves-el>
    <moves-el type="hand-img" hand="tijera"></moves-el></div> 
    </div>`;
    const startButton = div.querySelector("button-el");
    startButton?.addEventListener("click", ()=>{
        params.goTo("/init");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fmp5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inithowToPlay", ()=>inithowToPlay);
function inithowToPlay(params) {
    const div = document.createElement("div");
    div.className = "howToPlay-container";
    div.innerHTML = `<div>
      <h1 class="howToPlay-text">Presion\xe1 jugar<br>
      y eleg\xed: piedra,<br> papel o tijera<br> antes de que <br>pasen los 3<br> segundos.</h1></div>
  
      </div><button-el>\xa1JUGAR!</button-el></div>
      <div class="hands-container">
      <moves-el type="hand-img" hand="piedra"></moves-el>
      <moves-el type="hand-img" hand="papel"></moves-el>
      <moves-el type="hand-img" hand="tijera"></moves-el></div> 
      </div>`;
    const startButton = div.querySelector("button-el");
    startButton?.addEventListener("click", ()=>{
        params.goTo("/selectMove");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldR8K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSelectMove", ()=>initSelectMove);
var _state = require("../../state");
function initSelectMove(params) {
    const div = document.createElement("div");
    div.className = "selectMove-container";
    let tiempoRestante = 6;
    let atributoPiedra = "hand-img";
    let atributoPapel = "hand-img";
    let atributoTijera = "hand-img";
    (0, _state.state).setMove("piedra");
    const intervalo = setInterval(()=>{
        tiempoRestante--;
        div.innerHTML = `<div class="circle">
      <h1>${tiempoRestante}</h1></div>
      <div class="hands-container">
        <div><moves-el type="${atributoPiedra}" class="piedra" hand="piedra"></moves-el></div>
        <div><moves-el type="${atributoPapel}" class="papel" hand="papel"></moves-el></div>
        <div><moves-el type="${atributoTijera}" class="tijera" hand="tijera"></moves-el></div>
      </div>

    `;
        const piedraMove = div.querySelector(".piedra");
        const papelMove = div.querySelector(".papel");
        const tijeraMove = div.querySelector(".tijera");
        piedraMove?.addEventListener("click", ()=>{
            atributoPiedra = "hand-imagenGrande";
            atributoPapel = "unpicked-hand";
            atributoTijera = "unpicked-hand";
            (0, _state.state).setMove(piedraMove.getAttribute("hand"));
        });
        papelMove?.addEventListener("click", ()=>{
            atributoPapel = "hand-imagenGrande";
            atributoPiedra = "unpicked-hand";
            atributoTijera = "unpicked-hand";
            (0, _state.state).setMove(papelMove.getAttribute("hand"));
        });
        tijeraMove?.addEventListener("click", ()=>{
            atributoTijera = "hand-imagenGrande";
            atributoPapel = "unpicked-hand";
            atributoPiedra = "unpicked-hand";
            tijeraMove.getAttribute("hand");
            (0, _state.state).setMove(tijeraMove.getAttribute("hand"));
        });
        if (tiempoRestante === 0) {
            (0, _state.state).setComputerMove();
            clearInterval(intervalo);
            params.goTo("/showed-moves");
        }
    }, 1000);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    play: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: {
            scoreHuman: 0,
            scoreComputer: 0
        },
        listeners: []
    },
    setComputerMove () {
        const randomMove = Math.floor(Math.random() * 3) + 1;
        let computerPlay = {
            1: "piedra",
            2: "papel",
            3: "tijera"
        }[randomMove];
        const currentState = this.getState();
        currentState.currentGame.computerPlay = computerPlay;
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
    },
    pushToHistory (play) {
        const currentState = this.getState();
        currentState.history(play);
    },
    whoWins (myPlay, computerPlay) {
        const currentState = this.getState();
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const humanWin = [
            ganeConPapel,
            ganeConPiedra,
            ganeConTijera
        ].includes(true);
        const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
        const perdiConPapel = myPlay == "papel" && computerPlay == "tijera";
        const perdiConTijera = myPlay == "tijera" && computerPlay == "piedra";
        const humanLoss = [
            perdiConPapel,
            perdiConPiedra,
            perdiConTijera
        ].includes(true);
        if (humanWin == true) {
            currentState.history.scoreHuman++;
            return "ganaste";
        }
        if (humanLoss == true) {
            currentState.history.scoreComputer++;
            return "perdiste";
        } else return "empate";
    },
    getState () {
        return this.play;
    },
    setState (newState) {
        this.play = newState;
        for (const callback of this.listeners)callback();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9AFah":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initShowedMoves", ()=>initShowedMoves);
var _state = require("../../state");
function initShowedMoves(params) {
    let jugadaCompu = (0, _state.state).getState().currentGame.computerPlay;
    let miJugada = (0, _state.state).getState().currentGame.myPlay;
    const div = document.createElement("div");
    div.className = "showedMoves-container";
    div.innerHTML = `<moves-el type="hand-imagenGrande" class="computer-move" hand="${jugadaCompu}"></moves-el>
  <moves-el type="hand-imagenGrande" class="human-move" hand="${miJugada}"></moves-el>
   `;
    // timer
    let tiempoRestante = 2;
    const intervalo = setInterval(()=>{
        tiempoRestante--;
        if (tiempoRestante === 0) {
            clearInterval(intervalo);
            params.goTo("/result");
        }
    }, 1000);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"hMmhd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult);
var _state = require("../../state");
function initResult(params) {
    const div = document.createElement("div");
    let jugadaCompu = (0, _state.state).getState().currentGame.computerPlay;
    let miJugada = (0, _state.state).getState().currentGame.myPlay;
    const ganador = (0, _state.state).whoWins(miJugada, jugadaCompu);
    let resultado;
    if (ganador == "ganaste") resultado = "GANASTE";
    if (ganador == "empate") resultado = "EMPATE";
    if (ganador == "perdiste") resultado = "PERDISTE";
    div.className = "result-container";
    div.innerHTML = `
    <div class="${resultado}"
    <div><resultado-el stars="${resultado}"></resultado-el>
    <div><score-el></score-el></div>
    <div><button-el>VOLVER A JUGAR</button-el></div></div>
     
 `;
    const startButton = div.querySelector("button-el");
    startButton?.addEventListener("click", ()=>{
        params.goTo("/init");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"a0aEo":[function(require,module,exports) {
const hands = {
    tijera: require("eaf6916d2ef46b16"),
    piedra: require("9f4b08576a32d2"),
    papel: require("2c1bbfcf97709c38")
};
class HandComponent extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const style = document.createElement("style");
        style.textContent = `
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
		`;
        this.render();
        this.shadow.appendChild(style);
    }
    render() {
        const typeAttr = this.getAttribute("type");
        const handAttr = this.getAttribute("hand");
        this.shadow.innerHTML = `
    	<img class="${typeAttr}" src="${hands[handAttr]}">
    	`;
    }
}
customElements.define("moves-el", HandComponent);

},{"eaf6916d2ef46b16":"2Vyja","9f4b08576a32d2":"3d8Qm","2c1bbfcf97709c38":"gqnHJ"}],"2Vyja":[function(require,module,exports) {
module.exports = require("40058f467bb2f24c").getBundleURL("7UhFu") + "tijera.c3d0a5c1.png" + "?" + Date.now();

},{"40058f467bb2f24c":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3d8Qm":[function(require,module,exports) {
module.exports = require("e056bb26760268c4").getBundleURL("7UhFu") + "piedra.b03b08ab.png" + "?" + Date.now();

},{"e056bb26760268c4":"lgJ39"}],"gqnHJ":[function(require,module,exports) {
module.exports = require("7a0c7780572ec67b").getBundleURL("7UhFu") + "papel.41ebcf7a.png" + "?" + Date.now();

},{"7a0c7780572ec67b":"lgJ39"}],"j9jcg":[function(require,module,exports) {
const stars = {
    GANASTE: require("83cc1d0f2e8c2b83"),
    PERDISTE: require("51688d30847ca275"),
    EMPATE: require("e48c94fe53c39ca2")
};
class Stars extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        const div = document.createElement("div");
        this.shadow.appendChild(div);
        this.render();
    }
    render() {
        const starsAttr = this.getAttribute("stars");
        const style = document.createElement("style");
        style.textContent = `.image-container {
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
        
      }`;
        this.shadow.innerHTML = `<div class="image-container">
    <img src="${stars[starsAttr]}" >
    <div class="text-overlay">${starsAttr}</div>
  </div>`;
        this.shadow.appendChild(style);
    }
}
customElements.define("resultado-el", Stars);

},{"83cc1d0f2e8c2b83":"L0KJ1","51688d30847ca275":"4MePp","e48c94fe53c39ca2":"3ZhuM"}],"L0KJ1":[function(require,module,exports) {
module.exports = require("54618143f03873be").getBundleURL("7UhFu") + "ganaste.dae38425.png" + "?" + Date.now();

},{"54618143f03873be":"lgJ39"}],"4MePp":[function(require,module,exports) {
module.exports = require("b900432d8850119e").getBundleURL("7UhFu") + "perdiste.836282cb.png" + "?" + Date.now();

},{"b900432d8850119e":"lgJ39"}],"3ZhuM":[function(require,module,exports) {
module.exports = require("3fcb223d8d3e9772").getBundleURL("7UhFu") + "empate.b810a74e.png" + "?" + Date.now();

},{"3fcb223d8d3e9772":"lgJ39"}],"jmdrK":[function(require,module,exports) {
var _state = require("../state");
class ScoreEl extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerHTML = `
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
      `;
        this.shadow.appendChild(style);
        this.render();
    }
    render() {
        const currentState = (0, _state.state).getState();
        // // const history = state.getHistory();
        const sh = currentState.history.scoreHuman;
        const sc = currentState.history.scoreComputer;
        const container = document.createElement("div");
        container.className = "root";
        container.innerHTML = `
          <h1 class="title">SCORE: </h2>
          <p class="player-uno">Vos: ${sh}</p>
          <p class="player-dos">Computer: ${sc}</p>
      `;
        this.shadow.appendChild(container);
    }
}
customElements.define("score-el", ScoreEl);

},{"../state":"1Yeju"}]},["aHFy6","h7u1C"], "h7u1C", "parcelRequire8840")

//# sourceMappingURL=index.b71e74eb.js.map
