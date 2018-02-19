var gulp = require('gulp');
var sass = require('gulp-sass');
var cssInlineImages = require('gulp-css-inline-images');

gulp.task('sass2css', function() {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('inline-images', function () {
    gulp.src('css/main.css')
        .pipe(cssInlineImages({
            webRoot: '.',
            path: '/assets/images'
        }))
        .pipe(gulp.dest('./build'));
});
