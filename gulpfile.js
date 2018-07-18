var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', defaultTask);

function defaultTask(done) {
  var now = new Date();
  var since = new Date(+now - 10 * 60 * 1000);

  gulp.src('source/*.js', { since: since })
    .pipe(minify())
    .pipe(gulp.dest('build'));

  done();
}
