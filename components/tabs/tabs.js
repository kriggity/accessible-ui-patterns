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
        f.setAttribute("tabindex", "0");
      });
      // Set this tab button's aria-selected:true
      e.setAttribute("aria-selected", "true");

      // Set this tab button's tabindex:1
      e.setAttribute("tabindex", "1");

      // Set all tabpanels' to hidden
      tabpanel.forEach((panel) => {
        panel.hidden = true;
      });
      // Set the corresponding tabpanel visible
      tabpanel[i].hidden = false;
    };
    // Need to add keyboard functionality
  });
})();
