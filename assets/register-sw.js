// The service worker registration script
// This must run successfully before Ultraviolet is available to use
const BARE_SERVER = "https://bare-hvsxb7l2ca-uc.a.run.app/bare/"

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./uv-sw.js', {
    scope: '/service/'
  }).then(() => {
    console.log("Ghost's Main Scripts Have Been Sucsessfully Registered :3")
  })

  // BareMux.SetTransport("BareMod.BareClient", BARE_SERVER);
}
