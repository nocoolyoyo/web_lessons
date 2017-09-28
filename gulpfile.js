/**
 * Created by nocoolyoyo on 2017/10/01.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

//输出最终编译版本stylesheet文件
gulp.task('build', function(){
    return gulp.src('src/scss/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});
//文件监听
gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['build']);
    // Other watchers
});
// // 输出全部文章文件
 gulp.task('sass', ['build', 'watch']);