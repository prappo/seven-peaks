const serviceWorkerDev = () => {
    if (!('serviceWorker' in navigator)) { return; } // checking serviceWorker is supported by browser.

    let serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    // Registering serviceWorker
    navigator.serviceWorker.register(serviceWorkerUrl)
        .then(res => console.log('Service worker is registerd.', res))
        .catch(err => console.log('Service worker is not registerd.', err))
}

export { serviceWorkerDev }