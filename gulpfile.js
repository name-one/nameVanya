const gulp = require('gulp'),
sass = require('gulp-sass'),
ejs = require('gulp-ejs'),
browserSync = require('browser-sync').create(),
babel = require('gulp-babel'),
rollup = require('rollup-stream'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer');

gulp.task('styles', () => {
    return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles'))
    .pipe(browserSync.stream());

});

gulp.task('assets', () => {
    return gulp.src('src/assets/**/*')
            .pipe(gulp.dest('public/assets'));
});

gulp.task('html', () => {
    return gulp.src('src/templates/*.ejs')
        .pipe(ejs({}, {}, { ext: '.html' }))
        .pipe(gulp.dest('public'));
})


gulp.task('js', function() {
    return rollup({input:  'src/app.js', format: 'es'})
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(babel({
        presets: ['@babel/env'],
    }))
      .pipe(gulp.dest('./public/js'));
  });

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    gulp.watch("src/**/*.js", ['js']);
    gulp.watch("src/assets/**/*", ['assets']);
    gulp.watch("src/templates/**/*.ejs", ['html']);
    gulp.watch("src/sass/**/*.scss", ['styles']);
    gulp.watch("public/js/*.js").on('change', browserSync.reload);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);