'use strict';

// Run 'npm install'

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  prefix = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  svgmin = require('gulp-svgmin'),
  path = require('path'),
  browserSync = require('browser-sync').create();


gulp.task('serve', ['sass', 'js'], function () {
  browserSync.init({
    open: 'external',
    host: 'westerncode.test',
    proxy: 'westerncode.test'
  });
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});


gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
    .on('end', function () { });
});


gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});


gulp.task('svgmin', function () {
  return gulp.src('src/svg/**/*.+(svg)')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/svg'));
});


gulp.task('images', function () {
  return gulp.src('src/img/**/*.+(png|jpg|gif)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});


gulp.task('favicons', function () {
  return gulp.src('src/favicons/**/*.+(ico)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/favicons'));
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'js', 'images', 'favicons', 'svgmin', 'serve']);
