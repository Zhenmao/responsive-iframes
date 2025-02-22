document.addEventListener("DOMContentLoaded", () => {
  const inIframe = window.self !== window.top;
  if (!inIframe) return;

  document.documentElement.style.overflowY = "hidden";

  new ResizeObserver(resize).observe(document.body);

  function resize() {
    const height = Math.round(document.body.clientHeight);
    const pathname = window.location.pathname;
    console.log(pathname);
    parent.postMessage({ height, pathname }, "*");
  }
});
