const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass');


// Static server & watch scss + html files
gulp.task('watch', ['sass'], function() {

browserSync.init({
server: './src'
});

gulp.watch('src/scss/**/*.scss', ['sass'], browserSync.reload);
gulp.watch('src/*.html').on('change', browserSync.reload);
gulp.watch('src/js/**/*.js', browserSync.reload);

});

// Compile Sass into CSS & inject into browsers
gulp.task('sass', function() {
return gulp.src('src/scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('src/css'))
.pipe(browserSync.stream());
});


// default will also watch
gulp.task('default', ['watch']);

