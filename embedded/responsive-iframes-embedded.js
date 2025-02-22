document.addEventListener("DOMContentLoaded", () => {
  const NAME = "responsive-iframe-demo";

  const inIframe = window.self !== window.top;
  if (!inIframe) return;

  document.documentElement.style.overflowY = "hidden";

  new ResizeObserver(resize).observe(document.body);

  function resize() {
    const height = Math.round(document.body.clientHeight);
    parent.postMessage({ height, name: NAME }, "*");
  }
});
