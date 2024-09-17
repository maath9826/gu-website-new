(function () {
  function updateScrollbarWidth() {
    requestAnimationFrame(function () {
      document.documentElement.style.setProperty(
        "--screen-width",
        window.document.documentElement.clientWidth + "px"
      );
    });
  }

  if (typeof window !== "undefined") {
    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);
  }
})();
