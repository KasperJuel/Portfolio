// Gulp & gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

// Sass compress & sourcemapping
gulp.task('sass', function () {
    return sass('sass/styles.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

// Image compress
gulp.task('imgmin', function() {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{cleanupIDs: false}]
        }))
        .pipe(gulp.dest('dist/compressed'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch(['sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', 
    ['sass', 'imgmin', 'watch', 'webserver']
);

