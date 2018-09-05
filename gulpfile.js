const gulp = require('gulp'),
sass = require('gulp-sass'),
ejs = require('gulp-ejs'),
browserSync = require('browser-sync').create(),
browserify = require('gulp-browserify'),
babel = require('gulp-babel');

gulp.task('styles', () => {
    return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles'))
    .pipe(browserSync.stream());

});

gulp.task('html', () => {
    return gulp.src('src/templates/*.ejs')
        .pipe(ejs({}, {}, { ext: '.html' }))
        .pipe(gulp.dest('public'));
})

gulp.task('js', () => {
    gulp.src('src/app.js')
    .pipe(browserify({
        debug: true
    }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch("src/**/*.js", ['js']);
    gulp.watch("src/templates/**/*.ejs", ['html']);
    gulp.watch("src/sass/**/*.scss", ['styles']);
    gulp.watch("public/**/*.js").on('change', browserSync.reload);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);