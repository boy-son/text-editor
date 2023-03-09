const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.hidden = false;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    // const result = await promptEvent.userChoice;
    // if (result.outcome === 'accepted') {
    //     console.log('User accepted the prompt');
    // } else {
    //     console.log('User dismissed the prompt');
    // }
    window.deferredPrompt = null;
    butInstall.hidden = true;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
    window.deferredPrompt = null;
});
