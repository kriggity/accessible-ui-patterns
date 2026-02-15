"use strict";
(function () {
  // Define vars
  const tab = document.querySelectorAll(".tab");
  const tabpanel = document.querySelectorAll(".tabpanel");
  let tabfocus = 0;
  const updateTabFocus = (x) => {
    tabfocus = x;
    resetTabPanels();
    updateTab(x);
    updateTabPanel(x);
  };
  const resetTabPanels = () => {
    tab.forEach((e) => {
      // Set all tab buttons' aria-selected:false
      e.setAttribute("aria-selected", "false");
      // Set all tab buttons' tabindex:-1
      e.setAttribute("tabindex", "-1");
    });
    // Set all tabpanels' to hidden
    tabpanel.forEach((panel) => {
      panel.removeAttribute("visible");
      panel.setAttribute("hidden", "");
    });
  };
  const updateTab = (x) => {
    // Set this tab button's aria-selected:true
    tab[x].setAttribute("aria-selected", "true");
    // Remove this tab button's tabindex
    tab[x].removeAttribute("tabindex");
  };
  const updateTabPanel = (x) => {
    tabpanel[x].removeAttribute("hidden");
    tabpanel[x].setAttribute("visible", "");
  };
  // For each tab button
  tab.forEach((e, i) => {
    // Click event
    e.onclick = () => {
      updateTabFocus(i);
    };
  });
  // Need to add keyboard functionality
  document.addEventListener("keydown", function () {
    switch (event.key) {
      case "ArrowLeft":
        if (tabfocus > 0) {
          updateTabFocus(tabfocus - 1);
        }
        break;
      case "ArrowRight":
        if (tabfocus < tab.length - 1) {
          updateTabFocus(tabfocus + 1);
        }
        break;
      default:
        break;
    }
  });
})();
