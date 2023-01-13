const { src, dest, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () => {
    return src('./src/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./src/css/'))
        .pipe(browserSync.stream());
}

const startServer = () => {
    browserSync.init({
        server: { baseDir: 'src/' },
        notify: false,
        online: true,
    });
};

const startWatch = () => {
    watch(['./src/scss/**/*.scss'], buildStyles);
    watch('./src/*.html').on('change', browserSync.reload);
}

exports.startServer = startServer;
exports.buildStyles = buildStyles;
exports.default = parallel(buildStyles, startServer, startWatch);
