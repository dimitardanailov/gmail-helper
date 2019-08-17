window.onload = function() {
  WebComponents.waitFor(async () => {
    if (!window.fetch) await require("whatwg-fetch/fetch");

    // return require('./components/GmailHelper')
    return require("./components/GmailHelperPage");
  });
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
