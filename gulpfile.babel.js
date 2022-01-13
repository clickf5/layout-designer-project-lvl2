import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassCompliler from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(sassCompliler);

// dev-server
const runDevServer = () => {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    online: true,
  });
};

// styles
const buildStyles = () => gulp.src('./src/scss/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/css'));

// watcher
const srartWatch = () => {
  gulp.watch('./src/scss/app.scss', buildStyles);
  gulp.watch('./src/css/*.css').on('change', browserSync.reload);
  gulp.watch('./src/*.html').on('change', browserSync.reload);
};

export { buildStyles };

export default gulp.parallel(buildStyles, runDevServer, srartWatch);
