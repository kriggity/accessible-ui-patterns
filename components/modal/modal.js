(function () {
    const trigger = document.querySelector('[data-modal-trigger]');
    const dialog = document.getElementById(
        trigger?.getAttribute('data-modal-trigger')
    );
    const closeButton = dialog?.querySelector('[data-modal-close]');
    const overlay = document.querySelector('.overlay');

    let lastFocusedElement = null;

    function openDialog() {
        lastFocusedElement = document.activeElement;

        dialog.hidden = false;
        overlay.hidden = false;

        dialog.setAttribute('tabindex', '-1');
        dialog.focus();

        document.addEventListener('keydown', handleKeydown);
    }

    function closeDialog() {
        dialog.hidden = true;
        overlay.hidden = true;

        dialog.removeAttribute('tabindex');

        document.removeEventListener('keydown', handleKeydown);

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            closeDialog();
        }
    }

    if (trigger && dialog && closeButton) {
        trigger.addEventListener('click', openDialog);
        closeButton.addEventListener('click', closeDialog);
        overlay.addEventListener('click', closeDialog);
    }
})();