"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

const shouldBlock = (req) => req.headers['X-Bare-Url'].includes('porn');
// Thanks to Russell2259 for the code :D
server.on('request', (req, res) => {
    if (shouldBlock(req)) return res.end('imagine searching up porn. get blocked bozo');

    if (bareServer.shouldRoute(req)) bareServer.routeRequest(req, res);
    else app(req, res); // Assuming you're using the generic bare + express use case
});

server.on('upgrade', (req, socket, head) => {
    if (shouldBlock(req)) return socket.end();

    if (bareServer.shouldRoute(req)) bareServer.routeUpgrade(req, socket, head);
    else socket.end();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
