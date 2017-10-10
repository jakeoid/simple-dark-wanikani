var gulp             = require('gulp');
var browserSync      = require('browser-sync').create();
var sass             = require('gulp-sass');
var stripCssComments = require('gulp-strip-css-comments');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("scss/*.scss", ['sass-minimise'])
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(stripCssComments())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);