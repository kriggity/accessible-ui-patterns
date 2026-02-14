"use strict";

(function () {
  // Define vars
  const tabs = document.querySelectorAll(".tab");
  const tabpanel = document.querySelectorAll(".tabpanel");

  // For each tab button
  tabs.forEach((e, i) => {
    // Click event
    e.onclick = () => {
      tabs.forEach((f) => {
        // Set all tab buttons' aria-selected:false
        f.setAttribute("aria-selected", "false");

        // Set all tab buttons' tabindex:-1
        f.setAttribute("tabindex", "-1");
      });
      // Set this tab button's aria-selected:true
      e.setAttribute("aria-selected", "true");
      // Remove this tab button's tabindex
      e.removeAttribute("tabindex");

      // Set all tabpanels' to hidden
      tabpanel.forEach((panel) => {
        panel.removeAttribute("visible");
        panel.setAttribute("hidden", "");
      });
      // Set the corresponding tabpanel visible
      tabpanel[i].removeAttribute("hidden");
      tabpanel[i].setAttribute("visible", "");
    };
    // Need to add keyboard functionality
  });
  document.addEventListener("keydown", function () {
    switch (event.key) {
      case "ArrowLeft":
        // console.log(event.key);
        break;
      case "ArrowRight":
        // console.log(event.key);
        break;
      default:
        // console.log("default");
        break;
    }
  });
})();
