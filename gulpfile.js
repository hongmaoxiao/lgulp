var gulp = require('gulp');
var minify = require('gulp-minify');

var paths = {
  scripts: {
    src: 'source/js/ee/**/*.js',
    dest: 'dist/js'
  }
}

// gulp.task('default', defaultTask);
// gulp.task('default', res_stream);

// function defaultTask(done) {
//   // var now = new Date();
//   // var since = new Date(+now - 10 * 60 * 1000);

//   gulp.src('src/**/*.js', { cwd: '../otherbase' })
//     .pipe(minify())
//     .pipe(gulp.dest('build'));

//   done();
// }

// defaultTask.description = 'It is a default function';

function watch() {
  gulp.watch(paths.scripts.src, res_stream);
}

function res_stream() {
  return gulp.src(paths.scripts.src)
  .pipe(minify())
  .pipe(gulp.dest(paths.scripts.dest));
}

gulp.task('default', watch);
