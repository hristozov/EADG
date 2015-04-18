var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    concat = require('gulp-concat'),
    ghPages = require('gulp-gh-pages'),
    jasmine = require('gulp-jasmine-phantom'),
    tslint = require('gulp-tslint');

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: true,
    sortOutput: true,
    target: 'ES5'
});

gulp.task('scripts-compile', function () {
    var tsResult = gulp.src('app/scripts/**/*.ts')
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('dist/scripts/def')),
        tsResult.js
            .pipe(concat('output.js'))
            .pipe(gulp.dest('dist/scripts'))
    ]);
});

gulp.task('tests-compile', function () {
    var tsResult = gulp.src(['app/scripts/**/*.ts', 'spec/**/*.ts'])
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(concat('spec.js'))
        .pipe(gulp.dest('.tmp'));
});


gulp.task('build', ['scripts-compile'], function () {
    return merge([
        gulp.src('app/index.html')
            .pipe(gulp.dest('dist/')),
        gulp.src('bower_components/**/*.*')
            .pipe(gulp.dest('dist/bower_components')),
        gulp.src('app/css/*.*')
            .pipe(gulp.dest('dist/css'))
    ]);

});

gulp.task('test', ['build', 'tests-compile'], function () {
    return gulp.src(['dist/bower_components/angular/angular.js',
                     'dist/bower_components/lodash/lodash.js',
                     'dist/scripts/output.js',
                     '.tmp/spec.js'])
        .pipe(jasmine({
                  integration: true
              }));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('app/**/*.*',
        ['build']);
});

gulp.task('watch-test', function () {
    gulp.watch(['app/**/*.*', 'spec/**/*.*'],
        ['test']);
});


gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});


gulp.task('tslint', function(){
    gulp.src('app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});