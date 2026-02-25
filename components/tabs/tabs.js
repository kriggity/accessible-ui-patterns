"use strict";
(function () {
  const tablists = document.querySelectorAll('[role="tablist"]');

  tablists.forEach((tablist) => {
    const tabs = tablist.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');
    let tabFocus = 0;

    // Roving tabindex pattern:
    // Only the active tab remains tabbable.
    const updateTabFocus = (index) => {
      tabFocus = index;
      resetTabs();
      activateTab(index);
      activatePanel(index);
    };

    const resetTabs = () => {
      tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
      });

      panels.forEach((panel) => {
        panel.setAttribute("hidden", "");
      });
    };

    const activateTab = (index) => {
      tabs[index].setAttribute("aria-selected", "true");
      tabs[index].removeAttribute("tabindex");
      tabs[index].focus();
    };

    const activatePanel = (index) => {
      panels[index].removeAttribute("hidden");
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        updateTabFocus(index);
      });

      tab.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowLeft":
            event.preventDefault();
            if (tabFocus > 0) updateTabFocus(tabFocus - 1);
            break;

          case "ArrowRight":
            event.preventDefault();
            if (tabFocus < tabs.length - 1) updateTabFocus(tabFocus + 1);
            break;

          case "Home":
            event.preventDefault();
            updateTabFocus(0);
            break;

          case "End":
            event.preventDefault();
            updateTabFocus(tabs.length - 1);
            break;
        }
      });
    });
  });
})();
