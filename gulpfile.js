var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    concat = require('gulp-concat'),
    ghPages = require('gulp-gh-pages');

var tsProject = ts.createProject({
                                     declarationFiles: true,
                                     noExternalResolve: true,
                                     sortOutput: true,
                                     target: 'ES5'
                                 });

gulp.task('default', function () {
});

gulp.task('scripts', function () {
    var tsResult = gulp.src('app/scripts/**/*.ts')
        .pipe(ts(tsProject));

    return merge([
                     tsResult.dts.pipe(gulp.dest('dist/scripts/def')),
                     tsResult.js
                         .pipe(concat('output.js'))
                         .pipe(gulp.dest('dist/scripts'))
                 ]);
});

gulp.task('watch', ['build'], function () {
    gulp.watch('app/**/*.*',
               ['build']);
});

gulp.task('build', ['scripts'], function () {
    return merge([
                     gulp.src('app/index.html')
                         .pipe(gulp.dest('dist/')),
                     gulp.src('bower_components/**/*.*')
                         .pipe(gulp.dest('dist/bower_components')),
                     gulp.src('app/css/*.*')
                         .pipe(gulp.dest('dist/css'))
                 ]);

});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});
