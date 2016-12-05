import gulp from "gulp";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";

gulp.task("bundle", function () {
  return browserify({
    entries: "./app/main.jsx",
    debug: true,
  }).transform(babelify.configure({
  presets: ["es2015", "react"]
}))
  .bundle()
  .pipe(source("main.js"))
  .pipe(gulp.dest("app/dist"));
});

gulp.task("copy", ["bundle"], function () {
  return gulp.src(["app/index.html"]).pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"], function() {
  console.log("Gulped!");
});
