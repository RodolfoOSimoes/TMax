
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

/* styles process */

var stylesSrcFile = 'resources/assets/sass/app.scss';
var styleDistPath = 'public/css/';

gulp.task('styles', function () {
  return gulp.src(stylesSrcFile)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(styleDistPath));
});

/* scripts process */

var scriptsLibSrcFiles = [
  'node_modules/vue/dist/vue.min.js',
  'node_modules/axios/dist/axios.min.js',
  'resources/assets/js/libraries/notify.min.js'
];
var scriptsLibDistPath = './public/js/';
var scriptsLibDistFileName = 'scripts-lib.min.js';

gulp.task('scripts-libraries', function () {
  return gulp.src(scriptsLibSrcFiles)
    .pipe(concat(scriptsLibDistFileName))
    .pipe(gulp.dest(scriptsLibDistPath));
});

var scriptsAppSrcFiles = [
  'resources/assets/js/config.js',
  /* libraries */
  'resources/assets/js/libraries/string.js',
  'resources/assets/js/libraries/date.js',
  /* services */
  'resources/assets/js/services/users.js',
  'resources/assets/js/services/users-roles.js',
  'resources/assets/js/services/notifications.js',
  'resources/assets/js/services/books.js',
  'resources/assets/js/services/reservations.js',
  /* components */
  'resources/assets/js/components/login.js',
  'resources/assets/js/components/panel-menu.js',
  'resources/assets/js/components/panel.js',
  'resources/assets/js/components/books.js',
  'resources/assets/js/components/users.js',
  'resources/assets/js/components/reservations.js',
  'resources/assets/js/app.js'
];
var scriptsAppDistPath = './public/js/';
var scriptsAppDistFileName = 'scripts-app.min.js';

gulp.task('scripts-application', function () {
  return gulp.src(scriptsAppSrcFiles)
    .pipe(uglify())
    .pipe(concat(scriptsAppDistFileName))
    .pipe(gulp.dest(scriptsAppDistPath));
});

var scriptsSrcFiles = [
  scriptsLibDistPath + scriptsLibDistFileName,
  scriptsAppDistPath + scriptsAppDistFileName
];
var scriptsDistFileName = 'app.min.js';
var scriptsDistPath = './public/js/';

gulp.task('scripts', [
    'scripts-libraries',
    'scripts-application'
  ], function () {
    return gulp.src(scriptsSrcFiles)
      .pipe(concat(scriptsDistFileName))
      .pipe(gulp.dest(scriptsDistPath));
});

/* gulp default */

gulp.task('default', ['styles', 'scripts']);