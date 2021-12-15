// const {src,watch,dest,series} = require('gulp');
const { series, parallel, src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
// import imagemin from 'gulp-imagemin';
// const imagemin = require('gulp-imagemin');

/*
Learn gulp 

src : point to file to use 
dest : point to folder output 
watch : watch file and folder for changes
*/

function message(cb) {
    console.log("I'm Using Gulp");
    cb();
}
function clean(cb) {
    console.log("finishing all task");
    cb();
}

function compress(cb) {
    return src('assets/images/OS Batch COMP HI RES/*').pipe(imagemin()).pipe(dest('assets/images/os'))
    //    return src('assets/images/OS logos/*').pipe(imagemin()).pipe(dest('assets/images/os'))
}
function compressBatch2(cb) {
    return src('assets/images/ordinary/*').pipe(imagemin()).pipe(dest('assets/images/os'))
    //    return src('assets/images/OS logos/*').pipe(imagemin()).pipe(dest('assets/images/os'))
}
function compressBatch3(cb) {
    return src('assets/images/os/*').pipe(imagemin()).pipe(dest('assets/images/os-min'))
    //    return src('assets/images/OS logos/*').pipe(imagemin()).pipe(dest('assets/images/os'))
}

// function copyHtml(){
//     return src('src/*.html').pipe(dest('dist'))
// }

// function build(cb){
//     series(message,build,watchFile);
//     cb();
// }

// function watchFile(){
//     watch('src/*.html', copyHtml)
// }

// exports.build = build;
exports.default = series(compressBatch3, clean);