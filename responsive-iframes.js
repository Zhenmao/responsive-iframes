document.addEventListener("DOMContentLoaded", () => {
  const iframes = document.querySelectorAll("iframe[data-responsive]");

  const ro = new ResizeObserver(() => {
    iframes.forEach((iframe) => {
      const embedded = iframe.contentDocument.body;
      iframe.style.height = `${embedded.scrollHeight}px`;
    });
  });

  iframes.forEach((iframe) => {
    iframe.onload = () => {
      const embedded = iframe.contentDocument.body;
      ro.observe(embedded);
    };
  });
});
