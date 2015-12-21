var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    jade = require('gulp-jade')


gulp.task('sass', function(cb) {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .on('error', swallowError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream())
})

gulp.task('js', function(cb) {
  return gulp.src('app/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js/'))
})

gulp.task('jade', function(cb) {
  return gulp.src('app/jade/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function(cb) {
  gulp.watch('app/sass/**/*.sass', ['sass'])
  gulp.watch('app/js/**/*.js', ['js']).on('change', browserSync.reload)
  gulp.watch('dist/index.html').on('change', browserSync.reload)
  gulp.watch('app/**/*.jade', ['jade'])
})

gulp.task('server', function(cb) {
  browserSync.init({
    server: {
        baseDir: "./dist/"
    }
  });
})

gulp.task('default', ['jade', 'sass', 'js', 'watch', 'server'], function() {})

function swallowError (error) {
  //If you want details of the error in the console
  console.error( error.toString() )
  this.emit('end')
}