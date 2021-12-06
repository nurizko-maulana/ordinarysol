const {src,watch,dest,series} = require('gulp');
const imagemin = require('gulp-imagemin');

/*
Learn gulp 

src : point to file to use 
dest : point to folder output 
watch : watch file and folder for changes
*/

function message(cb){
    console.log("I'm Using Gulp");
    cb();
}

// function copyHtml(){
//     return src('src/*.html').pipe(dest('dist'))
// }

function build(cb){
    series(message,build,watchFile);
    cb();
}

// function watchFile(){
//     watch('src/*.html', copyHtml)
// }

exports.build = build;
exports.default = watchFile;