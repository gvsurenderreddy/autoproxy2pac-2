var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('./src/**/*.js').pipe(babel({
        optional: ['runtime']
    })).pipe(gulp.dest('./build'));
});