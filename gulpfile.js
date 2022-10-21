// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var watch = require('gulp-watch');

gulp.task('sass', function(cb) {
    gulp
        .src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./')
    );
    cb();
});

gulp.task(
    'default',
    gulp.series('sass', function(cb) {
        gulp.watch('*.scss', gulp.series('sass'));
        cb();
    })
);

gulp.task('watch', function(cb) {
    gulp.watch(['scss/**/*.scss'], gulp.series(['sass']));
});