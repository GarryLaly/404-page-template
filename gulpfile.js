'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
   gulp.src('./assets/sass/main.sass')
      .pipe(sass())
      .pipe(gulp.dest('./assets/css/'));
});

gulp.task('automate', function() {
    gulp.watch(['./assets/sass/*.sass', './assets/sass/components/*.sass'], ['sass']);
});

gulp.task('default', ['sass']);
