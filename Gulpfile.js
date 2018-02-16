var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass2css', function() {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
