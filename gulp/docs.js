const gulp = require('gulp')

const fileInclude = require('gulp-file-include')
const htmlclean = require('gulp-htmlclean');
const webpHTML = require('gulp-webp-html');


const clean = require('gulp-clean')
const fs = require('fs')

const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso');
const webpCss = require('gulp-webp-css');

const serverLive = require('gulp-server-livereload')
const sourceMap = require('gulp-sourcemaps')
const webPack = require('webpack-stream')
const babel = require('gulp-babel')
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin')





gulp.task('html:docs', function () {
    return gulp.src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
        .pipe(htmlclean())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(webpHTML())
        .pipe(gulp.dest('./docs/'))

})

gulp.task('sass:docs', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourceMap.init())
        .pipe(autoprefixer())
        .pipe(sass())
        .pipe(csso())
        .pipe(sourceMap.write())
        .pipe(webpCss())
        .pipe(gulp.dest('./docs/css/'))
})
gulp.task('images:docs', function () {
    return gulp.src('./src/images/**/*')
        .pipe(webp())
        .pipe(gulp.dest('./docs/images'))
        .pipe(gulp.src('./src/images/**/*'))
        .pipe(imagemin({ verbase: true }))
        .pipe(gulp.dest('./docs/images'))
})
gulp.task('fonts:docs', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./docs/fonts'))
})
gulp.task('server:docs', function () {
    return gulp.src('./docs')
        .pipe(serverLive({
            livereload: true,
            open: true
        }))
})
gulp.task('clean:docs', function (done) {
    if (fs.existsSync('./docs')) {
        return gulp.src('./docs', { read: false }).pipe(clean())
    }
    done()
})
gulp.task('js:docs', function () {
    return gulp.src('./srs/js/*.js')

        .pipe(babel())
        .pipe(webPack(require('../webpack.config.js')))
        .pipe(gulp.dest('./docs/js'))
})