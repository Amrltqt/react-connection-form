'use strict';

/**
 * Version 1.0
 * Instructions pour le dev
 */

var gulp        = require('gulp')
var browserify  = require('gulp-browserify')
var concat      = require('gulp-concat')
var sass        = require('gulp-sass')

/**
 * Reactify le fichier app/js/main.js pour le mettre dans dist/js
 * avec le même nom.
 */
gulp.task('browserify', function() {
  gulp.src('app/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

/**
 * Copie le fichier index.html dans le répertoire de dist
 */
gulp.task('copy-index', function() {
  gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

/**
 * Génération des feuilles de styles SASS
 */
gulp.task('styles', function() {
  gulp.src('app/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css/'));
});

/**
 * Assignation de la list des tâches par défaut dans l'ordre
 */
gulp.task('default', [
  'browserify',
  'copy-index',
  'styles',
]);

/** Suivi de l'ensemble des modifications dans le répertoire app */
gulp.task('watch', function() {
  gulp.watch('app/**/*.*', ['default']);
})
