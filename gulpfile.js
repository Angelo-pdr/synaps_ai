const gulp = require("gulp")
const less = require("gulp-less")
const sourcemaps = require('gulp-sourcemaps')

function compileLess () {
    return gulp.src("./src/styles/main.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("./public/styles"))
}

exports.watch = function(){
    gulp.watch("./src/styles/main.less", {ignoreInitial: false}, gulp.series(compileLess))
}
