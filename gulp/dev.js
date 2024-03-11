const gulp = require('gulp')
const fileInclude = require('gulp-file-include')
const clean = require('gulp-clean')
const fs = require('fs')
const sass = require('gulp-sass')(require('sass'))
const serverLive = require('gulp-server-livereload')
const sourceMap = require('gulp-sourcemaps')
const webPack = require('webpack-stream')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const changed = require('gulp-changed')





gulp.task('html:dev', function () {
    return gulp.src(['./src/html/**/*.html', '!./src/html/blocks/*.html', '!./src/html/infoCompany/*.html'])
        .pipe(changed('./build/', { hasChanged: changed.compareContents }))
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./build/'))

})

gulp.task('sass:dev', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourceMap.init())
        .pipe(sass())
        .pipe(sourceMap.write())
        .pipe(gulp.dest('./build/css/'))
})
gulp.task('images:dev', function () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin({ verbase: true }))
        .pipe(gulp.dest('./build/images'))
})
gulp.task('fonts:dev', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts'))
})
gulp.task('server:dev', function () {
    return gulp.src('./build')
        .pipe(serverLive({
            livereload: true,
            open: true
        }))
})
gulp.task('clean:dev', function (done) {
    if (fs.existsSync('./build')) {
        return gulp.src('./build', { read: false }).pipe(clean())
    }
    done()
})
gulp.task('js:dev', function () {
    return gulp.src('./srs/js/*.js')

        .pipe(babel())
        .pipe(webPack(require('./../webpack.config.js')))
        .pipe(gulp.dest('./build/js'))
})
gulp.task('watch:dev', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev'))
    gulp.watch('./src/**/*.html', gulp.parallel('html:dev'))
    gulp.watch('./src/images/**/*', gulp.parallel('images:dev'))
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'))
    gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'))
})