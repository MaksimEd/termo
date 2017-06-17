var gulp           = require('gulp'),
  uglify         = require('gulp-uglify'),
  concat         = require('gulp-concat'),
  csso       = require('gulp-csso'), // Минификация CSS
  scss           = require('gulp-sass'),
  imagemin       = require('gulp-imagemin'),
  cache          = require('gulp-cache'),
  browserSync    = require('browser-sync'),
  notify    = require('gulp-notify'),
  spritesmith = require('gulp.spritesmith'),
  htmlmin = require('gulp-htmlmin'),
  connect      = require('connect'); // Webserver
var reload      = browserSync.reload;


 


var paths = {
  html:['dev/*.html'],
  css:['dev/css/**/**/style.scss'],
  js:['dev/js/**/**/*.js'],
  img:['dev/img/**/**/**/**/**/*'],
  sprite:['dev/img/sprites/*.png']
};

// Собираем JS
gulp.task('js', function() {
    gulp.src(paths.js)
  .pipe(uglify().on( 'error', notify.onError(
    {
      message: "<%= error.message %>",
      title  : "JS Error!"
    } ) )
  )
  .pipe(concat('script.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream: true}));
});

gulp.task("scss", function () {
    gulp.src(paths.css)
    .pipe(scss().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sсss Error!"
      } ) )

    )
    .pipe(gulp.dest("dev/css"));
    gulp.src("dev/css/**/**/*.css")
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(gulp.dest("app/css"))
    .pipe(reload({stream: true}));
});

gulp.task('img', function() {
  gulp.src(paths.img)
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('app/img'))
  .pipe(reload({stream: true}));
});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('app'))
  .pipe(reload({stream:true}));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src(paths.sprite).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding: 20,
    algorithm: 'top-down'
  }));
  return spriteData
      .pipe(gulp.dest('dev/css'));
      gulp.task(['scss']);
});


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    port: 8080,
    open: true,
    notify: false   
    // tunnel: true,
    // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
  });
});

gulp.task('build', function() {
  var buildFiles = gulp.src([
    'dev/*.html'
    ]).pipe(gulp.dest('app'));

  var buildFonts = gulp.src([
    'dev/fonts/**/*'
    ]).pipe(gulp.dest('app/fonts'));

  var buildCss = gulp.src([
    'dev/css/**/*'
    ]).pipe(gulp.dest('app/css'));

  var buildJs = gulp.src([
    'dev/js/**/*', 
    ]).pipe(gulp.dest('app/js'));

});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['scss']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.img, ['img']);
  gulp.watch(paths.sprite, ['sprite']);
});


gulp.task('default', ['watcher', 'browser-sync']);
gulp.task('clearcache', function () { return cache.clearAll(); });