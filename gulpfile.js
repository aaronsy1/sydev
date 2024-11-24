const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { watch, series } = gulp;

// Updated paths based on your project structure
const paths = {
    php: './**/*.php',  // Adjust to your WAMP path
    css: './assets/css/**/*.css',                                 // CSS files in your theme
    js: './assets/js/**/*.js',                                     // JS files in your theme
    html: './**/*.html',                                           // HTML files (if necessary)
};

// BrowserSync: Start server with proxy
function serve(done) {
    console.log("Initializing BrowserSync...");  // Log to check
    browserSync.init({
        proxy: 'http://localhost/sydev', // Adjust for your local WordPress site
        notify: false,                   // Disable notifications
        open: true,                      // Automatically open in the browser
        usePolling: true,                // Enable polling for file changes
        logLevel: 'debug',               // Debug level logging to see events
    });
    done();
}

// Watch for file changes and automatically reload the browser
function watchFiles() {
    watch(paths.php, function(done) {
        console.log("PHP file change detected! Reloading..."); // Log to check
        browserSync.reload();
        done();
    });
    watch(paths.css, function(done) {
        console.log("CSS file change detected! Reloading..."); // Log to check
        browserSync.reload();
        done();
    });
    watch(paths.js, function(done) {
        console.log("JS file change detected! Reloading..."); // Log to check
        browserSync.reload();
        done();
    });
}

// Default task
exports.default = series(serve, watchFiles);
