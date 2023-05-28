const gulp = require("gulp");
const watch = require("gulp-watch");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoPrefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const cleanCss = require("gulp-clean-css");
const concat = require("gulp-concat");
const imageMin = require("gulp-imagemin");
const jsMinify = require("gulp-minify");
const uglify = require("gulp-uglify");

function distBuild() {
  return gulp.src("*.html").pipe(gulp.dest("dist")).pipe(browserSync.stream());
}

function cssFunc() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(cleanCss())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function jsFunc() {
  return gulp
    .src("src/js/*")
    .pipe(uglify())
    .pipe(concat("scripts.min.js"))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
}

function imgOpt() {
  return gulp
    .src("src/img/*")
    .pipe(imageMin())
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.stream());
}

function watchAll() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("src/scss/**/*", cssFunc).on("change", browserSync.reload);
  gulp.watch("src/js/**/*", jsFunc).on("change", browserSync.reload);
  gulp.watch("src/img/**/*", imgOpt).on("change", browserSync.reload);
  gulp.watch("*.html", distBuild).on("change", browserSync.reload);
}

gulp.task("dev", watchAll);
gulp.task("build", gulp.series(distBuild, cssFunc, jsFunc, imgOpt));

exports.distBuild = distBuild;
exports.cssFunc = cssFunc;
exports.jsFunc = jsFunc;
exports.imgOpt = imgOpt;
exports.watchAll = watchAll;
