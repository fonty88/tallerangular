/* Importamos gulp */
const gulp = require('gulp');

/* Otros módulos que vayamos a necesitar */
// server
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;
// watch
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!mocks/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false/*,
      middleware: [ apiFallback() ] */
    },
  });

  gulp.watch("src/app/**/*.js").on("change", reload);
});


gulp.task('default', ['browserSync'], function() {
    console.log('Default');
});