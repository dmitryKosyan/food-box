const gulp = require('gulp')
require('./gulp/dev.js')
require('./gulp/docs.js')
gulp.task('default', gulp.series(
    gulp.parallel('html:dev', 'sass:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev')
))
gulp.task('docs', gulp.series('clean:docs',
    gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'js:docs'),
    gulp.parallel('server:docs')
))
// 'images:dev', 'fonts:dev','clean:dev',gulp