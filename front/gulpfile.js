const { src, dest } = require('gulp');
const pug = require('gulp-pug');

exports.htmlIndex = () => {
  return src('./src/index.pug')
    .pipe(
      pug({
       pretty:true
      })
    )
    .pipe(dest('./build/'));
};

exports.htmlOtherPages = () => {
  return src('./src/pages/**/*.pug')
    .pipe(
      pug({
       pretty:true
      })
    )
    .pipe(dest('./build/pages/'));
};