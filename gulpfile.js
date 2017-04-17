const gulp = require("gulp");

// Sample code to implement build system.
gulp.task("default", () => {
    return gulp.src("syntaxes/gls.tmLanguage.format")
        .pipe(gulp.dest("syntaxes/gls.tmLanguage"));
});