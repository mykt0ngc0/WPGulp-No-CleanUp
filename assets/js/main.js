/**
 * Main JS
 */

/* --------------------------------------------------------- */

// Detect Browser
const browser = bowser.getParser(window.navigator.userAgent);
const browserName = browser.getBrowserName().toLowerCase();
document.documentElement.classList.add(browserName);

/* --------------------------------------------------------- */

/* Vanilla JS Scripts */
(function() {
})();

/* --------------------------------------------------------- */

/* JQuery Scripts */
(function($) {
})(jQuery);