//* 1. Local Storage -> Does not clear itself or expires automatically; even when tab/window is closed & system restarted and same website is open

//! Memory capacity is ATLEAST 5 Mb even in mobile phones.

//* 2. Session Storage -> Persisted only for that particular session. Data lost on close of tab or window.

//! Unlike cookies, session storage data is NOT sent to the server during network requests.
//! Session storage has larger capacity to hold ~5 MB, cookies have only 4000 bytes.

//?----------------------------------------------------------------------------------------------

//* WebStorage follow Same-Origin Policy ->

// Protocol
// Host
// Port
// all remains same; in same-origin

localStorage.setItem("user", user);
localStorage.getItem("user");
localStorage.removeItem("user");
