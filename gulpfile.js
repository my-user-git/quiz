const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixes = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
// const svgSprite = require('gulp-svg-sprite')
// const image = require('gulp-image')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify-es').default
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const clean = () => {
  return del(['dist'])
}

const fonts = () => {
  return src('src/fonts/**')
  .pipe(dest('dist/fonts'))
}

const images = () => {
  return src('src/images/**')
  .pipe(dest('dist/images'))
}

const stylesMinCSS = () => {
  return src('src/styles/**/*.min.css')
  .pipe(sourcemaps.init())
  .pipe(autoprefixes ({
      cascade: false
  })
  )
  .pipe(cleanCSS({
      level: 2
  }))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/styles'))
  .pipe(browserSync.stream())
}

const styles = () => {
  return src(['src/styles/**/*.css',
  '!src/styles/**/*.min.css'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('style.css'))
  .pipe(autoprefixes ({
      cascade: false
  })
  )
  .pipe(cleanCSS({
      level: 2
  }))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/styles'))
  .pipe(browserSync.stream())
}

// "gulp-svg-sprite": "^1.5.0", - добавить в package.json

// const svgSprites = () => {
//   return src('src/images/svg/**/*.svg')
//   .pipe(svgSprite ({
//       mode: {
//           stack: {
//               sprite: '../sprite.svg'
//           }
//       }
//   }))
//   .pipe(dest('dist/images'))
// }

// const scriptsMinJs = () => {
//   return src('src/js/components/*.min.js')
//   .pipe(sourcemaps.init())
//   .pipe(babel ({
//       presets: ['@babel/env']
//   }))
//   .pipe(sourcemaps.write())
//   .pipe(dest('dist/js'))
//   .pipe(browserSync.stream())
// }

const scripts = () => {
  return src([
  'src/js/*.js',
  '!src/js/*.min.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(babel ({
      presets: ['@babel/env']
  }))
  .pipe(concat('main.js'))
  .pipe(uglify({
      toplevel: true
  }).on('error', notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/js'))
  .pipe(browserSync.stream())
}

// const scriptsHome = () => {
//   return src([
//     'src/js/components/home/z-tooltip.js',
//     'src/js/components/home/swiper.js',
//     'src/js/components/home/z-button-more-products.js',
//     'src/js/components/home/z-slider-home.js',
//     'src/js/components/home/z-modal-slider.js',
//     // 'src/js/components/home/z-burger.js', повторил 
//   ])
//   .pipe(sourcemaps.init())
//   .pipe(babel ({
//       presets: ['@babel/env']
//   }))
//   .pipe(concat('home.js'))
//   .pipe(uglify({
//       toplevel: true
//   }).on('error', notify.onError()))
//   .pipe(sourcemaps.write())
//   .pipe(dest('dist/js'))
//   .pipe(browserSync.stream())
// }

// const scriptsCatalog = () => {
//   return src('src/js/components/catalog/*.js')
//   .pipe(sourcemaps.init())
//   .pipe(babel ({
//       presets: ['@babel/env']
//   }))
//   .pipe(concat('catalog.js'))
//   .pipe(uglify({
//       toplevel: true
//   }).on('error', notify.onError()))
//   .pipe(sourcemaps.write())
//   .pipe(dest('dist/js'))
//   .pipe(browserSync.stream())
// }

// const scriptsProduct = () => {
//   return src('src/js/components/product/*.js')
//   .pipe(sourcemaps.init())
//   .pipe(babel ({
//       presets: ['@babel/env']
//   }))
//   .pipe(concat('product.js'))
//   .pipe(uglify({
//       toplevel: true
//   }).on('error', notify.onError()))
//   .pipe(sourcemaps.write())
//   .pipe(dest('dist/js'))
//   .pipe(browserSync.stream())
// }


const htmlMinify = () => {
  return src('src/**/*.html')
  .pipe(htmlMin({
      collapseWhitespace:true,
  }))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const watchfiles = () => {
  browserSync.init({
      server: {
          baseDir: 'dist'
      }
  })
}

// const images =() =>{
//   return src([
//     'src/images/**/*.jpg',
//     'src/images/**/*.png',
//     'src/images/*.svg',
//     'src/images/**/*.jpeg',
//     'src/images/**/*.ico',
//   ])
//     .pipe(image())
//     .pipe(dest('dist/images'))
//     .pipe(browserSync.stream())
// }

watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.css', stylesMinCSS)
watch('src/styles/**/*.css', styles)
watch('src/images/**/*.*', images)
// watch('src/images/svg/**/*.svg', svgSprites)
// watch('src/js/**/*.js', scriptsMinJs)
watch('src/js/**/*.js', scripts)
// watch('src/js/**/*.js', scriptsHome)
// watch('src/js/**/*.js', scriptsCatalog)
// watch('src/js/**/*.js', scriptsProduct)
watch('src/fonts/**', fonts)

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify

// const watchfilesDev = () => {
//   browserSync.init({
//       server: {
//           baseDir: 'dist'
//       }
//   })
// }

//default
exports.default = series(
  clean,
  fonts,
  images,
  // scriptsMinJs,
  scripts,
  // scriptsHome,
  // scriptsCatalog,
  // scriptsProduct,
  stylesMinCSS,
  styles,
  // svgSprites,
  htmlMinify,
  watchfiles
  )

exports.dev = series(
  // scriptsMinJs,
  scripts,
  // scriptsHome,
  // scriptsCatalog,
  // scriptsProduct,
  stylesMinCSS,
  styles,
  watchfiles
  )
