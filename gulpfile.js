var gulp = require('gulp');
var minify = require('gulp-minify');
var log = require('fancy-log');

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

// function watch() {
//   gulp.watch(paths.scripts.src, res_stream);
// }

// function res_stream() {
//   return gulp.src(paths.scripts.src)
//   .pipe(minify())
//   .pipe(gulp.dest(paths.scripts.dest));
// }

// gulp.task('timing', function(done) {
//   setTimeout(function() {
//     log('this is a timing test!');
//     done();
//   }, 3000);
// })

// gulp.task('default', gulp.series('timing', function(done) {
//   log('default is running...');
//   done();
// }));

gulp.task('one', function(done) {
  log('gulp one');
  done();
});

gulp.task('two', function(done) {
  log('gulp two');
  done();
});

gulp.task('three', function(done) {
  log('gulp three');
  done();
});

gulp.task('four', gulp.series('one', 'two'));

gulp.task('five',
  gulp.series('four',
    gulp.parallel('three', function(done) {
      log('This is parallel with three');
    })
  )
);

function tree(done) {
  // var out = gulp.tree();
  var out = gulp.tree({
    deep: true
  });
  log('output: ', JSON.stringify(out, null, 2));
  done();
}

gulp.task('default', tree);