var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');

gulp.task('stylus', function() {
  return gulp.src('./test.styl')
    .pipe(stylus({
      use: [jeet()]
    }))
    .pipe(gulp.dest('./out'));
});
